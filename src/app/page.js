import Home1 from '@/components/Home/Home';

export const metadata = {
  title: "Master IoT, Arduino, ESP32 & Raspberry Pi Tutorials – Sarkitshala",
  description: "Unlock expert tutorials on IoT, Arduino, Raspberry Pi, ESP, STM32, Jetson, and drones. Start building real-world projects with Sarkitshala’s hands-on guides today!",
    alternates: {
    canonical: "https://sarkitshala.com/",
  },
  openGraph: {
    title: "Master Arduino, Raspberry Pi & ESP Development - Sarkitshala",
    description: "Learn the essentials and advanced techniques of Arduino, Raspberry Pi, and ESP through step-by-step tutorials, projects, and coding challenges. Join Sarkitshala today to start your IoT journey.",
    url: "https://sarkitshala.com/",
    images: [
      {
        url: "https://sarkitshala.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Explore in-depth Arduino, Raspberry Pi, and ESP projects to accelerate your IoT development with Sarkitshala.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Arduino, Raspberry Pi & ESP Projects - Sarkitshala",
    description: "Dive into hands-on tutorials and projects to master Arduino, Raspberry Pi, and ESP. Get started with IoT development at Sarkitshala.",
    image: "https://sarkitshala.com/opengraph-image.jpg",
  },
  structuredData: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Learn Arduino, Raspberry Pi & ESP Projects | Sarkitshala",
    "description": "Master electronics, IoT, and development with detailed tutorials on Arduino, Raspberry Pi, and ESP projects. Learn at your own pace with Sarkitshala.",
    "url": "https://sarkitshala.com/",
    "mainEntityOfPage": "https://sarkitshala.com/",
    "publisher": {
      "@type": "Organization",
      "name": "Sarkitshala",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sarkitshala.com/logo.png",
        "width": 300,
        "height": 60
      }
    },
    "image": {
      "@type": "ImageObject",
      "url": "https://sarkitshala.com/opengraph-image.jpg",
      "width": 1200,
      "height": 630
    }
  }
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }}
      />
      <Home1 />
    </>
  );
}
