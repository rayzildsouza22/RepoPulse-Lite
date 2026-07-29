from urllib.parse import urlparse


def extract_repo_details(repo_url: str):
    parsed = urlparse(repo_url)

    path = parsed.path.strip("/")

    parts = path.split("/")

    if len(parts) < 2:
        raise ValueError("Invalid GitHub repository URL.")

    return parts[0], parts[1]