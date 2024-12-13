import type { NextConfig } from "next";

/** 配置的重定向*/
const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/Performance',
        destination: '/Reliability',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tailwindui.com',
        port: '',
        pathname: '/plus/img/**',
      },
    ],
  },
};

export default nextConfig;