import { Inter } from "next/font/google";
import "./globals.css";



import Header from '@/components/Header/Header'
const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: {
    default: "Sarkitshala - Learn Arduino, Raspberry Pi, and ESP",
    template: "%s - Sarkitshala ",
  },
  description: 
    "Sarkitshala is a comprehensive learning platform offering hands-on experiments, tutorials, and resources for Arduino, Raspberry Pi, and ESP platforms. Enhance your skills in electronics, programming, and IoT development with expert guidance and practical projects.",
  url: "https://sarkitshala.site",
  siteName: "Sarkitshala",
  openGraph: {
    title: "Sarkitshala - Learn Electronics and IoT",
    description: 
      "Explore Sarkitshala for hands-on tutorials and projects in Arduino, Raspberry Pi, and ESP. Build your knowledge in IoT, electronics, and programming with step-by-step guidance.",
    url: "https://sarkitshala.site/",
    siteName: "Sarkitshala",
    images: [
      {
        url: "https://sarkitshala.site/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarkitshala - Empowering Electronics and IoT Learning",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarkitshala - Learn Arduino, Raspberry Pi, and ESP",
    description: 
      "Sarkitshala offers practical resources and tutorials for Arduino, Raspberry Pi, and ESP. Dive into hands-on experiments and master electronics, programming, and IoT development.",
    image: "https://sarkitshala.site/opengraph-image.jpg",
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
