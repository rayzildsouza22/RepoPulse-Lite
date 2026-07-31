import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";
import { Activity, GitCommit, Brain, BarChart2 } from "lucide-react";

import Navbar from "../components/layout/Navbar";
import RepoInput from "../components/repository/RepoInput";
import PrimaryButton from "../components/common/PrimaryButton";

const features = [
  {
    icon: <Activity size={24} />,
    title: "Repository Health",
    description: "Get an instant health score based on activity, quality, and history.",
  },
  {
    icon: <GitCommit size={24} />,
    title: "Commit Analysis",
    description: "Break down every commit by quality tier — Tier 1, 2, or 3.",
  },
  {
    icon: <Brain size={24} />,
    title: "AI Insights",
    description: "Receive a full AI-generated review of your repository powered by Groq.",
  },
  {
    icon: <BarChart2 size={24} />,
    title: "Score Breakdown",
    description: "See exactly how your score is calculated across 5 dimensions.",
  },
];

function Home() {
  const [repoUrl, setRepoUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleAnalyze = async () => {
    if (!repoUrl.trim()) {
      alert("Please enter a GitHub repository URL.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://127.0.0.1:8000/api/v1/analyze",
        {
          repository_url: repoUrl,
        }
      );

      navigate("/report", {
        state: response.data,
      });

    } catch (error) {
      console.error(error);
      alert("Failed to analyze repository.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />

      <main style={{ minHeight: "calc(100vh - 64px)", display: "flex", flexDirection: "column", justifyContent: "center", padding: "4rem 2rem" }}>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ maxWidth: "860px", margin: "0 auto", textAlign: "center", width: "100%" }}
        >
          <div className="mb-6 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-400">
            AI-Powered GitHub Repository Analysis
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Understand Your Repository
            <br />
            Beyond the Numbers
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-slate-400">
            Analyze repository health, commit quality, development activity,
            and receive AI-generated insights powered by Groq.
          </p>

          <RepoInput value={repoUrl} onChange={setRepoUrl} />

          <div className="mt-6">
            <PrimaryButton onClick={handleAnalyze}>
              {loading ? "Analyzing..." : "Analyze Repository"}
            </PrimaryButton>
          </div>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            maxWidth: "860px",
            margin: "4rem auto 0",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "1.25rem",
          }}
        >
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                background: "#151C27",
                border: "1px solid #263041",
                borderRadius: "1rem",
                padding: "1.75rem",
              }}
            >
              <div style={{ color: "#38bdf8", marginBottom: "0.75rem" }}>
                {f.icon}
              </div>
              <h3 style={{ color: "#f1f5f9", fontWeight: 600, fontSize: "1rem", marginBottom: "0.4rem" }}>
                {f.title}
              </h3>
              <p style={{ color: "#94a3b8", fontSize: "0.875rem", lineHeight: "1.6" }}>
                {f.description}
              </p>
            </div>
          ))}
        </motion.div>

      </main>
    </>
  );
}

export default Home;
