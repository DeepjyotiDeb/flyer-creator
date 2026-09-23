import { useState } from "react";
import CodeEditor from "./components/CodeEditor";
import Header from "./components/Header";
import PreviewPane from "./components/PreviewPane";
import PromptGenerator from "./components/PromptGenerator";
import TabNav from "./components/TabNav";
import TemplateList from "./components/TemplateList";
import { ZOOM_LIMITS } from "./constants/formats";
import { TEMPLATES } from "./data/templates";
import { useTransientFlag } from "./hooks/useTransientFlag";
import { buildAiPrompt } from "./utils/aiPrompt";
import { copyToClipboard } from "./utils/clipboard";
import { printHtmlDocument } from "./utils/print";

export default function App() {
  const [code, setCode] = useState(TEMPLATES[0].code);
  const [selectedFormat, setSelectedFormat] = useState(TEMPLATES[0].format);
  const [zoom, setZoom] = useState(ZOOM_LIMITS.default);
  const [darkMode, setDarkMode] = useState(true);
  const [activeTab, setActiveTab] = useState("editor");
  const [promptCategory, setPromptCategory] = useState("event");
  const [promptTopic, setPromptTopic] = useState("Education and Teaching conference");
  const [promptRequest, setPromptRequest] = useState("");

  const [codeCopied, triggerCodeCopied] = useTransientFlag();
  const [promptCopied, triggerPromptCopied] = useTransientFlag();

  const aiPromptText = buildAiPrompt({
    topic: promptTopic,
    category: promptCategory,
    format: selectedFormat,
    request: promptRequest,
  });

  const handleTemplateSelect = (template) => {
    setCode(template.code);
    setSelectedFormat(template.format);
  };

  const handleCopyCode = () => copyToClipboard(code, triggerCodeCopied);
  const handleCopyPrompt = () => copyToClipboard(aiPromptText, triggerPromptCopied);
  const handlePrint = () => printHtmlDocument(code);

  return (
    <div
      className={`min-h-screen flex flex-col font-sans ${darkMode ? "bg-slate-950 text-slate-100" : "bg-slate-50 text-slate-900"}`}
    >
      <Header
        darkMode={darkMode}
        selectedFormat={selectedFormat}
        onFormatChange={setSelectedFormat}
        onCopyCode={handleCopyCode}
        copied={codeCopied}
        onPrint={handlePrint}
        onToggleDarkMode={() => setDarkMode(!darkMode)}
      />

      {/* Main Workspace Layout */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden">
        {/* Left Sidebar / Code & Prompt Workspace */}
        <div
          className={`w-full lg:w-1/2 flex flex-col border-r ${darkMode ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}
        >
          <TabNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            templateCount={TEMPLATES.length}
          />

          {activeTab === "editor" && (
            <CodeEditor code={code} onChange={setCode} darkMode={darkMode} />
          )}

          {activeTab === "templates" && (
            <TemplateList
              templates={TEMPLATES}
              onSelect={handleTemplateSelect}
              darkMode={darkMode}
            />
          )}

          {activeTab === "prompt" && (
            <PromptGenerator
              darkMode={darkMode}
              category={promptCategory}
              onCategoryChange={setPromptCategory}
              topic={promptTopic}
              onTopicChange={setPromptTopic}
              request={promptRequest}
              onRequestChange={setPromptRequest}
              promptText={aiPromptText}
              onCopyPrompt={handleCopyPrompt}
              copied={promptCopied}
            />
          )}
        </div>

        {/* Right Preview Pane */}
        <PreviewPane
          code={code}
          selectedFormat={selectedFormat}
          zoom={zoom}
          onZoomChange={setZoom}
          darkMode={darkMode}
        />
      </div>
    </div>
  );
}
