import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: {
    default: "Venmer Tech | Enterprise Technology & Cloud Consulting",
    template: "%s | Venmer Tech",
  },
  description: "Venmer Tech helps organizations modernize operations, scale digital infrastructure, and accelerate business growth through enterprise-grade technology solutions.",
  keywords: ["Enterprise Technology", "Cloud Consulting", "Application Development", "IT Staffing", "Venmer Tech"],
  authors: [{ name: "Venmer Tech LLC" }],
  openGraph: {
    title: "Venmer Tech | Enterprise Technology & Cloud Consulting",
    description: "Modernize operations and accelerate business growth with enterprise-grade technology and cloud solutions.",
    // url: "https://www.Venmertech.com", // Replace with your actual domain
    siteName: "Venmer Tech",
    locale: "en_US",
    type: "website",
    // images: [{ url: 'https://www.Venmertech.com/og-image.jpg', width: 1200, height: 630 }] // Optional: Add a social share preview image later
  },
  twitter: {
    card: "summary_large_image",
    title: "Venmer Tech | Enterprise Technology & Cloud Consulting",
    description: "Modernize operations and accelerate business growth with enterprise-grade technology and cloud solutions.",
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
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[var(--background)] text-[var(--foreground)]">
        {children}
      </body>
    </html>
  );
}
