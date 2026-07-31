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
    <div className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-lg">

      <h2 className="mb-8 text-2xl font-bold text-white">
        Recent Commits
      </h2>

      <div className="overflow-x-auto rounded-xl">

        <table className="w-full table-fixed">

          <thead className="sticky top-0 bg-[#151C27]">

            <tr className="border-b border-slate-700">

              <th className="w-28 py-4 text-left text-slate-300">
                SHA
              </th>

              <th className="w-40 text-left text-slate-300">
                Author
              </th>

              <th className="text-left text-slate-300">
                Commit Message
              </th>

              <th className="w-28 text-left text-slate-300">
                Tier
              </th>

            </tr>

          </thead>

          <tbody>

            {commits.map((commit) => (

              <tr
                key={commit.short_sha}
                className="border-b border-slate-800 transition hover:bg-slate-800/60"
              >

                <td className="w-28 py-5 font-mono font-semibold text-sky-400">
                  {commit.short_sha}
                </td>

                <td className="w-40 truncate font-medium text-white">
                  {commit.author}
                </td>

                <td className="truncate text-slate-300">
                  {commit.message}
                </td>

                <td className="w-28">

                  <span
                    className={`rounded-full px-4 py-1 text-sm font-semibold text-white ${badgeColor(commit.tier)}`}
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