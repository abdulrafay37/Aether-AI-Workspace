import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import MessageRenderer from "./MessageRenderer";

function ChatWindow({ messages, isLoading, onSuggestion }) {
  const bottomRef = useRef(null);
  const suggestions = [
    { icon: "💻", title: "Write React Component" },
    { icon: "🐍", title: "Generate Python Script" },
    { icon: "📄", title: "Summarize PDF" },
    { icon: "🧠", title: "Explain Any Topic" },
    { icon: "🎨", title: "Create UI Design" },
    { icon: "✍️", title: "Write Professional Email" },
  ];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-[60vh] flex-col rounded-[2rem] border border-[#B88A56]/20 bg-[#FFF9F1]/95 p-6 shadow-xl"
    >
      <div className="mb-8 flex items-center justify-between rounded-3xl bg-[#F7E7CE] p-5 text-[#6B4423] shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">Aether AI</h2>
          <p className="text-sm text-[#6B4423]/70">Gemini ▼</p>
        </div>
        <div className="flex items-center gap-4 text-sm text-[#6B4423]/80">
          <span>⚙️</span>
          <span>👤</span>
        </div>
      </div>

      <div className="flex h-full flex-col gap-6 overflow-hidden">
        <div className="flex-1 space-y-4 overflow-y-auto pr-2">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-[1.75rem] px-5 py-4 text-sm leading-7 ${
                  message.sender === "user"
                    ? "bg-[#6B4423] text-[#F7E7CE]"
                    : "bg-[#F7E7CE] text-[#6B4423]"
                }`}
              >
                {message.sender === "assistant" ? (
                  <MessageRenderer content={message.text} />
                ) : (
                  message.text
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-[80%] rounded-[1.75rem] bg-[#F7E7CE] px-5 py-4 text-sm leading-7 text-[#6B4423] shadow-sm">
                Thinking...
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {suggestions.map((item) => (
            <motion.button
              key={item.title}
              type="button"
              onClick={() => onSuggestion?.(item.title)}
              disabled={isLoading}
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -2 }}
              className="rounded-[1.75rem] border border-[#E5D4B2] bg-[#F7E7CE] px-6 py-5 text-left text-[#6B4423] shadow-sm transition-all duration-200 hover:border-[#E7C78A] hover:bg-[#fffdf7] hover:shadow-[0_20px_50px_rgba(231,199,138,0.18)] hover:cursor-pointer disabled:cursor-not-allowed disabled:opacity-50"
            >
              <div className="flex items-center gap-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default ChatWindow;
