import { useState, useEffect, useRef } from "react";
import { sendMessage } from "../services/gemini";
import Sidebar from "../components/workspace/Sidebar";
import ChatWindow from "../components/workspace/ChatWindow";
import MessageInput from "../components/workspace/MessageInput";
import { db } from "../firebase";
import { useAuth } from "../context/AuthContext";

import {
  collection,
  addDoc,
  serverTimestamp,
  doc,
  setDoc,
} from "firebase/firestore";

function Workspace() {
  const { user } = useAuth();

  const [currentChatId, setCurrentChatId] = useState(null);

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "assistant",
      text: "Hello! Welcome to Aether AI Workspace.",
    },
  ]);

  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isTypingSuggestion, setIsTypingSuggestion] = useState(false);

  const suggestionTimeouts = useRef([]);

  useEffect(() => {
    console.log("Logged In User:", user);
  }, [user]);

  useEffect(() => {
    return () => {
      suggestionTimeouts.current.forEach(clearTimeout);
      suggestionTimeouts.current = [];
    };
  }, []);

  const handleSend = async (text = inputText) => {
    const prompt = String(text).trim();

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

    if (user) {
      try {
        let chatId = currentChatId;

        if (!chatId) {
          const chatRef = doc(collection(db, "users", user.uid, "chats"));

          await setDoc(chatRef, {
            title: prompt.substring(0, 40),
            createdAt: serverTimestamp(),
            updatedAt: serverTimestamp(),
          });

          chatId = chatRef.id;
          setCurrentChatId(chatId);

          console.log("✅ New Chat:", chatId);
        }

        await addDoc(
          collection(db, "users", user.uid, "chats", chatId, "messages"),
          {
            prompt,
            reply,
            createdAt: serverTimestamp(),
          }
        );

        console.log("✅ Message Saved");
      } catch (error) {
        console.error("Firestore Error:", error);
      }
    }

    setMessages((prev) => [...prev, assistantMessage]);

    setInputText("");

    setIsLoading(false);
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
          <ChatWindow
            messages={messages}
            isLoading={isLoading}
            onSuggestion={handleSuggestion}
          />

          <MessageInput
            value={inputText}
            onChange={setInputText}
            onSend={handleSend}
            isLoading={isLoading}
            isTypingSuggestion={isTypingSuggestion}
          />
        </div>
      </div>
    </section>
  );
}

export default Workspace;