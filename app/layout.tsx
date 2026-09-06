import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://thriveus.ae"),
  title: "Thriveus | Corporate Events & Experiences in UAE",
  description:
    "Thriveus creates purposeful corporate events, employee engagement experiences, team building, retreats, conferences and immersive experiences across the UAE and beyond.",
  keywords: [
    "Corporate Events UAE",
    "Dubai Event Production",
    "Experiential Experiences Dubai",
    "NeoThrive Technology",
    "Corporate Galas UAE",
    "Executive Conferences Dubai",
    "Experiential Marketing UAE",
  ],
  authors: [{ name: "Thriveus Experiential" }],
  creator: "Thriveus",
  publisher: "Thriveus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Thriveus | Curating Impact, One Experience at a Time",
    description:
      "Corporate experiences designed to connect people, inspire action and create lasting impact.",
    url: "https://thriveus.ae",
    siteName: "Thriveus",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/hero-event.jpg",
        width: 1376,
        height: 768,
        alt: "Thriveus Luxury Corporate Experiences Dubai",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thriveus | Corporate Events & Experiences in UAE",
    description:
      "Curating Impact, One Experience at a Time. High-end corporate events & experiential productions in Dubai.",
    images: ["/images/hero-event.jpg"],
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
      lang="en"
      className={`${sora.variable} ${inter.variable} min-h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans bg-[#12103D] text-white antialiased selection:bg-[#8EDAF2] selection:text-[#12103D]">
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}
