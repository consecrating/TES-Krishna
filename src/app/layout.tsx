import type { Metadata } from "next";
import "./globals.css";
import { ProtectionLayer } from "@/components/ProtectionLayer";

export const metadata: Metadata = {
  title: "DEMO — TES Hospitality | Not For Commercial Use",
  description:
    "⚠️ DEMO WEBSITE — NOT FOR COMMERCIAL USE. This is a demonstration website for TES Hospitality. All rights reserved. Unauthorized copying, reproduction, or use is strictly prohibited.",
  keywords: [
    "demo website",
    "not for commercial use",
    "demonstration only",
    "TES Hospitality demo",
    "protected content",
  ],
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nosnippet: true,
    noimageindex: true,
    nocache: true,
  },
  other: {
    "X-Robots-Tag": "noindex, nofollow, noarchive, nosnippet, noimageindex",
    "content-protection": "encrypted",
    "ai-scraping": "disallowed",
    "copying": "prohibited",
    "author": "Protected — consecrating/TES-Krishna",
    "generator": "Protected Build System",
    "rights": "All rights reserved. Demo only. No commercial use permitted.",
    "revisit-after": "never",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="googlebot" content="noindex, nofollow, noarchive, nosnippet, noimageindex" />
        <meta name="bingbot" content="noindex, nofollow, noarchive" />
        <meta name="CCBot" content="nofollow, noindex" />
        <meta name="GPTBot" content="noindex, nofollow" />
        <meta name="ChatGPT-User" content="noindex, nofollow" />
        <meta name="anthropic-ai" content="noindex, nofollow" />
        <meta name="Google-Extended" content="noindex, nofollow" />
        <meta name="PerplexityBot" content="noindex, nofollow" />
        <meta name="ClaudeBot" content="noindex, nofollow" />
        <meta name="cohere-ai" content="noindex, nofollow" />
        <meta name="Bytespider" content="noindex, nofollow" />
        <meta name="copyright" content="© 2026 TES Hospitality. DEMO ONLY. All rights reserved. No reproduction permitted." />
        <meta name="distribution" content="private" />
        <meta name="rating" content="general" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&family=Inter:wght@300;400;500;600;700;800;900&family=Playfair+Display:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased protected-content">
        <ProtectionLayer />
        {children}
      </body>
    </html>
  );
}
