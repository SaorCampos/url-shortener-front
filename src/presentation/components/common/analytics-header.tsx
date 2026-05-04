import { X, Copy, Check } from "lucide-react";
import { useState } from "react";

export function AnalyticsHeader({ title, onClose, selectedCode }: any) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (selectedCode) {
      navigator.clipboard.writeText(selectedCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 border-b border-slate-900 pb-8">
      <div className="flex items-center gap-4">
        {/* ... seu código de ícone e textos ... */}
        <div>
          <h2 className="text-4xl font-black tracking-tighter text-white flex items-center gap-3">
            {title}
            <button
              onClick={handleCopy}
              className={`p-2 rounded-lg transition-all ${copied ? "bg-emerald-500/20 text-emerald-400" : "bg-slate-800 text-slate-400 hover:text-white"}`}
            >
              {copied ? <Check size={18} /> : <Copy size={18} />}
            </button>
          </h2>
        </div>
      </div>

      <button
        onClick={onClose}
        className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 hover:shadow-lg transition-all font-bold text-sm group"
      >
        <X
          size={16}
          className="group-hover:rotate-90 transition-transform duration-300"
        />
        FECHAR ANÁLISE
      </button>
    </div>
  );
}
