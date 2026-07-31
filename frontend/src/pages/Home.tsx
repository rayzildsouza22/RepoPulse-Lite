import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import RepoInput from "../components/repository/RepoInput";
import PrimaryButton from "../components/common/PrimaryButton";

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

      console.log(response.data);

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

      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="mb-6 inline-flex rounded-full border border-sky-500/20 bg-sky-500/10 px-4 py-2 text-sm text-sky-400">
            AI-Powered GitHub Repository Analysis
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight text-white md:text-6xl">
            Understand Your Repository
            <br />
            Beyond the Numbers
          </h1>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-slate-400">
            Analyze repository health, commit quality, development activity,
            and receive AI-generated insights powered by Groq.
          </p>

          <RepoInput
            value={repoUrl}
            onChange={setRepoUrl}
          />

          <div className="mt-8">
            <PrimaryButton onClick={handleAnalyze}>
              {loading ? "Analyzing..." : "Analyze Repository"}
            </PrimaryButton>
          </div>
        </motion.div>
      </main>
    </>
  );
}

export default Home;