from enum import Enum


class CommitTier(str, Enum):
    """
    Commit impact levels.
    """

    TIER_1 = "Tier 1"
    TIER_2 = "Tier 2"
    TIER_3 = "Tier 3"


class RepositoryRating(str, Enum):
    """
    Overall repository quality.
    """

    EXCELLENT = "Excellent"
    VERY_GOOD = "Very Good"
    GOOD = "Good"
    FAIR = "Fair"
    NEEDS_IMPROVEMENT = "Needs Improvement"


class RepositoryGrade(str, Enum):
    """
    Repository grade.
    """

    A_PLUS = "A+"
    A = "A"
    B = "B"
    C = "C"
    D = "D"
    F = "F"