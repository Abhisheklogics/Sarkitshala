import image1 from '../../../public/images/esp.webp'
import Image from 'next/image';

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
        url: 'https://sarkitshala.com/public/images/ESP.png',
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
    image: 'https://sarkitshala.com/public/images/ESP.png'
  },
  keywords: [
    "ESP32 Projects", 
    "ESP8266 Projects", 
    "MicroPython Projects",
    "IoT Projects", 
    "Arduino Projects",
    "ESP32 Tutorials", 
    "Embedded Systems"
  ],
  canonical: "https://sarkitshala.com/esp",
  author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)'
};

export default function Page() {
  const data = {
    ExperimentName: 'ESP32 Projects and Tutorials',
    madeByinfo: 'This page provides a comprehensive guide to the ESP32 microcontroller, offering step-by-step tutorials, projects, and coding examples.',
    overview: 'The ESP32 is an affordable and powerful microcontroller used in a wide range of IoT projects. It supports Wi-Fi, Bluetooth, and more, making it a great choice for both beginners and experts.',
    espExplanation: `
      The ESP32 is a dual-core microcontroller with integrated Wi-Fi and Bluetooth capabilities. It is designed to support a wide range of applications, including robotics, home automation, and IoT systems. Here’s why ESP32 is a popular choice:
      
      - Wi-Fi and Bluetooth: The ESP32 is equipped with both Wi-Fi and Bluetooth (Classic + BLE), allowing it to communicate with other devices wirelessly.
      - Dual-Core Processor: The microcontroller has two cores, providing enhanced processing power for complex tasks.
      - Low Power Consumption: ESP32 is energy-efficient, making it suitable for battery-operated devices.
      - Large GPIO Pin Count: With numerous GPIO pins, the ESP32 can easily interface with a variety of sensors, actuators, and other peripherals.
      
      ### Key Features:
      - Dual-core CPU with a clock speed of up to 240 MHz.
      - Support for both Wi-Fi and Bluetooth (classic and BLE).
      - 34 GPIO pins for versatile applications.
      - Integrated ADCs, DACs, and touch sensors.
      - Can be programmed using Arduino IDE,MicroPython, and PlatformIO.

      ESP32 vs ESP8266:
      The ESP8266 is another popular Wi-Fi microcontroller, but it lacks Bluetooth support and has a single-core processor. The ESP32, on the other hand, offers more features and is better suited for more complex tasks.

      In summary, ESP32 is perfect for a wide range of projects, including:
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
      <div className="h-fit w-full p-4 bg-cover rounded-xl leading-8 md:h-fit md:w-[770px] md:text-md md:ml-[300px] md:mt-[100px]  mt-[-20px] md:p-5 md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap">
        <h1 className="text-2xl text-center capitalize font-bold md:text-center md:text-2xl hover:text-blue-500">
          {data.ExperimentName}
        </h1>

        <Image alt="ESP32 and ESP8266 Projects" height={500} width={600} src={image1} loading="lazy" className='mt-6 md:ml-14 rounded' />

        <h2 className="mt-4 text-sm ml-2 md:mt-4 md:text-sm md:ml-2 font-bold hover:text-blue-500">Written By: Aman Raj</h2>
        
        <p className="mt-2 border p-4 bg-white  border-black md:mt-2">{data.madeByinfo}</p>

        <div className="mt-4 border bg-white p-4 font-serif border-black">
          <h2 className="text-lg md:text-2xl font-semibold">What is ESP32?</h2>
          <p className="mt-4">{data.espExplanation}</p>
        </div>

        <div className="mt-6 border bg-white p-4 font-serif border-black">
          <h2 className="text-lg md:text-2xl font-semibold">Project Ideas</h2>
          <ul className="list-disc ml-6 mt-4">
            {data.projectIdeas.map((idea, index) => (
              <li key={index}>{idea}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border bg-white p-4 font-serif border-black">
          <h2 className="text-lg md:text-2xl font-semibold">Step-by-Step Tutorials</h2>
          <ul className="list-disc ml-6 mt-4">
            {data.stepByStepTutorials.map((tutorial, index) => (
              <li key={index}>
                <strong>{tutorial.title}:</strong> {tutorial.description}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
