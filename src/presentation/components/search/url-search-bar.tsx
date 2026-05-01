import { Search, ArrowRight } from "lucide-react";
import { useState } from "react";

interface UrlSearchBarProps {
  onSearch: (code: string) => void;
}

export function UrlSearchBar({ onSearch }: UrlSearchBarProps) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      const cleanCode = query.replace(/^\//, "").trim();
      onSearch(cleanCode);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="relative w-full max-w-2xl mx-auto">
      <div className="relative group">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
          <Search
            size={20}
            className="text-slate-500 group-focus-within:text-brand-primary transition-colors"
          />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Pesquisar código da URL (ex: 1Frbb7)..."
          className="w-full bg-slate-900/50 border-2 border-slate-800 text-white text-lg rounded-2xl py-4 pl-12 pr-16 focus:outline-none focus:border-brand-primary/50 focus:ring-4 focus:ring-brand-primary/10 transition-all placeholder:text-slate-600"
        />
        <button
          type="submit"
          className="absolute right-2 top-2 bottom-2 px-4 bg-brand-primary hover:bg-brand-primary/90 text-slate-950 rounded-xl transition-all flex items-center gap-2 font-bold text-sm"
        >
          ANALISAR
          <ArrowRight size={16} />
        </button>
      </div>
    </form>
  );
}
