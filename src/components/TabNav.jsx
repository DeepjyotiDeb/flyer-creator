import { Code, Layers, Sparkles } from "lucide-react";

const TABS = [
  { id: "editor", label: "HTML / CSS Editor", Icon: Code },
  { id: "templates", label: "Templates", Icon: Layers },
  { id: "prompt", label: "AI Prompt Helper", Icon: Sparkles, iconClassName: "text-amber-400" },
];

export default function TabNav({ activeTab, onTabChange, templateCount }) {
  return (
    <div className={`flex border-b px-4 pt-2 space-x-2`}>
      {TABS.map(({ id, label, Icon, iconClassName }) => (
        <button
          key={id}
          onClick={() => onTabChange(id)}
          className={`flex items-center space-x-2 py-2.5 px-4 text-xs font-bold border-b-2 transition-all ${
            activeTab === id
              ? "border-blue-500 text-blue-400"
              : "border-transparent text-slate-400 hover:text-slate-200"
          }`}
        >
          <Icon className={`w-4 h-4 ${iconClassName ?? ""}`} />
          <span>{id === "templates" ? `${label} (${templateCount})` : label}</span>
        </button>
      ))}
    </div>
  );
}
