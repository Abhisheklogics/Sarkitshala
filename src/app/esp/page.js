

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
  author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)'
};

export default function Page() {
  const data = {
    ExperimentName: "ESP8266 & ESP32 Setup Guide",
    madeByinfo: "This guide explains how to set up ESP8266 and ESP32 with Arduino IDE and connect them to WiFi.",
    overview: "The ESP8266 and ESP32 are affordable microcontrollers with built-in WiFi and Bluetooth, ideal for IoT and smart home projects.",
    espSetupGuide: `
      1. Download and install Arduino IDE from https://www.arduino.cc/en/software.
      2. Open Arduino IDE → File → Preferences → Add the following URLs:
         - https://dl.espressif.com/dl/package_esp32_index.json
         - https://arduino.esp8266.com/stable/package_esp8266com_index.json
      3. Install the ESP8266 and ESP32 board packages from Board Manager.
      4. If required, install the USB-to-Serial driver (CP210x or CH340).
      5. Connect the ESP board via USB and select the correct COM port.
      6. Upload the Blink sketch to test the setup.
      7. To connect to WiFi, use the provided WiFi code.
    `,
    blinkCode: {
      esp8266: `
        void setup() { pinMode(2, OUTPUT); }
        void loop() { digitalWrite(2, HIGH); delay(1000); digitalWrite(2, LOW); delay(1000); }
      `,
      esp32: `
        void setup() { pinMode(2, OUTPUT); }
        void loop() { digitalWrite(2, HIGH); delay(1000); digitalWrite(2, LOW); delay(1000); }
      `
    },
    wifiSetupCode: `
      #include <WiFi.h>  // For ESP32
      // #include <ESP8266WiFi.h>  // For ESP8266
      const char* ssid = "Your_SSID"; 
      const char* password = "Your_PASSWORD";
  
      void setup() {
        Serial.begin(115200);
        WiFi.begin(ssid, password);
        while (WiFi.status() != WL_CONNECTED) { delay(500); Serial.print("."); }
        Serial.println("Connected to WiFi!");
      }
  
      void loop() {
        Serial.println(WiFi.localIP());
        delay(5000);
      }
    `
  };
  

  return (
    <>
      <div className="h-fit w-full p-4 bg-white bg-cover rounded-xl leading-8 text-justify 
        md:h-fit md:w-[770px] md:text-md md:ml-[320px] md:mt-[100px]  mt-[-20px]        md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap
      ">
        <h1 className="text-2xl text-center capitalize md:text-3xl text-xl font-bold
          md:text-center md:text-2xl  hover:text-blue-500 
        ">{data.ExperimentName}</h1>
       
       <Image alt="ESP8266 and ESP32 Projects"   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" height={500} width={500} src={image1}  className='mt-6 md:ml-24 rounded'/>

        <h2 className="mt-4 text-sm ml-2
        md:mt-4 md:text-sm md:ml-2 font-bold hover:text-blue-500">Written By : Aman Raj</h2>
        <h2 className="text-sm mt-2
        md:text-sm md:mt-2">{data.madeBy}</h2>
        <p className="mt-2
        md:mt-2">{data.madeByinfo}</p>

        <h2 className="mt-10 
          md:mt-10 ">{data.overview}</h2>

       
        <div className="mt-10">
          <h2 className="text-lg md:text-2xl font-bold hover:text-blue-500">What is  ESP32?</h2>
          <p className="mt-4">{data.espSetupGuide}</p>
        </div>
      </div>
    </>
  );
}
