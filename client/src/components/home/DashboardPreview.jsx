function DashboardPreview() {
  return (
    <div className="bg-[#131A2A] border border-white/10 rounded-3xl p-6 shadow-2xl w-full max-w-md">
      <h3 className="text-white text-xl font-bold mb-6">
        Aether AI Workspace
      </h3>

      <div className="space-y-4">

        <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
          <span className="text-cyan-400">💬</span>
          <span className="text-gray-300">AI Chat</span>
        </div>

        <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
          <span className="text-cyan-400">💻</span>
          <span className="text-gray-300">Code Assistant</span>
        </div>

        <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
          <span className="text-cyan-400">📄</span>
          <span className="text-gray-300">PDF Analyzer</span>
        </div>

        <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
          <span className="text-cyan-400">🎤</span>
          <span className="text-gray-300">Voice Assistant</span>
        </div>

        <div className="flex items-center gap-4 bg-white/5 rounded-xl p-4">
          <span className="text-cyan-400">🖼️</span>
          <span className="text-gray-300">Image Generator</span>
        </div>

      </div>
    </div>
  );
}

export default DashboardPreview;