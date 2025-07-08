// app/layout.tsx (Next.js App Router)
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  titleTemplate: '%s – Sarkitshala',
  description: "Explore tutorials on IoT, Arduino, ESP32, Raspberry Pi, Jetson & more.",
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <Head>
       <meta name="google-site-verification" content="Mt7iRB_iff5dtyKWL3AH1Isf0HycfwBBgnRMpobxba4" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <body className="font-serif md:bg-[#FFF0E5]">
        <Header />
        <main>{children}</main>

        {/* Google AdSense Script */}
<Script
  strategy="afterInteractive"
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2053631970024775"
  crossOrigin="anonymous"
/>


      </body>
    </html>
  );
}
