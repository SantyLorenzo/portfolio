import type { Metadata } from "next";
import { Inter } from "next/font/google"

import { cn } from "@/lib/utils"
import InformationMarquee from "@/components/information-marquee";

import "./globals.css";

export const metadata: Metadata = {
  title: "Santi Lorenzo - Software engineer",
  description: "Software engineer",
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--open-sans",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen flex flex-col justify-between bg-background font-sans antialiased overflow-x-hidden",
          inter.variable
        )}
      >
        <InformationMarquee />
        {children}
        <InformationMarquee />
      </body>
    </html>
  )
}
