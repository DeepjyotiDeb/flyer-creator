import { Check, Copy, Sparkles } from "lucide-react";

const PROMPT_CATEGORIES = [
  { value: "event", label: "Tech Conference / Event" },
  { value: "food", label: "Cafe / Restaurant Menu" },
  { value: "realestate", label: "Real Estate Property Listing" },
  { value: "fitness", label: "Gym / Fitness Bootcamp" },
  { value: "corporate", label: "Corporate Business Services" },
];

export default function PromptGenerator({
  darkMode,
  category,
  onCategoryChange,
  topic,
  onTopicChange,
  promptText,
  onCopyPrompt,
  copied,
}) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-4">
      <div>
        <h3 className="text-sm font-bold mb-1 flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-amber-400" />
          Flyer Prompt Generator for ChatGPT & Gemini
        </h3>
        <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"}`}>
          Copy this optimized system prompt to get top-tier code without paywall blocks.
        </p>
      </div>

      <div className="space-y-3">
        <CategorySelect darkMode={darkMode} value={category} onChange={onCategoryChange} />

        <TopicInput darkMode={darkMode} value={topic} onChange={onTopicChange} />

        <div>
          <div className="flex items-center justify-between mb-1">
            <span
              className={`text-xs font-semibold ${darkMode ? "text-slate-300" : "text-slate-700"}`}
            >
              Generated Prompt Preview
            </span>
          </div>
          <textarea
            readOnly
            value={promptText}
            className={`w-full h-44 p-3 rounded-lg font-mono text-[11px] leading-relaxed resize-none border ${darkMode ? "bg-slate-950 border-slate-800 text-slate-300" : "bg-slate-100 border-slate-300 text-slate-700"}`}
          />
        </div>

        <button
          onClick={onCopyPrompt}
          className="w-full flex items-center justify-center space-x-2 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg shadow-amber-500/20 transition-all"
        >
          {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
          <span>{copied ? "Prompt Copied to Clipboard!" : "Copy Prompt for ChatGPT / Gemini"}</span>
        </button>
      </div>
    </div>
  );
}

function CategorySelect({ darkMode, value, onChange }) {
  return (
    <div>
      <label
        className={`block text-xs font-semibold mb-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
      >
        Flyer Category / Style
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2.5 rounded-lg border text-xs font-medium ${darkMode ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-300 text-slate-800"}`}
      />
    </div>
  );
}

function TopicInput({ darkMode, value, onChange }) {
  return (
    <div>
      <label
        className={`block text-xs font-semibold mb-1 ${darkMode ? "text-slate-300" : "text-slate-700"}`}
      >
        Topic / Subject Title
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2.5 rounded-lg border text-xs font-medium ${darkMode ? "bg-slate-950 border-slate-800 text-slate-200" : "bg-white border-slate-300 text-slate-800"}`}
        placeholder="e.g. AI Hackathon 2026"
      />
    </div>
  );
}
