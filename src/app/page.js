import Home1 from '@/components/Home/Home';
import Script from 'next/script';

const structuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Sarkitshala",
  "url": "https://sarkitshala.com/",
  "description": "Hands-on tutorials on Arduino, IoT, ESP32, Raspberry Pi, STM32 & drones. Learn electronics in Hindi and English with Sarkitshala.",
  "inLanguage": "en",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sarkitshala.com/"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Sarkitshala",
    "url": "https://sarkitshala.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sarkitshala.com/logo.png",
      "width": 300,
      "height": 60
    }
  },
  "author": {
    "@type": "Organization",
    "name": "Sarkitshala"
  },
  "image": {
    "@type": "ImageObject",
    "url": "https://sarkitshala.com/opengraph-image.jpg",
    "width": 1200,
    "height": 630
  },
  "about": [
    { "@type": "Thing", "name": "Arduino" },
    { "@type": "Thing", "name": "ESP32" },
    { "@type": "Thing", "name": "IoT" },
    { "@type": "Thing", "name": "Raspberry Pi" },
    { "@type": "Thing", "name": "STM32" },
    { "@type": "Thing", "name": "Jetson Nano" }
  ]
};

export const metadata = {
  title: "Master IoT, Arduino, ESP32, Raspberry Pi & Jetson Tutorials – Hindi & English",
  description: "Unlock expert tutorials on IoT, Arduino, Raspberry Pi, ESP32, STM32, Jetson, and drones. Start building real-world projects with Sarkitshala’s hands-on guides today!",
  alternates: {
    canonical: "https://sarkitshala.com/",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function Home() {
  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Home1 />
    </>
  );
}
