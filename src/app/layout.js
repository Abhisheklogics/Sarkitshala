import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const inter = Inter({ subsets: ["latin"] });
export const metadata= {
  title:{
    default:'Sarkitshala - HomePage',
    template:"%s - Sarkitshala"

  },
  description: "Sarkitshala offers a collection of experiments and knowledge related to Arduino, Raspberry Pi, and ESP platforms. Explore hands-on projects, tutorials, and resources to enhance your understanding of electronics and programming.",
  url: 'https://sarkitshala.site',
  siteName: "sarkitshala.site",
  openGraph: {
    title: "sarkitshala.site",
    description: "",
    url: '../../public/images/Bristo.jpg', 
    siteName: "sarkitshala.site",
    images: [
      {
        url: '../../public/images/Bristo.jpg',
        width: 1200,
        height: 630,
        alt: "An image that represents your app",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarkitshala - HomePage",
    description: "Sarkitshala offers a collection of experiments and knowledge related to Arduino, Raspberry Pi, and ESP platforms. Explore hands-on projects, tutorials, and resources to enhance your understanding of electronics and programming.",
    image: "../../public/images/Bristo.jpg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="google-site-verification" content="4D8wK0hdldsYIVNcbA1a-04Bdv-tzUuLkIxG4guNo6w" />
        <meta name="description" content={metadata.description} />
        <meta name="robots" content="index, follow" />
        <link rel="shortcut icon" href="./favicon.ico" />


      </head>
      <body className={`${inter.className} `}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
