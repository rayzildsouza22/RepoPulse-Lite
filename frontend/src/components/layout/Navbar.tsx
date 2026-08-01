import { Sparkles } from "lucide-react";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[#263041] bg-[#0B0F17]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-sky-500/10 p-2">
            <Sparkles className="h-6 w-6 text-sky-400" />
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              RepoPulse Lite
            </h1>

            <p className="text-xs text-slate-400">
              AI Repository Intelligence
            </p>
          </div>
        </div>

        <a
          href="https://github.com/rayzildsouza22/RepoPulse-Lite"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-[#263041] px-4 py-2 text-slate-300 transition hover:border-sky-500 hover:text-white"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
}

export default Navbar;