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
      className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-xl"
    >
      <h2 className="mb-6 text-2xl font-bold text-white">
        🤖 AI Repository Review
      </h2>

      <div className="ai-markdown">
        <ReactMarkdown>
          {summary}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}

export default AISummaryCard;