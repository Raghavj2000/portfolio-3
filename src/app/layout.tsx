import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Raghavendra Portfolio | Frontend Developer",
  description: "Portfolio of Raghavendra, a Frontend Developer with 3 years of experience specializing in React, Next.js, and modern web technologies. Crafting pixel-perfect, scalable web experiences.",
  keywords: ["Frontend Developer", "React Developer", "Next.js Portfolio", "Web Developer India", "UI/UX Design", "JavaScript", "TypeScript", "Raghavendra"],
  authors: [{ name: "Raghavendra" }],
  creator: "Raghavendra",
  openGraph: {
    title: "Raghavendra Portfolio | Frontend Developer",
    description: "Crafting pixel-perfect, scalable web experiences with a focus on performance and design.",
    url: "https://raghav.dev",
    siteName: "Raghavendra Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Raghavendra Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raghavendra Portfolio | Frontend Developer",
    description: "Crafting pixel-perfect, scalable web experiences with a focus on performance and design.",
    creator: "@raghavendra",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
