"use client";

import React from "react";
import { ChatProvider } from "./ChatContext";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";
import type { ChatWidgetProps } from "../../types";
import "../../styles/globals.css";

const ChatWidget: React.FC<ChatWidgetProps> = ({
  apiKey,
  title,
  subtitle,
  primaryColor,
  position = "bottom-right",
  initialOpen = false,
  isOnline = true,
  isMaintenanceMode = false,
  maintenanceMessage,
  avatarUrl,
  onMessageSent,
  onWidgetToggle,
}) => {
  const positionClasses = {
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
  };

  React.useEffect(() => {
    if (primaryColor) {
      document.documentElement.style.setProperty(
        "--chat-primary-color",
        primaryColor,
      );
    }
  }, [primaryColor]);

  return (
    <ChatProvider
      initialOpen={initialOpen}
      isOnline={isOnline}
      isMaintenanceMode={isMaintenanceMode}
      apiKey={apiKey}
      onMessageSent={onMessageSent}
      onWidgetToggle={onWidgetToggle}
    >
      <ChatWidgetContent
        title={title}
        subtitle={subtitle}
        position={positionClasses[position]}
        avatarUrl={avatarUrl}
        maintenanceMessage={maintenanceMessage}
      />
    </ChatProvider>
  );
};

interface ChatWidgetContentProps {
  title?: string;
  subtitle?: string;
  position: string;
  avatarUrl?: string;
  maintenanceMessage?: string;
}

const ChatWidgetContent: React.FC<ChatWidgetContentProps> = ({
  title,
  subtitle,
  position,
  avatarUrl,
  maintenanceMessage,
}) => {
  const { isOpen, toggleWidget } = useChatContext();

  return (
    <div className="fixed z-50 eloquent-chat-widget">
      {/* Chat toggle button */}
      {!isOpen && (
        <button
          onClick={toggleWidget}
          className={`${position} bg-primary hover:bg-secondary text-white rounded-full p-4 shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary`}
          aria-label="Open chat"
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
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
        </button>
      )}

      {/* Chat window */}
      {isOpen && (
        <div
          className={`${position} flex flex-col w-80 sm:w-96 h-[500px] bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden`}
        >
          <ChatHeader title={title} subtitle={subtitle} avatarUrl={avatarUrl} />
          <ChatBody avatarUrl={avatarUrl} />
          <ChatInput maintenanceMessage={maintenanceMessage} />
        </div>
      )}
    </div>
  );
};

// avoid circular dependency - top import = circular
import { useChatContext } from "./ChatContext";

export default ChatWidget;
