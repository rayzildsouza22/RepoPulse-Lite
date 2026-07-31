import {
  Star,
  GitFork,
  Eye,
  AlertCircle,
  Plus,
  Minus,
  Folder,
  Timer,
} from "lucide-react";

import type { RepositoryInfo, Statistics } from "../../types/analysis";

type Props = {
  repositoryInfo: RepositoryInfo;
  statistics: Statistics;
  executionTime: number;
};

type StatCardProps = {
  icon: React.ReactNode;
  title: string;
  value: string | number;
};

function StatCard({ icon, title, value }: StatCardProps) {
  return (
    <div className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-sky-500/40">
      <div className="mb-5 text-sky-400">
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white break-words">
        {value}
      </h3>
    </div>
  );
}

function StatisticsGrid({
  repositoryInfo,
  statistics,
  executionTime,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-6">

      <StatCard
        icon={<Star size={26} />}
        title="Stars"
        value={repositoryInfo.stars}
      />

      <StatCard
        icon={<GitFork size={26} />}
        title="Forks"
        value={repositoryInfo.forks}
      />

      <StatCard
        icon={<Eye size={26} />}
        title="Watchers"
        value={repositoryInfo.watchers}
      />

      <StatCard
        icon={<AlertCircle size={26} />}
        title="Open Issues"
        value={repositoryInfo.open_issues}
      />

      <StatCard
        icon={<Plus size={26} />}
        title="Avg Additions"
        value={statistics.average_additions}
      />

      <StatCard
        icon={<Minus size={26} />}
        title="Avg Deletions"
        value={statistics.average_deletions}
      />

      <StatCard
        icon={<Folder size={26} />}
        title="Avg Files Changed"
        value={statistics.average_files_changed}
      />

      <StatCard
        icon={<Timer size={26} />}
        title="Execution Time"
        value={`${executionTime}s`}
      />

    </div>
  );
}

export default StatisticsGrid;