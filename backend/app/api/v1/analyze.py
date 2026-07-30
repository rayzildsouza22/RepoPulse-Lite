import asyncio
import time
import traceback

from fastapi import APIRouter, HTTPException

from app.schemas.request_models import RepositoryRequest
from app.services.github_service import github_service
from app.services.commit_analyzer import CommitAnalyzer
from app.services.statistics import RepositoryStatistics
from app.services.health_score import HealthScore
from app.services.ai_service import AIService
from app.utils.helpers import extract_repo_details

router = APIRouter()


@router.post("/analyze")
async def analyze_repository(request: RepositoryRequest):

    start_time = time.perf_counter()

    try:

        owner, repo = extract_repo_details(
            str(request.repository_url)
        )

        repository_info, commits = await asyncio.gather(
            github_service.get_repository(owner, repo),
            github_service.get_latest_commits(owner, repo)
        )

        if not commits:
            raise HTTPException(
                status_code=404,
                detail="Repository contains no commits."
            )

        analyzed_commits = []

        for commit in commits:

            message = commit["commit"]["message"]

            analyzed_commits.append({

                "sha": commit["sha"],
                "short_sha": commit["sha"][:7],
                "author": commit["commit"]["author"]["name"],
                "message": message,
                "tier": CommitAnalyzer.classify_commit(message)

            })

        commit_details = await asyncio.gather(

            *[
                github_service.get_commit_details(
                    owner,
                    repo,
                    commit["sha"]
                )

                for commit in analyzed_commits
            ]

        )

        statistics = RepositoryStatistics.calculate(
            commit_details
        )

        health = HealthScore.calculate(
            analyzed_commits,
            statistics,
            repository_info
        )

        ai_summary = AIService.generate_summary(

            commits=analyzed_commits,

            statistics=statistics,

            health_score=health["health_score"],

            score_breakdown=health["score_breakdown"],

            rating=health["rating"]

        )

        execution_time = round(
            time.perf_counter() - start_time,
            2
        )

        return {

            "repository": f"{owner}/{repo}",

            "repository_info": repository_info,

            "health_score": health["health_score"],

            "grade": health["grade"],

            "rating": health["rating"],

            "maturity": health["maturity"],

            "explanation": health["explanation"],

            "score_breakdown": health["score_breakdown"],

            "tier_distribution": health["tier_distribution"],

            "statistics": statistics,

            "execution_time": execution_time,

            "ai_summary": ai_summary,

            "total_commits": len(analyzed_commits),

            "commits": analyzed_commits

        }

    except HTTPException:
        raise

    except Exception as e:

        print("\n" + "=" * 80)
        print("EXCEPTION OCCURRED")
        print("=" * 80)
        traceback.print_exc()
        print("=" * 80)

        raise HTTPException(
            status_code=500,
            detail=str(e)
        )