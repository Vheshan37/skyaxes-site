import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow images from any domain (for local dev placeholder images)
  images: {
    unoptimized: false,
  },
  // Suppress hydration warnings from browser extensions
  reactStrictMode: true,
};

export default nextConfig;
