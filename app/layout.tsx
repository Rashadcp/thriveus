import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import RouteTransition from "@/components/ui/RouteTransition";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1C164B",
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
      { url: "/favicon-32x32.png?v=2", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png?v=2", type: "image/png", sizes: "16x16" },
      { url: "/icon.png?v=2", type: "image/png", sizes: "192x192" },
      { url: "/favicon.ico?v=2", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" },
      { url: "/apple-touch-icon.png?v=2", sizes: "180x180", type: "image/png" },
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
        url: "/images/corporate-ballroom-team.jpg",
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
    images: ["/images/corporate-ballroom-team.jpg"],
  },
  alternates: {
    canonical: "https://thriveus.ae",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const JSON_LD = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://thriveus.ae/#organization",
      name: "Thriveus Events",
      url: "https://thriveus.ae",
      logo: "https://thriveus.ae/images/logo-nav-cream.png",
      description:
        "Thriveus curates corporate events, executive summits, team challenges, and experiential productions across Dubai and the UAE.",
      email: "jahan@thriveus.ae",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Dubai",
        addressCountry: "AE",
      },
      sameAs: [
        "https://www.youtube.com/@ThriveusEvents",
        "https://www.instagram.com/thriveus.uae/",
        "https://linkedin.com/company/thriveus",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://thriveus.ae/#website",
      url: "https://thriveus.ae",
      name: "Thriveus Corporate Events & Productions",
      publisher: {
        "@id": "https://thriveus.ae/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${inter.variable} ${cormorant.variable} min-h-full scroll-smooth`}
    >
      <head>
        {/* Resource Hints & CDNs */}
        <link rel="preconnect" href="https://www.youtube.com" />
        <link rel="preconnect" href="https://i.ytimg.com" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />
        <link rel="dns-prefetch" href="https://i.ytimg.com" />

        {/* Critical Font Preloads for instantaneous rendering without layout shift */}
        <link
          rel="preload"
          href="/fonts/HelveticaNowDisplay-Bold.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/TheSeasons-Italic.otf"
          as="font"
          type="font/otf"
          crossOrigin="anonymous"
        />

        {/* Hero Poster Image Preload for 0ms LCP */}
        <link
          rel="preload"
          as="image"
          href="/images/corporate-ballroom-team.jpg"
          fetchPriority="high"
        />

        {/* SEO Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSON_LD) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-[#EAE7DC] text-[#1C164B] antialiased selection:bg-[#98DAF6] selection:text-[#1C164B]">
        <RouteTransition>{children}</RouteTransition>
      </body>
    </html>
  );
}

