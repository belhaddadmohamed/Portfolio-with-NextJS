import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  darkMode: 'class', // This enables class-based dark mode
  
  // output: 'export',
  images: {
    domains: ['picsum.photos', 'belhaddadmohamed.com'],
  }
};

export default nextConfig;
