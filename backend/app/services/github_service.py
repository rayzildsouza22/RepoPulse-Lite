import httpx

from app.core.config import settings


class GitHubService:

    def __init__(self):

        self.base_url = settings.GITHUB_API_BASE_URL.rstrip("/")

        self.headers = {
            "Accept": "application/vnd.github+json",
            "User-Agent": "RepoPulse-Lite"
        }

        if settings.GITHUB_TOKEN:
            self.headers["Authorization"] = (
                f"Bearer {settings.GITHUB_TOKEN}"
            )

        self.client = httpx.AsyncClient(
            timeout=30,
            headers=self.headers
        )

    async def _get(self, endpoint: str):

        try:

            response = await self.client.get(
                f"{self.base_url}{endpoint}"
            )

            response.raise_for_status()

            return response.json()

        except httpx.HTTPStatusError as e:

            if e.response.status_code == 404:
                raise Exception("Repository not found.")

            if e.response.status_code == 403:
                raise Exception(
                    "GitHub API rate limit exceeded or invalid token."
                )

            raise Exception(
                f"GitHub API Error ({e.response.status_code})"
            )

        except httpx.RequestError:
            raise Exception(
                "Unable to connect to GitHub."
            )

    # ----------------------------------------------------
    # Repository Information
    # ----------------------------------------------------

    async def get_repository(self, owner: str, repo: str):

        data = await self._get(
            f"/repos/{owner}/{repo}"
        )

        license_name = None

        if data.get("license"):
            license_name = data["license"].get("name")

        return {

            "name": data.get("name"),

            "owner": data["owner"]["login"],

            "full_name": data.get("full_name"),

            "description": data.get("description"),

            "language": data.get("language"),

            "stars": data.get("stargazers_count", 0),

            "forks": data.get("forks_count", 0),

            "watchers": data.get("watchers_count", 0),

            "subscribers": data.get("subscribers_count", 0),

            "network_count": data.get("network_count", 0),

            "open_issues": data.get("open_issues_count", 0),

            "default_branch": data.get("default_branch"),

            "license": license_name,

            "topics": data.get("topics", []),

            "homepage": data.get("homepage"),

            "created_at": data.get("created_at"),

            "updated_at": data.get("updated_at"),

            "pushed_at": data.get("pushed_at"),

            "size_kb": data.get("size", 0),

            "visibility": (
                "Private"
                if data.get("private")
                else "Public"
            ),

            "archived": data.get("archived", False),

            "disabled": data.get("disabled", False)
        }

    # ----------------------------------------------------
    # Latest Commits
    # ----------------------------------------------------

    async def get_latest_commits(
        self,
        owner: str,
        repo: str,
        limit: int = 20
    ):

        return await self._get(
            f"/repos/{owner}/{repo}/commits?per_page={limit}"
        )

    # ----------------------------------------------------
    # Commit Details
    # ----------------------------------------------------

    async def get_commit_details(
        self,
        owner: str,
        repo: str,
        sha: str
    ):

        data = await self._get(
            f"/repos/{owner}/{repo}/commits/{sha}"
        )

        stats = data.get("stats", {})

        return {

            "sha": sha,

            "files_changed": len(
                data.get("files", [])
            ),

            "additions": stats.get(
                "additions",
                0
            ),

            "deletions": stats.get(
                "deletions",
                0
            ),

            "total_changes": stats.get(
                "total",
                0
            )
        }

    async def close(self):
        await self.client.aclose()


github_service = GitHubService()