
import image1 from '../../../public/images/ar.png'
import Image from 'next/image';
import Link from "next/link";
export const metadata = {
    title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
    description: "Arduino Projects & Tutorials. Learn pin functions, IoT, sensors & communication methods with step-by-step guides. Start your Arduino journey today!",
    alternates: {
      canonical: "https://sarkitshala.com/arduino",
    },
    openGraph: {
      title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
      description: "Arduino Projects & Tutorials. Learn pin functions, IoT, sensors & communication methods with step-by-step guides. Start your Arduino journey today!",
      url: "https://sarkitshala.com/arduino",
      images: [
        {
          url: "https://sarkitshala.com/opengraph-image.jpg",
          width: 1200,
          height: 630,
          alt: "Arduino Projects, Tutorials & Pin Functions",
        },
      ],
      locale: "en_US",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      site: "@sarkitshala",
      title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
      description: "Arduino Projects & Tutorials. Learn pin functions, IoT, sensors & communication methods with step-by-step guides. Start your Arduino journey today!",
      image: "https://sarkitshala.com/opengraph-image.jpg",
    },
    keywords:  ['What is Arduino', 'Arduino Digital Pins', 'Arduino Analog Pins', 'Arduino Power Pins' ,'Arduino PWM Pins', 'Arduino Communication Pins']
  };
  

