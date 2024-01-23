import type { Metadata } from "next";
import { Inter as FontSans, DM_Mono as FontMono } from "next/font/google";
import "./globals.css";
import { cn } from "~/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = FontMono({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "John Allen Delos Reyes",
  description: "Full Stack React Developer using Next.js and React Native",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontMono.variable,
          fontSans.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
