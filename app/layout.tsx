import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import RouteTransition from "@/components/ui/RouteTransition";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0A0D",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://thriveus.ae"),
  title: "Thriveus | Corporate Events, Team Building & Experiences in UAE",
  description:
    "Thriveus designs corporate experiences across the UAE. Team building, gamified learning, celebrations, retreats and conferences for enterprise teams.",
  keywords: [
    "Corporate Events UAE",
    "Team Building Dubai",
    "Squid Game Styled Event Dubai",
    "Squid Game Inspired Team Building UAE",
    "Gamified Learning UAE",
    "Corporate Celebrations Dubai",
    "Leadership Retreats UAE",
    "Corporate Training Dubai",
    "Experiential Events Dubai",
    "Conference Production Dubai",
  ],
  authors: [{ name: "Thriveus Experiential" }],
  creator: "Thriveus",
  publisher: "Thriveus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Thriveus | Curating Impact, One Experience at a Time",
    description:
      "Corporate experiences designed to connect people, inspire action and create lasting impact.",
    url: "https://thriveus.ae",
    siteName: "Thriveus",
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/arena-games-wide.jpg",
        width: 1376,
        height: 768,
        alt: "Thriveus Corporate Events and Experiences Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thriveus | Corporate Events, Team Building & Experiences in UAE",
    description:
      "Thriveus designs corporate experiences across the UAE. Team building, gamified learning, celebrations, retreats and conferences for enterprise teams.",
    images: ["/images/arena-games-wide.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${sora.variable} ${inter.variable} min-h-full scroll-smooth`}
    >
      <head>
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#0B0A0D] text-white antialiased selection:bg-[#1782A8] selection:text-white">
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}

