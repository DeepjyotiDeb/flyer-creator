import { Eye, Maximize2, Minimize2 } from "lucide-react";
import { FORMAT_DIMENSIONS, ZOOM_LIMITS } from "../constants/formats";
import { useIframeDocument } from "../hooks/useIframeDocument";

export default function PreviewPane({ code, selectedFormat, zoom, onZoomChange, darkMode }) {
  const iframeRef = useIframeDocument(code);
  const dimensions = FORMAT_DIMENSIONS[selectedFormat];

  return (
    <div
      className={`w-full lg:w-1/2 flex flex-col ${darkMode ? "bg-slate-950" : "bg-slate-100"} relative overflow-scroll`}
    >
      <PreviewToolbar
        darkMode={darkMode}
        formatName={dimensions.name}
        zoom={zoom}
        onZoomChange={onZoomChange}
      />

      {/* Preview Canvas Area */}
      <div className="flex-1 overflow-x-scroll p-6 sm:p-10 flex items-center justify-center relative">
        <div
          className="transition-all duration-200 overflow-x-scroll shadow-2xl rounded-lg bg-white shrink-0 "
          style={{
            transform: `scale(${zoom / 100})`,
            transformOrigin: "top center",
            width: dimensions.width,
            height: dimensions.height,
          }}
        >
          <iframe
            ref={iframeRef}
            title="Flyer Preview Canvas"
            className="w-full h-full border-0 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
}

function PreviewToolbar({ darkMode, formatName, zoom, onZoomChange }) {
  return (
    <div
      className={`px-4 py-2.5 border-b ${darkMode ? "border-slate-800 bg-slate-900/50" : "border-slate-200 bg-white/50"} flex items-center justify-between text-xs`}
    >
      <div className="flex items-center space-x-2">
        <Eye className="w-4 h-4 text-blue-400" />
        <span className="font-bold">Live PDF Preview</span>
        <span
          className={`text-[10px] px-2 py-0.5 rounded font-mono ${darkMode ? "bg-slate-800 text-slate-400" : "bg-slate-200 text-slate-600"}`}
        >
          {formatName}
        </span>
      </div>

      <ZoomControls darkMode={darkMode} zoom={zoom} onZoomChange={onZoomChange} />
    </div>
  );
}

function ZoomControls({ darkMode, zoom, onZoomChange }) {
  const buttonClass = `p-1 rounded border ${darkMode ? "border-slate-700 bg-slate-800 text-slate-300" : "border-slate-300 bg-white text-slate-700"}`;

  return (
    <div className="flex items-center space-x-2">
      <button
        onClick={() => onZoomChange(Math.max(ZOOM_LIMITS.min, zoom - ZOOM_LIMITS.step))}
        className={buttonClass}
        title="Zoom Out"
      >
        <Minimize2 className="w-3.5 h-3.5" />
      </button>
      <span className="font-mono text-xs w-10 text-center">{zoom}%</span>
      <button
        onClick={() => onZoomChange(Math.min(ZOOM_LIMITS.max, zoom + ZOOM_LIMITS.step))}
        className={buttonClass}
        title="Zoom In"
      >
        <Maximize2 className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
