import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Configure Geist Sans for primary brand typography
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

// Configure Geist Mono for technical data and monospace elements
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    template: "%s | Kasparro",
    default: "Kasparro — AI-Native Brand Intelligence",
  },
  description: "Optimization and brand monitoring for the generative search era.",
  keywords: ["AI SEO", "Brand Intelligence", "LLM Optimization", "Digital PR"],
  authors: [{ name: "Kasparro Labs" }],
  metadataBase: new URL("https://kasparro.com"), // Replace with your actual domain
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          font-sans 
          bg-white 
          text-zinc-900 
          selection:bg-blue-100 
          selection:text-blue-900
        `}
      >
        {/* Note: This is the entry point. 
          Specific layouts (PublicLayout or AppShell) will wrap 
          content within the specific page directories.
        */}
        {children}
      </body>
    </html>
  );
}