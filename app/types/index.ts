export interface ChatMessage {
  id: string;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export interface ChatWidgetProps {
  apiKey?: string;
  title?: string;
  subtitle?: string;
  primaryColor?: string;
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  initialOpen?: boolean;
  isOnline?: boolean;
  isMaintenanceMode?: boolean;
  maintenanceMessage?: string;
  avatarUrl?: string;
  onMessageSent?: (message: string) => void;
  onWidgetToggle?: (isOpen: boolean) => void;
}

export interface ChatContextType {
  messages: ChatMessage[];
  isOpen: boolean;
  isOnline: boolean;
  isMaintenanceMode: boolean;
  sendMessage: (text: string) => Promise<void>;
  toggleWidget: () => void;
  apiKey: string;
}
