export default function TemplateList({ templates, onSelect, darkMode }) {
  return (
    <div className="flex-1 p-4 overflow-y-auto space-y-3">
      <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-600"} mb-3`}>
        Choose a pre-styled template to load instantly into the editor:
      </p>
      {templates.map((tmpl) => (
        <div
          key={tmpl.id}
          onClick={() => onSelect(tmpl)}
          className={`p-4 rounded-xl border cursor-pointer transition-all hover:scale-[1.01] ${
            darkMode
              ? "bg-slate-950/60 border-slate-800 hover:border-blue-500/50 hover:bg-slate-800/60"
              : "bg-white border-slate-200 hover:border-blue-500/50 hover:bg-blue-50/40 shadow-sm"
          }`}
        >
          <div className="flex items-center justify-between mb-1">
            <span className="font-bold text-sm text-blue-400">{tmpl.name}</span>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded uppercase ${darkMode ? "bg-slate-800 text-slate-300" : "bg-slate-200 text-slate-700"}`}
            >
              {tmpl.format}
            </span>
          </div>
          <span className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            {tmpl.category}
          </span>
        </div>
      ))}
    </div>
  );
}
