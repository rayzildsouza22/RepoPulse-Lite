from datetime import datetime, timezone

from app.models.enums import RepositoryGrade, RepositoryRating


class HealthScore:
    """
    Calculates Repository Health Score (0-100)

    Score Distribution
    ------------------
    Commit Quality       : 25
    Repository History   : 20
    Commit Size          : 20
    Commit Diversity     : 20
    Repository Activity  : 15
    """

    @staticmethod
    def calculate(commits, statistics, repository_info):

        total_commits = len(commits)

        tier1 = sum(1 for c in commits if c["tier"] == "Tier 1")
        tier2 = sum(1 for c in commits if c["tier"] == "Tier 2")
        tier3 = sum(1 for c in commits if c["tier"] == "Tier 3")

        # ====================================================
        # 1. Commit Quality (25)
        # ====================================================

        if total_commits == 0:
            quality_score = 0

        else:

            weighted = (
                (tier1 * 3) +
                (tier2 * 2) +
                (tier3 * 1)
            ) / (total_commits * 3)

            quality_score = round(weighted * 25)

        # ====================================================
        # 2. Repository History (20)
        # Based on repository age instead of last 20 commits
        # ====================================================

        created = datetime.fromisoformat(
            repository_info["created_at"].replace("Z", "+00:00")
        )

        years = (
            datetime.now(timezone.utc) - created
        ).days / 365

        if years >= 5:
            history_score = 20

        elif years >= 3:
            history_score = 18

        elif years >= 2:
            history_score = 15

        elif years >= 1:
            history_score = 12

        elif years >= 0.5:
            history_score = 8

        else:
            history_score = 5

        # ====================================================
        # 3. Commit Size (20)
        # ====================================================

        avg_changes = (
            statistics["average_additions"] +
            statistics["average_deletions"]
        )

        if avg_changes <= 100:
            size_score = 20

        elif avg_changes <= 300:
            size_score = 18

        elif avg_changes <= 700:
            size_score = 15

        elif avg_changes <= 1500:
            size_score = 12

        elif avg_changes <= 3000:
            size_score = 8

        else:
            size_score = 5

        # ====================================================
        # 4. Commit Diversity (20)
        # ====================================================

        diversity = sum([
            tier1 > 0,
            tier2 > 0,
            tier3 > 0
        ])

        if diversity == 3:
            diversity_score = 20

        elif diversity == 2:
            diversity_score = 15

        else:
            diversity_score = 8

        # ====================================================
        # 5. Repository Activity (15)
        # Based on last push date
        # ====================================================

        pushed = datetime.fromisoformat(
            repository_info["pushed_at"].replace("Z", "+00:00")
        )

        days = (
            datetime.now(timezone.utc) - pushed
        ).days

        if days <= 7:
            activity_score = 15

        elif days <= 30:
            activity_score = 13

        elif days <= 90:
            activity_score = 10

        elif days <= 180:
            activity_score = 7

        else:
            activity_score = 5

        # ====================================================
        # Final Score
        # ====================================================

        final_score = (
            quality_score +
            history_score +
            size_score +
            diversity_score +
            activity_score
        )

        final_score = max(0, min(100, round(final_score)))

        # ====================================================
        # Grade
        # ====================================================

        if final_score >= 90:
            grade = RepositoryGrade.A_PLUS.value

        elif final_score >= 80:
            grade = RepositoryGrade.A.value

        elif final_score >= 70:
            grade = RepositoryGrade.B.value

        elif final_score >= 60:
            grade = RepositoryGrade.C.value

        elif final_score >= 50:
            grade = RepositoryGrade.D.value

        else:
            grade = RepositoryGrade.F.value

        # ====================================================
        # Rating
        # ====================================================

        if final_score >= 90:
            rating = RepositoryRating.EXCELLENT.value

        elif final_score >= 80:
            rating = RepositoryRating.VERY_GOOD.value

        elif final_score >= 65:
            rating = RepositoryRating.GOOD.value

        elif final_score >= 50:
            rating = RepositoryRating.FAIR.value

        else:
            rating = RepositoryRating.NEEDS_IMPROVEMENT.value

        # ====================================================
        # Maturity
        # ====================================================

        stars = repository_info.get("stars", 0)

        if stars >= 5000:
            maturity = "Enterprise"

        elif stars >= 500:
            maturity = "Mature"

        elif stars >= 50:
            maturity = "Growing"

        else:
            maturity = "Starter"

        # ====================================================
        # Explanation
        # ====================================================

        if final_score >= 90:

            explanation = (
                "Excellent repository with consistent engineering practices, "
                "active maintenance and high-quality commits."
            )

        elif final_score >= 75:

            explanation = (
                "Well-maintained repository with good commit practices and "
                "healthy development activity."
            )

        elif final_score >= 60:

            explanation = (
                "Repository is reasonably maintained but can improve commit "
                "quality, size and consistency."
            )

        else:

            explanation = (
                "Repository would benefit from better commit practices, "
                "smaller commits and more consistent development."
            )

        return {

            "health_score": final_score,

            "grade": grade,

            "rating": rating,

            "maturity": maturity,

            "explanation": explanation,

            "score_breakdown": {

                "commit_quality": quality_score,

                "repository_history": history_score,

                "commit_size": size_score,

                "commit_diversity": diversity_score,

                "repository_activity": activity_score

            },

            "tier_distribution": {

                "Tier 1": tier1,

                "Tier 2": tier2,

                "Tier 3": tier3

            }

        }