function DashboardPreview() {
  return (
    <div className="bg-[#F7E7CE] border border-[#6B4423] rounded-3xl p-6 shadow-2xl w-full max-w-md">
      <h3 className="text-[#6B4423] text-xl font-bold mb-6">
        Aether AI Workspace
      </h3>

      <div className="space-y-4">

        <div className="flex items-center gap-4 bg-[#E5D4B2] rounded-xl p-4">
          <span className="text-[#6B4423]">💬</span>
          <span className="text-[#6B4423]">AI Chat</span>
        </div>

        <div className="flex items-center gap-4 bg-[#E5D4B2] rounded-xl p-4">
          <span className="text-[#6B4423]">💻</span>
          <span className="text-[#6B4423]">Code Assistant</span>
        </div>

        <div className="flex items-center gap-4 bg-[#E5D4B2] rounded-xl p-4">
          <span className="text-[#6B4423]">📄</span>
          <span className="text-[#6B4423]">PDF Analyzer</span>
        </div>

        <div className="flex items-center gap-4 bg-[#E5D4B2] rounded-xl p-4">
          <span className="text-[#6B4423]">🎤</span>
          <span className="text-[#6B4423]">Voice Assistant</span>
        </div>

        <div className="flex items-center gap-4 bg-[#E5D4B2] rounded-xl p-4">
          <span className="text-[#6B4423]">🖼️</span>
          <span className="text-[#6B4423]">Image Generator</span>
        </div>

      </div>
    </div>
  );
}

export default DashboardPreview;