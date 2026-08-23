import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TES Hospitality | Travel Eat Stay - Hotel Consultants in Mangalore",
  description:
    "The specialist team of TES Hospitality offers hands-on and simple strategic on increasing the revenue generation and turnover for hotels. 18+ years of experience in hotel industry.",
  keywords: [
    "hotel consultants",
    "hospitality management",
    "revenue management",
    "hotel management Mangalore",
    "TES Hospitality",
    "Travel Eat Stay",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
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
      <body className="antialiased">{children}</body>
    </html>
  );
}
