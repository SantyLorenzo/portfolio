import type { Metadata } from "next";
import { Inter } from "next/font/google"
import { cn } from "@/lib/utils"

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
          "min-h-screen bg-background font-sans antialiased",
          inter.variable
        )}
      >
        {children}
      </body>
    </html>
  )
}
