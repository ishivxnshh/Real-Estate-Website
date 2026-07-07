import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Housick | India's Premier Luxury Real Estate",
    template: "%s | Housick",
  },
  description: "Discover an exclusive portfolio of extraordinary luxury homes, premium villas, and high-end real estate across India's most prestigious markets.",
  keywords: ["luxury real estate", "premium properties india", "buy luxury villa", "housick real estate", "high-end apartments", "luxury homes delhi", "premium real estate mumbai"],
  authors: [{ name: "Housick" }],
  creator: "Housick Real Estate",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://housick.com",
    title: "Housick | India's Premier Luxury Real Estate",
    description: "Discover an exclusive portfolio of extraordinary luxury homes, premium villas, and high-end real estate across India's most prestigious markets.",
    siteName: "Housick",
    images: [
      {
        url: "https://images.unsplash.com/photo-1613490908653-b49bda872221?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Housick Luxury Real Estate",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Housick | Luxury Real Estate",
    description: "Explore a curated portfolio of the most exceptional properties across India.",
    images: ["https://images.unsplash.com/photo-1613490908653-b49bda872221?auto=format&fit=crop&w=1200&q=80"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background min-h-screen font-body-md text-body-md selection:bg-secondary-container selection:text-on-secondary-container flex flex-col">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Navbar />
          <main className="flex-1 w-full pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
