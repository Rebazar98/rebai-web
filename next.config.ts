import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // "standalone" is for the self-hosted Docker/VPS build; Vercel has its own
  // output handling and this setting breaks public/ asset serving there.
  output: process.env.VERCEL ? undefined : "standalone",
  poweredByHeader: false,
};

export default nextConfig;
