import httpx


class GitHubService:
    BASE_URL = "https://api.github.com"

    async def get_latest_commits(self, owner: str, repo: str):
        url = f"{self.BASE_URL}/repos/{owner}/{repo}/commits?per_page=20"

        async with httpx.AsyncClient() as client:
            response = await client.get(url)

        if response.status_code != 200:
            raise Exception("Unable to fetch repository commits.")

        return response.json()


github_service = GitHubService()