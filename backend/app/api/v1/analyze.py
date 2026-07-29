from fastapi import APIRouter, HTTPException

from app.schemas.request_models import RepositoryRequest
from app.services.github_service import github_service
from app.utils.helpers import extract_repo_details

router = APIRouter()


@router.post("/analyze")
async def analyze_repository(request: RepositoryRequest):

    try:
        owner, repo = extract_repo_details(str(request.repository_url))

        commits = await github_service.get_latest_commits(owner, repo)

        return {
            "repository": f"{owner}/{repo}",
            "total_commits": len(commits),
            "commits": commits
        }

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))