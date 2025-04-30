import Image from 'next/image';
import image1 from '../../../public/images/esp.webp';
export const metadata = {
  title: {
    default: 'Learn ESP32 Projects & Tutorials – Sarkitshala'
  },
  description: 'Learn ESP32 and ESP8266 projects with free tutorials on IoT, Arduino, and Embedded Systems. Explore step-by-step guides and expert tips.',
  robots: 'index, follow',
  openGraph: {
    title: 'Master ESP32 & ESP8266 Projects – Sarkitshala',
    description: 'Explore detailed ESP32 and ESP8266 microcontroller tutorials for IoT, Arduino, and embedded systems. Start building amazing projects today.',
    url: 'https://sarkitshala.com/esp',
    images: [
      {
        url: 'https://sarkitshala.com/images/ESP.png',
        width: 1200,
        height: 630,
        alt: 'ESP32 and ESP8266 Microcontrollers - Sarkitshala'
      }
    ],
    site_name: 'Sarkitshala',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@sarkitshala',
    title: 'Master ESP32 & ESP8266 Projects – Sarkitshala',
    description: 'Learn ESP32 and ESP8266 microcontroller projects with expert tutorials on IoT, Arduino, and Embedded Systems.',
    image: 'https://sarkitshala.com/images/ESP.png'
  },
  
  canonical: "https://sarkitshala.com/esp",
  author: 'Aman Raj',
structuredData : {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Learn ESP32 Projects & Tutorials – Sarkitshala",
    "description": "Learn ESP32 and ESP8266 projects with free tutorials on IoT, Arduino, and Embedded Systems. Explore step-by-step guides and expert tips.",
    "image": "https://sarkitshala.com/public/images/ESP.png",
    "author": {
      "@type": "Person",
      "name": "Aman Raj"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sarkitshala",
      "logo": {
        "@type": "ImageObject",
        "url": "https://sarkitshala.com/public/images/logo.png"
      }
    },
    "datePublished": "2025-04-28",
    "dateModified": "2025-04-28"
  }
};




export default function Page() {
  const data = {
    ExperimentName: 'ESP32 Projects and Tutorials',
    madeByinfo: 'This page provides a comprehensive guide to the ESP32 microcontroller, offering step-by-step tutorials, projects, and coding examples.',
    overview: 'The ESP32 is an affordable and powerful microcontroller used in a wide range of IoT projects. It supports Wi-Fi, Bluetooth, and more, making it a great choice for both beginners and experts.',
    espExplanation: `
      The ESP32 is a dual-core microcontroller with integrated Wi-Fi and Bluetooth capabilities. It is designed to support a wide range of applications, including robotics, home automation, and IoT systems. Here’s why ESP32 is a popular choice:

      - Wi-Fi and Bluetooth: Equipped with both Wi-Fi and Bluetooth (Classic + BLE).
      - Dual-Core Processor: Two cores provide enhanced processing power.
      - Low Power Consumption: Energy-efficient, perfect for battery devices.
      - Large GPIO Pin Count: Supports various peripherals and sensors.

      ### Key Features:
      - Dual-core CPU, up to 240 MHz.
      - Wi-Fi + Bluetooth (Classic + BLE).
      - 34 GPIO pins.
      - Integrated ADCs, DACs, touch sensors.
      - Programmable via Arduino IDE, MicroPython, PlatformIO.

      **ESP32 vs ESP8266:  
      ESP8266 offers Wi-Fi but no Bluetooth, and it’s a single-core chip. ESP32 has more features and suits complex tasks better.

      Applications:
      - Home automation systems
      - IoT sensor networks
      - Bluetooth communication projects
      - Real-time data processing
    `,
    projectIdeas: [
      "Home automation with ESP32 and Firebase",
      "IoT weather station using ESP32",
      "Bluetooth-enabled devices with ESP32",
      "Smart lighting systems using ESP32",
      "Remote control systems with ESP32 and Bluetooth"
    ],
    stepByStepTutorials: [
      { title: "ESP32 Wi-Fi Connection", description: "Learn how to connect the ESP32 to Wi-Fi and use it for remote control applications." },
      { title: "ESP32 with Bluetooth Low Energy", description: "Set up Bluetooth communication on ESP32 and build a Bluetooth-enabled app." },
      { title: "Real-time Data with ESP32", description: "Learn how to send and receive real-time data using ESP32 and cloud platforms like ThingSpeak." }
    ]
  };



  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(metadata.structuredData) }}
      />
    <div className="h-fit w-full p-4 bg-cover rounded-xl leading-8 md:w-[770px] md:ml-[300px] md:mt-[100px] mt-[-20px] md:p-5 md:text-justify md:break-words">
      <h1 className="text-2xl text-center font-bold capitalize hover:text-blue-500">
        {data.ExperimentName}
      </h1>

      <Image
        alt="ESP32 and ESP8266 Projects"
        height={500}
        width={600}
        src={image1}
        loading="lazy"
        className="mt-6 md:ml-14 rounded"
      />

      <h2 className="mt-4 text-sm ml-2 font-bold hover:text-blue-500">
        Written By: Aman Raj
      </h2>

      <p className="mt-2 p-4 bg-white border border-black">
        {data.madeByinfo}
      </p>

      <section className="mt-4 p-4 bg-white border border-black font-serif">
        <h2 className="text-lg md:text-2xl font-semibold">What is ESP32?</h2>
        <p className="mt-4 whitespace-pre-line">
          {data.espExplanation}
        </p>
      </section>

      <section className="mt-6 p-4 bg-white border border-black font-serif">
        <h2 className="text-lg md:text-2xl font-semibold">Project Ideas</h2>
        <ul className="list-disc ml-6 mt-4">
          {data.projectIdeas.map((idea, index) => (
            <li key={index}>{idea}</li>
          ))}
        </ul>
      </section>

      <section className="mt-6 p-4 bg-white border border-black font-serif">
        <h2 className="text-lg md:text-2xl font-semibold">Step-by-Step Tutorials</h2>
        <ul className="list-disc ml-6 mt-4">
          {data.stepByStepTutorials.map((tutorial, index) => (
            <li key={index}>
              <strong>{tutorial.title}:</strong> {tutorial.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
    </>
  );
}
