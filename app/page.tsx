"use client";

import { ChatWidget } from "./components/ChatWidget";
import { useState } from "react";

export default function Home() {
  const [isOnline, setIsOnline] = useState(true);
  const [isMaintenanceMode, setIsMaintenanceMode] = useState(false);

  const toggleOnlineStatus = () => setIsOnline((prev) => !prev);
  const toggleMaintenanceMode = () => setIsMaintenanceMode((prev) => !prev);

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col items-center justify-center p-6">
      <div className="w-full max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-indigo-800 mb-4">
            Eloquent AI Chat Widget
          </h1>
          <p className="text-gray-600 max-w-lg mx-auto">
            A customizable chat widget that can be embedded into any website,
            featuring online status indication and maintenance mode.
          </p>
        </div>
        {/* Control panel */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b pb-3">
            Widget Controls
          </h2>

          {/*TODO: wrap in a component*/}
          <div className="bg-indigo-50 p-4 rounded-lg mb-6">
            <h3 className="font-medium text-indigo-800 mb-3">
              Widget Controls
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Toggle the online status and maintenance mode of the chat widget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={toggleOnlineStatus}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${isOnline ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 hover:bg-gray-500"} text-white font-medium`}
              >
                {isOnline ? "✓ Status: Online" : "✗ Status: Offline"}
              </button>

              <button
                onClick={toggleMaintenanceMode}
                className={`flex-1 py-2 px-4 rounded-md transition-colors ${isMaintenanceMode ? "bg-amber-500 hover:bg-amber-600" : "bg-gray-400 hover:bg-gray-500"} text-white font-medium`}
              >
                {isMaintenanceMode
                  ? "⚠️ Maintenance: Enabled"
                  : "✓ Maintenance: Disabled"}
              </button>
            </div>
          </div>
          {/*TODO: wrap in a component -- till here*/}

          <div className="mt-6 p-4 bg-indigo-100 rounded-lg">
            <h3 className="font-medium text-indigo-800 mb-2">How to Use</h3>
            <ol className="list-decimal list-inside text-sm text-gray-700 space-y-2">
              <li>
                Click the chat button in the bottom-right corner to open the
                widget
              </li>
              <li>Type a message and press enter or click the send button</li>
              <li>Use the controls above to test different widget states</li>
            </ol>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p> 2025 Eloquent AI • All rights reserved</p>
        </div>
      </div>

      {/* Chat Widget Component */}
      <ChatWidget
        title="Eloquent AI Chat"
        subtitle="We're here to help"
        primaryColor="#6366F1"
        position="bottom-right"
        isOnline={isOnline}
        isMaintenanceMode={isMaintenanceMode}
        maintenanceMessage="Our chat service is currently undergoing maintenance. Please check back later."
        onMessageSent={(message: string) =>
          console.log("Message sent:", message)
        }
        onWidgetToggle={(isOpen: boolean) =>
          console.log("Widget toggled:", isOpen)
        }
      />
    </div>
  );
}
