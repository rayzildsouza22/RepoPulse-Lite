import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

import type { TierDistribution as TierData } from "../../types/analysis";

type Props = {
  distribution: TierData;
};

function TierDistribution({ distribution }: Props) {
  const data = [
    {
      tier: "Tier 1",
      commits: distribution["Tier 1"],
    },
    {
      tier: "Tier 2",
      commits: distribution["Tier 2"],
    },
    {
      tier: "Tier 3",
      commits: distribution["Tier 3"],
    },
  ];

  return (
    <div className="rounded-2xl border border-slate-700 bg-[#151C27] p-8 shadow-xl">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📈 Commit Tier Distribution
      </h2>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid stroke="#334155" strokeDasharray="3 3" />

            <XAxis
              dataKey="tier"
              stroke="#94A3B8"
            />

            <Tooltip />

            <Bar
              dataKey="commits"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TierDistribution;