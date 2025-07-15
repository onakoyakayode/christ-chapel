import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "picsum.photos",
      "placehold.co",
      "plus.unsplash.com",
      "images.unsplash.com",
    ],
  },

  webpack(config) {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "@": path.resolve(__dirname, "src"),
    };

    return config;
  },
};

export default nextConfig;
