class RepositoryStatistics:

    @staticmethod
    def calculate(commit_details):

        total_files = 0
        total_additions = 0
        total_deletions = 0

        largest_commit = 0
        smallest_commit = float("inf")

        for commit in commit_details:

            files_changed = commit.get("files_changed", 0)
            additions = commit.get("additions", 0)
            deletions = commit.get("deletions", 0)
            total_changes = commit.get("total_changes", 0)

            total_files += files_changed
            total_additions += additions
            total_deletions += deletions

            largest_commit = max(largest_commit, total_changes)
            smallest_commit = min(smallest_commit, total_changes)

        count = len(commit_details)

        if count == 0:
            return {
                "average_files_changed": 0,
                "average_additions": 0,
                "average_deletions": 0,
                "largest_commit": 0,
                "smallest_commit": 0
            }

        if smallest_commit == float("inf"):
            smallest_commit = 0

        return {
            "average_files_changed": round(total_files / count, 2),
            "average_additions": round(total_additions / count, 2),
            "average_deletions": round(total_deletions / count, 2),
            "largest_commit": largest_commit,
            "smallest_commit": smallest_commit
        }