import { useState } from "react";

function MessageInput({ value, onChange, onSend, isLoading, isTypingSuggestion }) {
  const handleSend = () => {
    if (!value.trim() || isLoading || isTypingSuggestion) return;
    onSend();
  };

  return (
    <div className="rounded-[2rem] border border-[#B88A56]/20 bg-[#F7E7CE]/70 p-5 shadow-[0_25px_60px_rgba(107,68,35,0.08)] backdrop-blur-sm">
      <div className="flex items-center gap-4 rounded-full border border-[#E5D4B2] bg-white/90 px-5 py-4 shadow-sm transition focus-within:border-[#6B4423]">
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Ask Aether AI anything..."
          className="w-full bg-transparent text-base text-[#6B4423] outline-none placeholder:text-[#6B4423]/50"
          disabled={isLoading || isTypingSuggestion}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
          className="rounded-full bg-[#6B4423] px-5 py-3 text-sm font-semibold text-[#F7E7CE] transition hover:bg-[#3f2b17] disabled:cursor-not-allowed disabled:opacity-50"
        >
          ➤
        </button>
      </div>
      <div className="mt-3 flex items-center gap-4 text-sm text-[#6B4423]/70">
        <span className="rounded-full bg-[#F7E7CE] px-3 py-2">📎</span>
        <span className="rounded-full bg-[#F7E7CE] px-3 py-2">🎤</span>
      </div>
    </div>
  );
}

export default MessageInput;
