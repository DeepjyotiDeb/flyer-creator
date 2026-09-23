import { Check, Copy, FileText, Printer } from "lucide-react";
import { FORMAT_DIMENSIONS } from "../constants/formats";

export default function Header({
  darkMode,
  selectedFormat,
  onFormatChange,
  onCopyCode,
  copied,
  onPrint,
  onToggleDarkMode,
}) {
  return (
    <header
      className={`border-b ${darkMode ? "border-slate-800 bg-slate-900/80" : "border-slate-200 bg-white/80"} backdrop-blur-md sticky top-0 z-40 px-4 py-3 flex items-center justify-between`}
    >
      <div className="flex items-center space-x-3">
        <div className="bg-gradient-to-tr from-blue-600 to-indigo-500 text-white p-2.5 rounded-xl shadow-lg shadow-blue-500/20">
          <FileText className="w-5 h-5" />
        </div>
        <div>
          <h1 className="font-bold text-lg tracking-tight flex items-center gap-2">
            PDF Flyer Forge{" "}
          </h1>
          <p className={`text-xs ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            Bypass LLM export restrictions. Paste code, render clean PDFs.
          </p>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center space-x-2 sm:space-x-4">
        <FormatSwitcher
          darkMode={darkMode}
          selectedFormat={selectedFormat}
          onFormatChange={onFormatChange}
        />

        <button
          onClick={onCopyCode}
          className={`flex items-center space-x-1.5 px-3 py-2 rounded-lg text-xs font-semibold border transition-all ${
            darkMode
              ? "border-slate-700 bg-slate-900 hover:bg-slate-800 text-slate-200"
              : "border-slate-300 bg-white hover:bg-slate-50 text-slate-700"
          }`}
          title="Copy HTML Code"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
          <span className="hidden sm:inline">{copied ? "Copied!" : "Copy Code"}</span>
        </button>

        <button
          onClick={onPrint}
          className="flex items-center space-x-1.5 px-4 py-2 rounded-lg text-xs font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-500/25 transition-all transform active:scale-95"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF</span>
        </button>

        <button
          onClick={onToggleDarkMode}
          className={`p-2 rounded-lg border ${darkMode ? "border-slate-700 bg-slate-800 text-yellow-400" : "border-slate-200 bg-slate-100 text-slate-700"} transition-all`}
          title="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </header>
  );
}

function FormatSwitcher({ darkMode, selectedFormat, onFormatChange }) {
  return (
    <div
      className={`hidden md:flex items-center space-x-1 p-1 rounded-lg ${darkMode ? "bg-slate-800" : "bg-slate-100"}`}
    >
      {Object.keys(FORMAT_DIMENSIONS).map((fmt) => (
        <button
          key={fmt}
          onClick={() => onFormatChange(fmt)}
          className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all ${
            selectedFormat === fmt
              ? "bg-blue-600 text-white shadow"
              : darkMode
                ? "text-slate-300 hover:text-white"
                : "text-slate-600 hover:text-slate-900"
          }`}
        >
          {fmt.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
