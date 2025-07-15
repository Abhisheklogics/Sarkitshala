// app/layout.tsx
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  titleTemplate: '%s – Sarkitshala',
  description: "Explore tutorials on IoT, Arduino, ESP32, Raspberry Pi, Jetson & more.",
  verification: {
    google: "9rETS0M62diUrVcnRPMv2Ro7G95p7O9p4-SW6F4jZQI",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="font-serif md:bg-[#FFF0E5]">
        <Header />
        <main>{children}</main>

       
      </body>
    </html>
  );
}
