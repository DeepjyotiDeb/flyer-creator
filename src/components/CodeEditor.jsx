import { HelpCircle } from "lucide-react";

export default function CodeEditor({ code, onChange, darkMode }) {
  return (
    <div className="flex-1 flex flex-col p-4 relative">
      <div className="flex items-center justify-between mb-2">
        <span
          className={`text-xs font-mono uppercase ${darkMode ? "text-slate-400" : "text-slate-500"}`}
        >
          Live Code Input (ChatGPT / Gemini Output)
        </span>
        <span className="text-xs text-blue-400 font-mono">{code.length} characters</span>
      </div>
      <textarea
        value={code}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Paste your LLM-generated HTML/CSS code here..."
        className={`flex-1 w-full p-4 rounded-xl font-mono text-xs leading-relaxed resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 border transition-all ${
          darkMode
            ? "bg-slate-950 border-slate-800 text-emerald-300"
            : "bg-slate-50 border-slate-300 text-slate-800"
        }`}
        spellCheck="false"
      />
      <div
        className={`mt-3 p-3 rounded-xl border flex items-start space-x-3 text-xs ${darkMode ? "bg-blue-950/30 border-blue-900/50 text-blue-300" : "bg-blue-50 border-blue-200 text-blue-800"}`}
      >
        <HelpCircle className="w-4 h-4 shrink-0 mt-0.5 text-blue-400" />
        <div>
          <strong>Pro Tip:</strong> Paste code directly from ChatGPT or Gemini. The preview on the
          right updates instantly in real-time. Use browser's <em>Print / Save PDF</em> button to
          export a flawless vector PDF.
        </div>
      </div>
    </div>
  );
}
