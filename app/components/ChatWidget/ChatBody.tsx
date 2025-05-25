"use client";
import React, { useEffect, useRef } from "react";
import { useChatContext } from "./ChatContext";
import ChatMessage from "./ChatMessage";

interface ChatBodyProps {
  avatarUrl?: string;
}

const ChatBody: React.FC<ChatBodyProps> = ({ avatarUrl }) => {
  const { messages } = useChatContext();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <div className="flex-1 p-4 overflow-y-auto bg-white">
      {messages.map((message) => (
        <ChatMessage key={message.id} message={message} avatarUrl={avatarUrl} />
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};

export default ChatBody;
