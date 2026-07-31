import { Search } from "lucide-react";

type RepoInputProps = {
  value: string;
  onChange: (value: string) => void;
};

function RepoInput({ value, onChange }: RepoInputProps) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="flex items-center rounded-xl border border-[#263041] bg-[#141A23] px-4 py-3 transition focus-within:border-sky-500">
        <Search className="mr-3 text-slate-400" size={20} />

        <input
          type="text"
          placeholder="https://github.com/owner/repository"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-transparent text-white outline-none placeholder:text-slate-500"
        />
      </div>
    </div>
  );
}

export default RepoInput;