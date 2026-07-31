import { Navigate, useLocation } from "react-router-dom";

import RepositoryHeader from "../components/report/RepositoryHeader";
import HealthScoreCard from "../components/report/HealthScoreCard";
import StatisticsGrid from "../components/report/StatisticsGrid";
import ScoreBreakdown from "../components/report/ScoreBreakdown";
import TierDistribution from "../components/report/TierDistribution";
import AISummaryCard from "../components/report/AISummaryCard";
import CommitTable from "../components/report/CommitTable";

import type { AnalysisResponse } from "../types/analysis";

function Report() {
  const { state } = useLocation();

  const data = state as AnalysisResponse | undefined;

  if (!data) {
    return <Navigate to="/" replace />;
  }

  return (
    <main className="min-h-screen bg-[#0B1120] px-8 py-10 lg:px-12 xl:px-20">
      <div className="mx-auto w-full max-w-[1800px] px-8 space-y-8">

        {/* Repository Header */}
        <RepositoryHeader
          repository={data.repository}
          info={data.repository_info}
        />

        {/* Health + Statistics */}
        <section className="grid grid-cols-1 gap-8 xl:grid-cols-3">

          <div className="xl:col-span-1">
            <HealthScoreCard
              score={data.health_score}
              grade={data.grade}
              rating={data.rating}
              maturity={data.maturity}
              explanation={data.explanation}
            />
          </div>

          <div className="xl:col-span-2">
            <StatisticsGrid
              repositoryInfo={data.repository_info}
              statistics={data.statistics}
              executionTime={data.execution_time}
            />
          </div>

        </section>

        {/* Score + Chart */}
        <section className="grid grid-cols-1 gap-8 xl:grid-cols-2">

          <ScoreBreakdown
            breakdown={data.score_breakdown}
          />

          <TierDistribution
            distribution={data.tier_distribution}
          />

        </section>

        {/* AI Summary */}
        <AISummaryCard
          summary={data.ai_summary}
        />

        {/* Commit Table */}
        <CommitTable
          commits={data.commits}
        />

      </div>
    </main>
  );
}

export default Report;