export default function Page() {
  return (
    <>
<div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-5 md:top-24 md:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold text-lg">Arduino Guide</p>
      <div className="flex flex-col gap-2 mt-3 text-sm md:text-md ">
        <Link href="#Arduino" className="hover:text-blue-600">Arduino</Link>
        <Link href="#Overview-of-Arduino" className="hover:text-blue-600">Overview of Arduino</Link>
        <Link href="#Arduino-Pins" className="hover:text-blue-600">Understanding Arduino Pins</Link>
        <Link href="#Digital-Pins" className="hover:text-blue-600">Digital Pins</Link>
        <Link href="#Analog-Pins" className="hover:text-blue-600">Analog Pins</Link>
        <Link href="#Power-Pins" className="hover:text-blue-600">Power Pins</Link>
        <Link href="#PWM-Pins" className="hover:text-blue-600">PWM Pins</Link>
        <Link href="#Communication-Pins" className="hover:text-blue-600">Communication Pins</Link>
        <Link href="#Steps-to-Get-Started-with-Arduino" className="hover:text-blue-600">Steps to Get Started</Link>
        <Link href="#Conclusion" className="hover:text-blue-600">Conclusion</Link>
      </div>
    </div>
     <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-730px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
    <h1 id='Arduino' className=" hover:text-blue-500 text-2xl text-center md:text-2xl  md:text-3xl text-xl font-bold">
    What is Arduino 
    </h1>

    <Image height={400} width={500}  loading="lazy" src={image1} className='mt-6 md:ml-28 rounded' alt='Arduino Image'/>
    
    <h2 className="text-sm hover:text-blue-600 mt-6 md:text-sm md:mt-4 font-bold">Written By: Upendra Prawal</h2>
    <p className="mt-2 md:mt-2">Arduino was developed by a group of developers from Italy in 2005, led by Massimo Banzi.</p>
    
    <h2 id='Overview-of-Arduino' className="text-lg hover:text-blue-600 mt-8 md:text-2xl md:mt-4 font-bold ">
        Overview of Arduino
    </h2>
    <p className="mt-8 md:mt-4">
        Arduino is an open-source electronics platform based on simple software and hardware. It's designed to make it easy for anyone to create interactive electronic projects. 
        The platform consists of a microcontroller and development environment to write code and upload it to the board. 
        Arduino can be used for a variety of purposes, from creating simple devices like blinking LEDs to complex robots and home automation systems.
    </p>
    <p className="mt-8 md:mt-4">
        The versatility of Arduino is what makes it so popular with hobbyists, engineers, and educators. Its accessibility and affordability have made it a great tool for learning and prototyping in the world of electronics.
    </p>

    <h2 id='Arduino-Pins' className="text-lg mt- hover:text-blue-600 md:text-2xl md:mt-10 font-bold ">
        Understanding Arduino Pins and Their Functions
    </h2>
    <p className="mt-8">
        An Arduino board typically has a range of input and output pins that allow it to interact with the external world. Below is a detailed explanation:
    </p>

    <h3 id='Digital-Pins' className="md:text-2xl hover:text-blue-600  text-lg mt-6 font-bold">1. Digital Pins</h3>
    <p className="mt-4">
        Arduino boards come with a set of digital pins (usually numbered from 0 to 13) that can be used for digital input and output. For example, they can be used to control LEDs, read button presses, or communicate with other devices.
    </p>
    <p className="mt-4">
        - Input Mode: Detects high or low signals (1 or 0).  
        - Output Mode: Sends high (5V) or low (0V) signals to connected components.
    </p>

    <h3 id='Analog-Pins' className="md:text-2xl text-lg mt-6 hover:text-blue-600 font-bold">2. Analog Pins</h3>
    <p className="mt-4">
        Analog pins (A0 to A5 on most boards) are used to read varying voltage levels. These are especially useful for sensors like temperature sensors, light sensors, etc.
    </p>
    <p className="mt-4">
        - Analog Input: Reads values between 0 and 1023, representing 0V to 5V.  
        - Analog Output (PWM): Generates signals for tasks like motor speed control or dimming LEDs.
    </p>

    <h3 id='Power-Pins' className="md:text-2xl text-lg mt-6 hover:text-blue-600 font-bold">3. Power Pins</h3>
    <p className="mt-4">
        - Vin: Input voltage for the Arduino board when using an external power source.  
        - 5V: Provides regulated 5V output for components.  
        - 3.3V: Provides regulated 3.3V output for low-voltage components.  
        - GND: Ground pins, necessary for completing circuits.
    </p>

    <h3 id='PWM-Pins' className="md:text-2xl text-lg mt-6 hover:text-blue-600 font-bold">4. PWM Pins</h3>
    <p className="mt-4">
        Pins marked with ~ (tilde symbol) support Pulse Width Modulation (PWM). These are used to simulate analog output for tasks like controlling motor speed or LED brightness.
    </p>

    <h3  id='Communication-Pins' className="md:text-2xl text-lg mt-6 hover:text-blue-600 font-bold">5. Communication Pins</h3>
    <p className="mt-4">
        Arduino supports serial communication through specific pins:
        - TX (Transmit) and RX (Receive): Used for serial communication.  
        - I2C Pins (SDA, SCL): Used to connect multiple devices like sensors.  
        - SPI Pins (MISO, MOSI, SCK): Used for high-speed communication with devices like SD cards or displays.
    </p>

    <h2 id='Steps-to-Get-Started-with-Arduino' className="md:text-2xl text-lg mt-10 hover:text-blue-600 md:mt-10 font-bold">
        Steps to Get Started with Arduino
    </h2>
    <p className="mt-8">1. Install the Arduino IDE on your computer.</p>
    <p className="mt-4 md:ml-24">2. Connect the Arduino board to your computer via USB cable.</p>
    <p className="mt-4 md:ml-24">3. Open the Arduino IDE and select the correct board and port.</p>
    <p className="mt-4 md:ml-24">4. Write your code (example: blink an LED).</p>
    <p className="mt-4 md:ml-24">5. Upload the code to the Arduino board.</p>
    <p className="mt-4 md:ml-24">6. Watch the results on the board (e.g., LED blinking).</p>

    <h3 id='Conclusion' className="md:text-2xl hover:text-blue-600 text-lg mt-8  md:mt-6 font-bold ">Conclusion</h3>
    <p className="mt-6 md:mt-4">
        After uploading the code, the LED on the Arduino board will blink on and off every second, demonstrating the basic functionality of the Arduino.
    </p>
</div>

    </>
  );
}
