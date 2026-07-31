import { motion } from "framer-motion";
import type { ScoreBreakdown as Breakdown } from "../../types/analysis";

type Props = {
  breakdown: Breakdown;
};

function Progress({
  label,
  value,
  max = 20,
}: {
  label: string;
  value: number;
  max?: number;
}) {
  const percentage = (value / max) * 100;

  return (
    <div className="mb-7">
      <div className="mb-3 flex items-center justify-between">
        <span className="font-medium text-slate-300">
          {label}
        </span>

        <span className="font-bold text-sky-400">
          {value}/{max}
        </span>
      </div>

      <div className="h-4 overflow-hidden rounded-full bg-slate-700">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1 }}
          className="h-full rounded-full bg-gradient-to-r from-sky-500 to-cyan-400"
        />
      </div>
    </div>
  );
}

function ScoreBreakdown({ breakdown }: Props) {
  return (
    <div className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-lg">
      <h2 className="mb-8 text-2xl font-bold text-white">
        📊 Score Breakdown
      </h2>

      <Progress
        label="Commit Quality"
        value={breakdown.commit_quality}
      />

      <Progress
        label="Repository History"
        value={breakdown.repository_history}
      />

      <Progress
        label="Commit Size"
        value={breakdown.commit_size}
      />

      <Progress
        label="Commit Diversity"
        value={breakdown.commit_diversity}
      />

      <Progress
        label="Repository Activity"
        value={breakdown.repository_activity}
      />
    </div>
  );
}

export default ScoreBreakdown;