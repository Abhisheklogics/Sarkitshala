

import image1 from '../../../public/images/esp.webp'
import Image from 'next/image';

export const metadata = {
  title: {
    default: 'Learn ESP32 Projects & Tutorials – Sarkitshala '
  },
  description:
    'Learn ESP32 and ESP8266 projects with free tutorials on IoT, Arduino, and Embedded Systems. Expert guidance by Amarjeet Singh Chauhan and team.',
  robots: 'index, follow',
  openGraph: {
    title: 'Learn ESP32 & ESP8266 Projects – IoT & Arduino Tutorials',
    description: 'Master ESP32 and ESP8266 microcontroller projects with step-by-step tutorials on IoT and Arduino programming. Expert guidance included.',
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
    "MicroPython Projects"
  ],
  esp: {
    summary: 'The ESP8266 and ESP32 are popular microcontrollers with built-in Wi-Fi (and Bluetooth for the ESP32) capabilities, widely used in IoT projects for their affordability and versatility.',
    details: 'The ESP8266 is a Wi-Fi microchip with a full TCP/IP stack, ideal for basic IoT projects requiring Wi-Fi connectivity. The ESP32, with added Bluetooth support, dual-core CPU, and more GPIO pins, is suitable for complex applications like robotics and real-time data processing.',
    usage: 'Both ESP8266 and ESP32 can be programmed using the Arduino IDE, MicroPython, and PlatformIO, making them accessible for users of all skill levels.'
  },
  canonical: "https://sarkitshala.com/esp",
  author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Abhishek Kumar, Aman Raj)'
};

export default function Page() {
  const data = {
    ExperimentName: ' ESP32 ',

    madeByinfo: 'This page explains the details of the ESP8266 and ESP32 microcontrollers.',
    overview: 'The ESP8266 and ESP32 are very affordable compared to other Wi-Fi or Bluetooth solutions, making them attractive for hobbyists and developers working on small projects or prototypes.',
    espExplanation: `
      The ESP8266 and ESP32 are popular microcontrollers with built-in Wi-Fi (and Bluetooth for the ESP32) capabilities. These chips have become a staple in the Internet of Things (IoT) community due to their low cost, ease of use, and ability to connect to the internet and control other devices.

      
      The ESP8266 is a Wi-Fi microchip with a full TCP/IP stack, which allows it to connect to a Wi-Fi network and communicate with other devices over the internet. It's commonly used in home automation, IoT, and smart home projects. Despite being more affordable and having fewer features compared to the ESP32, the ESP8266 is still highly efficient for basic IoT applications like connecting sensors, lights, and switches to the internet.

       ESP32:
      The ESP32 is a more advanced microcontroller compared to the ESP8266. It offers a range of additional features, including:
      - Bluetooth (Classic and BLE)
      - More GPIO pins for interfacing with sensors, motors, etc.
      - Higher processing power with a dual-core CPU
      - More memory for handling larger applications
      These additional capabilities make the ESP32 ideal for more complex IoT applications, such as robotics, wearable devices, industrial automation, and real-time data processing.

      Both the ESP8266 and ESP32 can be programmed using the Arduino IDE or other platforms like MicroPython and PlatformIO, making them accessible to a wide range of users from beginners to experts. They can be easily integrated into projects that require wireless communication, and with their affordable price, they provide a lot of value for anyone looking to develop IoT applications.

      In summary:
      - ESP8266: Great for basic IoT projects that require Wi-Fi connectivity.
      - ESP32: Offers more features and power for advanced IoT applications with both Wi-Fi and Bluetooth connectivity.
    `,
  };

  return (
    <>
      <div className="h-fit w-full p-4 bg-cover rounded-xl leading-8 md:h-fit md:w-[770px] md:text-md md:ml-[350px] md:mt-[100px]  mt-[-20px]        md:p-5 md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap
      ">
        <h1 className="text-2xl text-center capitalize font-bold  md:text-center md:text-2xl  hover:text-blue-500 
        ">{data.ExperimentName}</h1>
       
       <Image alt="ESP8266 and ESP32 Projects" height={500} width={600} src={image1} loading="lazy" className='mt-6 md:ml-14 rounded'/>

        <h2 className="mt-4 text-sm ml-2 md:mt-4 md:text-sm md:ml-2 font-bold hover:text-blue-500">Written By : Aman Raj</h2>
        <h2 className="text-sm mt-2 md:text-sm md:mt-2">{data.madeBy}</h2>
        <p className="mt-2 border p-4 bg-white font-semibold border-black md:mt-2">{data.madeByinfo}, {data.overview}</p>

        <h2 className="mt-4 md:mt-10 "></h2>

       
        <div className="mt-2 border bg-white p-4 font-serif border-black">
          <h2 className="text-lg md:text-2xl   font-semibold">What is  ESP32?</h2>
          <p className="mt-4">{data.espExplanation}</p>
        </div>
      </div>
    </>
  );
}
