import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header/Header";


const inter = Inter({ subsets: ["latin"] });
import image1 from '../../public/images/Bristo.jpg'
export const metadata= {
  title:{
    default:'Learning website - HomePage',

  },
  description: "A brief description of your app for better SEO.",
  openGraph: {
    title: "sarkitshala.site",
    description: "A brief description of your app.",
    url: '../../public/images/Bristo.jpg', // Ensure this is your actual URL
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
    title: "Your App Title",
    description: "A brief description of your app.",
    image: "https://yourwebsite.com/twitter-image.jpg", // URL of the Twitter card image
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
        <link rel="icon" href="/favicon.ico" />
        
      </head>
      <body className={`${inter.className} `}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
