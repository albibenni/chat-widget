"use client";

import React from "react";
import { useChatContext } from "./ChatContext";

interface ChatHeaderProps {
  title?: string;
  subtitle?: string;
  avatarUrl?: string;
}

const ChatHeader: React.FC<ChatHeaderProps> = ({
  title = "Eloquent AI Chat",
  subtitle = "We typically reply in a few minutes",
  avatarUrl = "https://ui-avatars.com/api/?name=Eloquent+AI&background=6366F1&color=fff",
}) => {
  const { isOnline, toggleWidget } = useChatContext();

  return (
    <div className="flex items-center justify-between p-4 bg-primary text-white rounded-t-lg">
      <div className="flex items-center">
        <div className="relative mr-3">
          <img
            src={avatarUrl}
            alt="Chat Avatar"
            className="w-10 h-10 rounded-full"
          />
          <div
            className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-primary ${
              isOnline ? "bg-green-400" : "bg-gray-400"
            }`}
          ></div>
        </div>
        <div>
          <h3 className="font-medium text-sm">{title}</h3>
          <p className="text-xs opacity-80">{subtitle}</p>
        </div>
      </div>
      <button
        onClick={toggleWidget}
        className="text-white hover:bg-opacity-20 hover:bg-white rounded-full p-1"
        aria-label="Close chat"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatHeader;
