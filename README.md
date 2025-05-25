# Eloquent AI Chat Widget

A beautiful, customizable chat widget that can be embedded into any website. Built with React and TypeScript, following the Eloquent AI design style.

## Features

- 💬 Real-time chat interface
- 🎨 Customizable colors and positioning
- 📱 Responsive design
- 🔧 Maintenance mode support
- 🔄 Online/offline status indicators
- 🧩 Easy integration with any website

## Installation

```bash
npm install eloquent-ai-chat-widget
# or
yarn add eloquent-ai-chat-widget
```

## Usage

```jsx
import { ChatWidget } from "eloquent-ai-chat-widget";

function App() {
  return (
    <div>
      <h1>My Website</h1>

      {/* Add the chat widget */}
      <ChatWidget
        apiKey="your-api-key"
        title="Eloquent AI Support"
        subtitle="We typically reply in a few minutes"
        position="bottom-right"
        isOnline={true}
        isMaintenanceMode={false}
        maintenanceMessage="Chat is currently undergoing maintenance. Please try again later."
        onMessageSent={(message) => console.log("Message sent:", message)}
        onWidgetToggle={(isOpen) => console.log("Widget toggled:", isOpen)}
      />
    </div>
  );
}
```

## Props

| Prop                 | Type                                                                 | Default                                                               | Description                                         |
| -------------------- | -------------------------------------------------------------------- | --------------------------------------------------------------------- | --------------------------------------------------- |
| `apiKey`             | `string`                                                             | -                                                                     | Your API key for the chat service                   |
| `title`              | `string`                                                             | `'Eloquent AI Chat'`                                                  | Title displayed in the chat header                  |
| `subtitle`           | `string`                                                             | `'We typically reply in a few minutes'`                               | Subtitle displayed in the chat header               |
| `primaryColor`       | `string`                                                             | `'#6366F1'`                                                           | Primary color for the chat widget                   |
| `position`           | `'bottom-right'` \| `'bottom-left'` \| `'top-right'` \| `'top-left'` | `'bottom-right'`                                                      | Position of the chat widget on the page             |
| `initialOpen`        | `boolean`                                                            | `false`                                                               | Whether the chat widget is initially open           |
| `isOnline`           | `boolean`                                                            | `true`                                                                | Whether the chat service is online                  |
| `isMaintenanceMode`  | `boolean`                                                            | `false`                                                               | Whether the chat service is in maintenance mode     |
| `maintenanceMessage` | `string`                                                             | `'Chat is currently undergoing maintenance. Please try again later.'` | Message displayed when in maintenance mode          |
| `avatarUrl`          | `string`                                                             | -                                                                     | URL of the avatar image                             |
| `onMessageSent`      | `(message: string) => void`                                          | -                                                                     | Callback function called when a message is sent     |
| `onWidgetToggle`     | `(isOpen: boolean) => void`                                          | -                                                                     | Callback function called when the widget is toggled |

## Development

### Setup

```bash
# Clone the repository
git clone https://github.com/eloquent-ai/chat-widget.git
cd chat-widget

# Install dependencies
npm install

# Start the development server
npm run dev
```

### Build

```bash
# Build the package
npm run build
```

## License

MIT
