type Commit = {
  short_sha: string;
  author: string;
  message: string;
  tier: string;
};

type Props = {
  commits: Commit[];
};

function badgeColor(tier: string) {
  switch (tier) {
    case "Tier 1":
      return "bg-green-500";

    case "Tier 2":
      return "bg-yellow-500";

    default:
      return "bg-red-500";
  }
}

function CommitTable({ commits }: Props) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-[#151C27] p-8 shadow-xl">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Commits
      </h2>

      <div className="overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-slate-700">

              <th className="py-3 text-left text-slate-300">
                SHA
              </th>

              <th className="text-left text-slate-300">
                Author
              </th>

              <th className="text-left text-slate-300">
                Commit Message
              </th>

              <th className="text-left text-slate-300">
                Tier
              </th>

            </tr>

          </thead>

          <tbody>

            {commits.map((commit) => (

              <tr
                key={commit.short_sha}
                className="border-b border-slate-800"
              >

                <td className="py-4 font-mono text-sky-400">
                  {commit.short_sha}
                </td>

                <td className="text-white">
                  {commit.author}
                </td>

                <td className="text-slate-300">
                  {commit.message}
                </td>

                <td>

                  <span
                    className={`rounded-full px-3 py-1 text-sm text-white ${badgeColor(commit.tier)}`}
                  >
                    {commit.tier}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default CommitTable;