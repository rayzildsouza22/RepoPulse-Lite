import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
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
    <div className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-white">
        📈 Commit Tier Distribution
      </h2>

      <div className="h-[420px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              stroke="#334155"
              strokeDasharray="4 4"
            />

            <XAxis
              dataKey="tier"
              stroke="#CBD5E1"
            />

            <YAxis
              stroke="#CBD5E1"
            />

            <Tooltip
              contentStyle={{
                background: "#151C27",
                border: "1px solid #334155",
                borderRadius: "10px",
                color: "#fff",
              }}
            />

            <Bar
              dataKey="commits"
              fill="#0EA5E9"
              radius={[10, 10, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default TierDistribution;