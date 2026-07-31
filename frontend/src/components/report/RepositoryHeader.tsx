import { motion } from "framer-motion";
import {
  Star,
  GitFork,
  Code2,
  Globe,
  FileText,
} from "lucide-react";

import type { RepositoryInfo } from "../../types/analysis";

type Props = {
  repository: string;
  info: RepositoryInfo;
};

function RepositoryHeader({ repository, info }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      className="rounded-2xl border border-slate-700 bg-[#151C27] p-10 shadow-xl"
    >
      <h1 className="text-4xl font-bold text-white">
        {info.name}
      </h1>

      <p className="mt-2 text-slate-400">
        {repository}
      </p>

      {info.description && (
        <p className="mt-5 text-slate-300">
          {info.description}
        </p>
      )}

      <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-5">

        <div className="flex items-center gap-2 text-slate-300">
          <Star size={18} />
          <span>{info.stars}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <GitFork size={18} />
          <span>{info.forks}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <Code2 size={18} />
          <span>{info.language ?? "Unknown"}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <FileText size={18} />
          <span>{info.license ?? "No License"}</span>
        </div>

        <div className="flex items-center gap-2 text-slate-300">
          <Globe size={18} />
          <span>{info.visibility}</span>
        </div>

      </div>
    </motion.div>
  );
}

export default RepositoryHeader;