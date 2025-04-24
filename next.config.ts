import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "standalone",
};

module.exports = {
  experimental: {
    serverActions: true,
  },
};

export default nextConfig;
