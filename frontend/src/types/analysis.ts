export interface RepositoryInfo {
  name: string;
  owner: string;
  full_name: string;
  description: string | null;
  language: string | null;
  stars: number;
  forks: number;
  watchers: number;
  subscribers: number;
  network_count: number;
  open_issues: number;
  default_branch: string;
  license: string | null;
  topics: string[];
  homepage: string | null;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  size_kb: number;
  visibility: string;
  archived: boolean;
  disabled: boolean;
}

export interface Statistics {
  average_files_changed: number;
  average_additions: number;
  average_deletions: number;
  largest_commit: number;
  smallest_commit: number;
}

export interface ScoreBreakdown {
  commit_quality: number;
  repository_history: number;
  commit_size: number;
  commit_diversity: number;
  repository_activity: number;
}

export interface TierDistribution {
  "Tier 1": number;
  "Tier 2": number;
  "Tier 3": number;
}

export interface Commit {
  sha: string;
  short_sha: string;
  author: string;
  message: string;
  tier: string;
}

export interface AnalysisResponse {
  repository: string;

  repository_info: RepositoryInfo;

  health_score: number;
  grade: string;
  rating: string;
  maturity: string;
  explanation: string;

  score_breakdown: ScoreBreakdown;

  tier_distribution: TierDistribution;

  statistics: Statistics;

  execution_time: number;

  ai_summary: string;

  total_commits: number;

  commits: Commit[];
}