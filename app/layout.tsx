import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://preetghaghada.com"),
  title: {
    default: "Preet Ghaghada — websites, ads and AI that answers every enquiry",
    template: "%s — Preet Ghaghada",
  },
  description:
    "I build your website, run your ads, and my AI answers every enquiry. Websites, marketing and AI automation for small businesses.",
  openGraph: {
    siteName: "Preet Ghaghada",
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Preet Ghaghada — websites, ads and AI that answers every enquiry",
    description:
      "I build your website, run your ads, and my AI answers every enquiry. Websites, marketing and AI automation for small businesses.",
  },
  twitter: {
    card: "summary_large_image",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Nav />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-TNBL1P3Q1" />
    </html>
  );
}
