import { motion } from "framer-motion";

type Props = {
  score: number;
  grade: string;
  rating: string;
  maturity: string;
  explanation: string;
};

function getGradeColor(grade: string) {
  switch (grade) {
    case "A":
      return "border-green-500 text-green-400";
    case "B":
      return "border-sky-500 text-sky-400";
    case "C":
      return "border-yellow-500 text-yellow-400";
    case "D":
      return "border-orange-500 text-orange-400";
    default:
      return "border-red-500 text-red-400";
  }
}

function HealthScoreCard({
  score,
  grade,
  rating,
  maturity,
  explanation,
}: Props) {
  const gradeColor = getGradeColor(grade);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="card rounded-2xl border border-slate-700 bg-[#151C27] shadow-xl"
    >
      <div className="flex flex-col items-center">

        {/* Score Circle */}
        <div
          className={`flex h-44 w-44 items-center justify-center rounded-full border-8 bg-[#0B1120] ${gradeColor}`}
        >
          <div className="text-center">
            <h1 className="text-5xl font-extrabold text-white">
              {score}
            </h1>
            <p className="mt-1 text-sm text-slate-400">
              /100
            </p>
          </div>
        </div>

        <h2 className="mt-5 text-2xl font-bold text-white">
          Repository Health
        </h2>

        <div className="mt-6 grid w-full grid-cols-3 gap-4">

          <div className="rounded-xl bg-[#0F172A] p-5 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Grade
            </p>

            <p className={`mt-2 text-3xl font-bold ${gradeColor.split(" ")[1]}`}>
              {grade}
            </p>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-5 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Rating
            </p>

            <p className="mt-2 text-base font-semibold text-white">
              {rating}
            </p>
          </div>

          <div className="rounded-xl bg-[#0F172A] p-5 text-center">
            <p className="text-xs uppercase tracking-wide text-slate-400">
              Maturity
            </p>

            <p className="mt-2 text-base font-semibold text-white">
              {maturity}
            </p>
          </div>

        </div>

        <div className="mt-6 w-full rounded-xl border border-slate-700 bg-[#0F172A] p-6">
          <h3 className="mb-2 text-sm font-semibold text-sky-400">
            Assessment
          </h3>

          <p className="text-sm leading-6 text-slate-300">
            {explanation}
          </p>
        </div>

      </div>
    </motion.div>
  );
}

export default HealthScoreCard;