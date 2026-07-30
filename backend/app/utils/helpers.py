import re


def extract_repo_details(repository: str):
    """
    Extract owner and repository name from a GitHub URL or owner/repo string.

    Supported formats:
        https://github.com/openai/openai-python
        https://github.com/openai/openai-python/
        https://github.com/openai/openai-python.git
        http://github.com/openai/openai-python
        github.com/openai/openai-python
        openai/openai-python
    """

    repository = repository.strip()

    # ------------------------------------------
    # Case 1: owner/repository
    # ------------------------------------------
    owner_repo_pattern = r"^[A-Za-z0-9_.-]+/[A-Za-z0-9_.-]+$"

    if re.match(owner_repo_pattern, repository):
        owner, repo = repository.split("/")
        return owner, repo

    # ------------------------------------------
    # Case 2: GitHub URL
    # ------------------------------------------
    github_pattern = (
        r"^(?:https?:\/\/)?"
        r"(?:www\.)?"
        r"github\.com\/"
        r"([A-Za-z0-9_.-]+)\/"
        r"([A-Za-z0-9_.-]+)"
        r"(?:\.git)?\/?$"
    )

    match = re.match(github_pattern, repository)

    if not match:
        raise ValueError(
            "Invalid GitHub repository URL.\n"
            "Example: https://github.com/openai/openai-python"
        )

    owner = match.group(1)
    repo = match.group(2)

    return owner, repo