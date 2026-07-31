import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";

type Props = {
  summary: string;
};

function AISummaryCard({ summary }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="rounded-2xl border border-slate-700 bg-[#151C27] p-8 shadow-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        🤖 AI Repository Review
      </h2>

      <div className="prose prose-invert max-w-none prose-headings:text-sky-400 prose-p:text-slate-300 prose-li:text-slate-300">
        <ReactMarkdown>
          {summary}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

export default AISummaryCard;