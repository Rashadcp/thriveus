import type { NextConfig } from "next";

const isExport = process.env.NEXT_EXPORT === "true";

const nextConfig: NextConfig = {
  ...(isExport ? { output: "export" as const } : {}),
  compress: true,
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  images: isExport
    ? { unoptimized: true }
    : {
        formats: ["image/avif", "image/webp"],
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
  ...(isExport
    ? {}
    : {
        async headers() {
          return [
            {
              source: "/:all*(svg|jpg|jpeg|png|webp|avif|otf|ttf|woff|woff2|mp4)",
              headers: [
                {
                  key: "Cache-Control",
                  value: "public, max-age=31536000, immutable",
                },
              ],
            },
          ];
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
      }),
};

export default nextConfig;

