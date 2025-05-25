"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { ChatContextType, ChatMessage } from "../../types/index";
import { v4 } from "uuid";

const ChatContext = createContext<ChatContextType | undefined>(undefined);

// Mock LLM response response - in a real implementation, this would call an actual API
const mockLLMResponse = async (message: string): Promise<string> => {
  console.log(message);

  // Just to simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1000));

  const responses = [
    "Hello! How can I help you today?",
    "Thanks for your message. I'm here to assist you.",
    "That's an interesting question. Let me help you with that.",
    "I understand your concern. Here's what I can suggest...",
    "I'm an AI assistant from Eloquent AI. How can I assist you further?",
  ];

  return responses[Math.floor(Math.random() * responses.length)] as string;
};

interface ChatProviderProps {
  children: React.ReactNode;
  initialOpen?: boolean;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  apiKey?: string;
  onMessageSent?: (message: string) => void;
  onWidgetToggle?: (isOpen: boolean) => void;
}

export const ChatProvider: React.FC<ChatProviderProps> = ({
  children,
  initialOpen = false,
  isOnline = true,
  isMaintenanceMode = false,
  apiKey = "",
  onMessageSent,
  onWidgetToggle,
}) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: v4(),
      text: "Hi there! 👋 How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ]);
  const [isOpen, setIsOpen] = useState(initialOpen);

  const sendMessage = useCallback(
    async (text: string) => {
      if (isMaintenanceMode) return;

      const userMessage: ChatMessage = {
        id: v4(),
        text,
        sender: "user",
        timestamp: new Date(),
      };

      setMessages((prev) => [...prev, userMessage]);

      if (onMessageSent) {
        onMessageSent(text);
      }

      try {
        const responseText = await mockLLMResponse(text);

        const botMessage: ChatMessage = {
          id: v4(),
          text: responseText,
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, botMessage]);
      } catch (error) {
        console.error("Error getting response:", error);

        const errorMessage: ChatMessage = {
          id: v4(),
          text: "Sorry, I couldn't process your request. Please try again later.",
          sender: "bot",
          timestamp: new Date(),
        };

        setMessages((prev) => [...prev, errorMessage]);
      }
    },
    [isMaintenanceMode, onMessageSent],
  );

  const toggleWidget = useCallback(() => {
    setIsOpen((prev) => {
      const newState = !prev;
      if (onWidgetToggle) {
        onWidgetToggle(newState);
      }
      return newState;
    });
  }, [onWidgetToggle]);

  const value = {
    messages,
    isOpen,
    isOnline,
    isMaintenanceMode,
    sendMessage,
    toggleWidget,
    apiKey,
  };

  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
};

// to use the chat context
export const useChatContext = (): ChatContextType => {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};
