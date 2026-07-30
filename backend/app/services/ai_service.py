from groq import Groq

from app.core.config import settings


class AIService:

    client = Groq(api_key=settings.GROQ_API_KEY)

    @classmethod
    def generate_summary(
        cls,
        commits,
        statistics,
        health_score,
        score_breakdown,
        rating
    ):

        commit_messages = "\n".join(
            f"- {commit['message']}"
            for commit in commits
        )

        prompt = f"""
You are an experienced Senior Software Engineer and GitHub Repository Reviewer.

Analyze the following repository and produce a professional report.

Repository Health Score:
{health_score}/100

Overall Rating:
{rating}

Score Breakdown:
- Commit Quality: {score_breakdown["commit_quality"]}/25
- Repository History: {score_breakdown["repository_history"]}/20
- Commit Size: {score_breakdown["commit_size"]}/20
- Commit Diversity: {score_breakdown["commit_diversity"]}/20
- Repository Activity: {score_breakdown["repository_activity"]}/15

Repository Statistics:
- Average Files Changed: {statistics["average_files_changed"]}
- Average Additions: {statistics["average_additions"]}
- Average Deletions: {statistics["average_deletions"]}
- Largest Commit: {statistics["largest_commit"]}
- Smallest Commit: {statistics["smallest_commit"]}

Recent Commit Messages:
{commit_messages}

Write a concise report using EXACTLY these headings:

## Executive Summary

(2-3 sentences)

## Strengths

(3-5 bullet points)

## Weaknesses

(3-5 bullet points)

## Recommendations

(3-5 actionable recommendations)

Keep the response under 350 words.

Do NOT repeat raw statistics.
Do NOT mention missing information.
Use a professional tone suitable for engineering managers.
"""

        try:

            response = cls.client.chat.completions.create(

                model=settings.GROQ_MODEL,

                messages=[
                    {
                        "role": "system",
                        "content": (
                            "You are an expert software architect "
                            "specializing in GitHub repository analysis."
                        )
                    },
                    {
                        "role": "user",
                        "content": prompt
                    }
                ],

                temperature=0.3,

                max_tokens=500

            )

            return response.choices[0].message.content.strip()

        except Exception as e:

            return f"AI Summary could not be generated: {str(e)}"