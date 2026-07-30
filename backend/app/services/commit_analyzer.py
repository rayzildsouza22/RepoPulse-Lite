import re

from app.models.enums import CommitTier


class CommitAnalyzer:
    """
    Tier 1 -> High-quality engineering commits
    Tier 2 -> Regular development commits
    Tier 3 -> Low-information / maintenance commits
    """

    TIER_1_PREFIXES = {
        "feat",
        "fix",
        "refactor",
        "perf",
        "security",
        "build",
        "ci",
        "release",
    }

    TIER_2_KEYWORDS = {
        "login",
        "auth",
        "authentication",
        "authorization",
        "oauth",
        "jwt",
        "api",
        "backend",
        "frontend",
        "database",
        "db",
        "crud",
        "graphql",
        "rest",
        "endpoint",
        "model",
        "schema",
        "migration",
        "deploy",
        "docker",
        "kubernetes",
        "chat",
        "rag",
        "payment",
        "feature",
        "implement",
        "create",
        "add",
        "update",
        "upgrade",
        "improve",
        "enhance",
        "remove",
        "rename",
        "modify",
        "change",
    }

    TIER_3_KEYWORDS = {
        "docs",
        "documentation",
        "readme",
        "comment",
        "comments",
        "typo",
        "style",
        "format",
        "formatting",
        "license",
        "gitignore",
        "chore",
        "done",
        "final",
        "the",
        "end",
        "temp",
        "temporary",
        "misc",
        "wip",
        "work",
        "progress",
        "test",
        "testing",
    }

    @classmethod
    def classify_commit(cls, message: str) -> str:

        if not message:
            return CommitTier.TIER_3.value

        message = message.lower().strip()

        # Conventional Commit prefix
        match = re.match(r"^([a-z]+)(\(.+\))?:", message)

        if match:
            prefix = match.group(1)

            if prefix in cls.TIER_1_PREFIXES:
                return CommitTier.TIER_1.value

            if prefix in {"docs", "style", "chore"}:
                return CommitTier.TIER_3.value

            return CommitTier.TIER_2.value

        words = set(re.findall(r"\b[a-z0-9]+\b", message))

        if words & cls.TIER_2_KEYWORDS:
            return CommitTier.TIER_2.value

        if words & cls.TIER_3_KEYWORDS:
            return CommitTier.TIER_3.value

        return CommitTier.TIER_2.value