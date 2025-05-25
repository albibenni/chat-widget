"use client";

import React, { useState, FormEvent, useRef, useEffect } from "react";
import { useChatContext } from "./ChatContext";

interface ChatInputProps {
  placeholder?: string;
  maintenanceMessage?: string;
}

const ChatInput: React.FC<ChatInputProps> = ({
  placeholder = "Type a message...",
  maintenanceMessage = "Chat is currently undergoing maintenance. Please try again later.",
}) => {
  const [message, setMessage] = useState("");
  const { sendMessage, isMaintenanceMode } = useChatContext();
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when the component mounts
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (message.trim() && !isMaintenanceMode) {
      sendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="border-t border-gray-200">
      {isMaintenanceMode && (
        <div className="bg-amber-50 border-l-4 border-amber-500 p-3 m-2 rounded">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg
                className="h-5 w-5 text-amber-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="ml-3">
              <p className="text-sm text-amber-700">{maintenanceMessage}</p>
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit} className="flex items-center p-3">
        <input
          ref={inputRef}
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={
            isMaintenanceMode
              ? "Chat unavailable during maintenance"
              : placeholder
          }
          disabled={isMaintenanceMode}
          className={`flex-1 border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent ${
            isMaintenanceMode
              ? "bg-gray-100 text-gray-500 cursor-not-allowed"
              : ""
          }`}
        />
        <button
          type="submit"
          disabled={!message.trim() || isMaintenanceMode}
          className={`ml-2 p-2 rounded-full ${
            !message.trim() || isMaintenanceMode
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-primary text-white hover:bg-secondary"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </form>
    </div>
  );
};

export default ChatInput;
