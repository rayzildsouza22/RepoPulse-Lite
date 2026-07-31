import { motion } from "framer-motion";

type Props = {
  score: number;
  grade: string;
  rating: string;
  maturity: string;
  explanation: string;
};

function HealthScoreCard({
  score,
  grade,
  rating,
  maturity,
  explanation,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="rounded-2xl border border-slate-700 bg-[#151C27] p-10 shadow-xl"
    >
      <div className="flex flex-col items-center">

        <div className="flex h-48 w-48 items-center justify-center rounded-full border-8 border-sky-500 bg-[#0B1120]">
          <span className="text-6xl font-bold text-white">
            {score}
          </span>
        </div>

        <h2 className="mt-6 text-2xl font-bold text-white">
          Health Score
        </h2>

        <div className="mt-6 grid w-full grid-cols-3 gap-4">

          <div className="rounded-xl bg-[#0F172A] p-4 text-center">
            <p className="text-sm text-slate-400">Grade</p>
            <p className="mt-2 text-2xl font-bold text-sky-400">
              {grade}
            </p>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-4 text-center">
            <p className="text-sm text-slate-400">Rating</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {rating}
            </p>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-4 text-center">
            <p className="text-sm text-slate-400">Maturity</p>
            <p className="mt-2 text-lg font-semibold text-white">
              {maturity}
            </p>
          </div>

        </div>

        <div className="mt-6 rounded-xl bg-[#0F172A] p-5">
          <p className="text-center text-slate-300">
            {explanation}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default HealthScoreCard;