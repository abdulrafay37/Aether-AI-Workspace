import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../services/gemini";
import Sidebar from "../components/workspace/Sidebar";
import ChatWindow from "../components/workspace/ChatWindow";
import MessageInput from "../components/workspace/MessageInput";

function Workspace() {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hello Rafay 👋 Welcome to Aether AI Workspace.",
    },
  ]);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTypingSuggestion, setIsTypingSuggestion] = useState(false);
  const suggestionTimeouts = useRef([]);

  useEffect(() => {
    return () => {
      suggestionTimeouts.current.forEach(clearTimeout);
      suggestionTimeouts.current = [];
    };
  }, []);

  const handleSend = async (text = inputText) => {
    const prompt = text.trim();
    if (!prompt || isLoading || isTypingSuggestion) return;

    setInputText(prompt);

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: prompt,
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    const reply = await sendMessage(prompt);

    const assistantMessage = {
      id: Date.now() + 1,
      sender: "assistant",
      text: reply,
    };

    setMessages((prev) => [...prev, assistantMessage]);
    setIsLoading(false);
    setInputText("");
  };

  const clearSuggestionTyping = () => {
    suggestionTimeouts.current.forEach(clearTimeout);
    suggestionTimeouts.current = [];
    setIsTypingSuggestion(false);
  };

  const handleSuggestion = (suggestion) => {
    if (isLoading) return;
    clearSuggestionTyping();
    setInputText("");
    setIsTypingSuggestion(true);

    suggestion.split("").forEach((char, index) => {
      const timeoutId = window.setTimeout(() => {
        setInputText((prev) => prev + char);
        if (index === suggestion.length - 1) {
          setIsTypingSuggestion(false);
        }
      }, index * 40);

      suggestionTimeouts.current.push(timeoutId);
    });
  };

  return (
    <section className="min-h-screen bg-[#D9D0C1] pt-28 pb-16">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 xl:flex-row">
        <div className="xl:w-[26rem]">
          <Sidebar />
        </div>

        <div className="flex flex-1 flex-col gap-6">
          <ChatWindow messages={messages} isLoading={isLoading} onSuggestion={handleSuggestion} />
          <MessageInput
            value={inputText}
            onChange={setInputText}
            onSend={() => handleSend()}
            isLoading={isLoading}
            isTypingSuggestion={isTypingSuggestion}
          />
        </div>
      </div>
    </section>
  );
}

export default Workspace;
