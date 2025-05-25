"use client";

import React from "react";
import { ChatMessage as ChatMessageType } from "../../types";

interface ChatMessageProps {
  message: ChatMessageType;
  avatarUrl?: string;
}

const formatTime = (date: Date): string => {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
};

const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  avatarUrl = "https://ui-avatars.com/api/?name=Eloquent+AI&background=6366F1&color=fff",
}) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      {!isUser && (
        <div className="mr-2 flex-shrink-0">
          <img
            src={avatarUrl}
            alt="Bot Avatar"
            className="w-8 h-8 rounded-full"
          />
        </div>
      )}
      <div className="max-w-[75%]">
        <div
          className={`p-3 rounded-lg ${
            isUser
              ? "bg-primary text-white rounded-tr-none"
              : "bg-gray-100 text-gray-800 rounded-tl-none"
          }`}
        >
          {message.text}
        </div>
        <div
          className={`text-xs text-gray-500 mt-1 ${
            isUser ? "text-right" : "text-left"
          }`}
        >
          {formatTime(message.timestamp)}
        </div>
      </div>
      {isUser && (
        <div className="ml-2 flex-shrink-0">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
