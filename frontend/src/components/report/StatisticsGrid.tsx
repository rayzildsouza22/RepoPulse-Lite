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

import type{ RepositoryInfo, Statistics } from "../../types/analysis";

type Props = {
  repositoryInfo: RepositoryInfo;
  statistics: Statistics;
  executionTime: number;
};

function StatCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-[#151C27] p-5">
      <div className="mb-3 text-sky-400">
        {icon}
      </div>

      <p className="text-sm text-slate-400">
        {title}
      </p>

      <h3 className="mt-2 text-2xl font-bold text-white">
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
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">

      <StatCard
        icon={<Star size={22} />}
        title="Stars"
        value={repositoryInfo.stars}
      />

      <StatCard
        icon={<GitFork size={22} />}
        title="Forks"
        value={repositoryInfo.forks}
      />

      <StatCard
        icon={<Eye size={22} />}
        title="Watchers"
        value={repositoryInfo.watchers}
      />

      <StatCard
        icon={<AlertCircle size={22} />}
        title="Open Issues"
        value={repositoryInfo.open_issues}
      />

      <StatCard
        icon={<Plus size={22} />}
        title="Avg Additions"
        value={statistics.average_additions}
      />

      <StatCard
        icon={<Minus size={22} />}
        title="Avg Deletions"
        value={statistics.average_deletions}
      />

      <StatCard
        icon={<Folder size={22} />}
        title="Avg Files Changed"
        value={statistics.average_files_changed}
      />

      <StatCard
        icon={<Timer size={22} />}
        title="Execution Time"
        value={`${executionTime}s`}
      />

    </div>
  );
}

export default StatisticsGrid;