import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  swcMinify: true,
  transpilePackages: ["eloquent-ai-chat-widget"],
};

export default nextConfig;
