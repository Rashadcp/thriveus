import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  images: {
    formats: ["image/webp"],
    qualities: [75, 80, 85, 90, 95, 100],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048, 2560, 3840],
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 512, 640, 768],
    minimumCacheTTL: 2592000, // 30 days
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.youtube.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/neothrive",
        destination: "/",
        permanent: true,
      },
      {
        source: "/our-work",
        destination: "/works",
        permanent: true,
      },
      {
        source: "/experiences",
        destination: "/works",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
