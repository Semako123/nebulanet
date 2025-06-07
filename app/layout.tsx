import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const interSans = Inter_Tight({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-orb",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NebulaNet",
  description: "Decentralize your world",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${geistMono.variable} ${orbitron.variable} antialiased relative`}
      >
        {children}
      </body>
    </html>
  );
}
