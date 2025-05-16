import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
     
        <Script
          strategy="afterInteractive"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2053631970024775"
          crossOrigin="anonymous"
        />

        <meta name="google-site-verification" content="Mt7iRB_iff5dtyKWL3AH1Isf0HycfwBBgnRMpobxba4" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body className={`${inter.className} font-serif md:bg-[#FFF0E5]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
