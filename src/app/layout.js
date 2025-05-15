import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        
        <meta name="google-site-verification" content="Mt7iRB_iff5dtyKWL3AH1Isf0HycfwBBgnRMpobxba4" />
      <meta name="google-adsense-account" content="ca-pub-2053631970024775">
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} font-serif md:bg-[#FFF0E5]`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
