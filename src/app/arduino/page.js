
// import image1 from '../../../public/images/ar.png'
// import Image from 'next/image';
// import Link from "next/link";

// export const metadata = {
//   title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
//   description:
//     "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
//   alternates: {
//     canonical: "https://sarkitshala.com/arduino",
//   },
//   openGraph: {
//     title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
//     description:
//       "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
//     url: "https://sarkitshala.com/arduino",
//     images: [
//       {
//         url: "https://sarkitshala.com/opengraph-image.jpg",
//         width: 1200,
//         height: 630,
//         alt: "Arduino Projects, Tutorials & Pin Functions",
//       },
//     ],
//     locale: "en_US",
//     type: "article",
//   },
//   twitter: {
//     card: "summary_large_image",
//     site: "@sarkitshala",
//     title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
//     description:
//       "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
//     image: "https://sarkitshala.com/opengraph-image.jpg",
//   },
//   keywords: [
//     "What is Arduino",
//     "Arduino Digital Pins",
//     "Arduino Analog Pins",
//     "Arduino Power Pins",
//     "Arduino PWM Pins",
//     "Arduino Communication Pins",
//     "Arduino Projects",
//     "Arduino Tutorials",
//     "Arduino for Beginners",
//     "DIY Arduino Projects",
//     "Arduino IoT Projects"
//   ]
// };

  

// export default function Page() {
//   return (
//     <>
// <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed text-center  md:right-1 md:top-24 md:w-[200px] 2xl:w-fit  max-w-xs mx-auto mt-4">
//       <p className="font-semibold text-lg">Arduino Guide</p>
//       <div className="flex flex-col gap-2 mt-3 text-sm md:text-md  ">
//         <Link href="#Arduino" className=" max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Arduino</Link>
//         <Link href="#Overview-of-Arduino" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Overview of Arduino</Link>
//         <Link href="#Arduino-Pins" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Understanding Arduino Pins</Link>
//         <Link href="#Digital-Pins" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Digital Pins</Link>
//         <Link href="#Analog-Pins" className="max-w-4xl bg-white p-2 rounded-xl shadow max-w-4xl bg-white p-4 rounded-2xl shadow hover:text-blue-600">Analog Pins</Link>
//         <Link href="#Power-Pins" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Power Pins</Link>
//         <Link href="#PWM-Pins" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">PWM Pins</Link>
//         <Link href="#Communication-Pins" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Communication Pins</Link>
//         <Link href="#Steps-to-Get-Started-with-Arduino" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Steps to Get Started</Link>
//         <Link href="#Conclusion" className="max-w-4xl bg-white p-2 rounded-xl shadow hover:text-blue-600">Conclusion</Link>
//       </div>
//     </div>
//      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
//     md:h-fit md:w-[790px] 2xl:w-[820px] md:ml-[330px] md:mt-[-730px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
//     <h1 id='Arduino' className=" hover:text-blue-500 text-2xl text-center md:text-2xl  md:text-3xl text-xl font-bold">
//     Arduino Projects 
//     </h1>

//     <Image height={400} width={500}  loading="lazy" src={image1} className='mt-6 md:ml-28 rounded' alt='Arduino Image'/>
    
//     <p className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">Arduino was developed by a group of developers from Italy in 2005, led by Massimo Banzi.</p>
    
    
//     <p className="mt-5 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//     <h2 id='Overview-of-Arduino' className="text-lg   md:mt-[-10px]    md:text-2xl  font-bold ">
//         Overview of Arduino
//     </h2> 
//         <span className='mt-6  md:mt-20'>
//         Arduino is an open-source electronics platform based on simple software and hardware. It's designed to make it easy for anyone to create interactive electronic projects. 
//         The platform consists of a microcontroller and development environment to write code and upload it to the board. 
//         Arduino can be used for a variety of purposes, from creating simple devices like blinking LEDs to complex robots and home automation systems.
        
//         The versatility of Arduino is what makes it so popular with hobbyists, engineers, and educators. Its accessibility and affordability have made it a great tool for learning and prototyping in the world of electronics.
   
//           </span> 
//           </p>
   

   
//     <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//     <h2 id='Arduino-Pins' className="text-lg mt-[-10px] md:text-2xl font-bold ">
//         Understanding Arduino Pins and Their Functions
//     </h2>
//     <span className='mt-10  md:mt-28'>An Arduino board typically has a range of input and output pins that allow it to interact with the external world. Below is a detailed explanation:
//     </span>
//         </p>

//     <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
      
//     <h3 id='Digital-Pins' className="md:text-2xl mt-[-10px] hover:text-blue-600  text-lg mt-6 font-bold">1. Digital Pins</h3>
//         <span>
//         Arduino boards come with a set of digital pins (usually numbered from 0 to 13) that can be used for digital input and output. For example, they can be used to control LEDs, read button presses, or communicate with other devices.
        
//         <br/> - Input Mode: Detects high or low signals (1 or 0).  
//          - Output Mode: Sends high (5V) or low (0V) signals to connected components.
 
//         </span>
//     </p>
    

//     <p className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
      
//     <h3 id='Analog-Pins' className="md:text-2xl mt-[-10px] text-lg mt-6 hover:text-blue-600 font-bold">2. Analog Pins</h3>
//        <span>Analog pins (A0 to A5 on most boards) are used to read varying voltage levels. These are especially useful for sensors like temperature sensors, light sensors, etc. 
//        - Analog Input: Reads values between 0 and 1023, representing 0V to 5V.  
//        - Analog Output (PWM): Generates signals for tasks like motor speed control or dimming LEDs.
//        </span>
//     </p>


   
//     <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//     <h3 id='Power-Pins' className="md:text-2xl mt-[-10px] text-lg mt-6  font-bold">3. Power Pins</h3>
//         - Vin: Input voltage for the Arduino board when using an external power source.  
//         - 5V: Provides regulated 5V output for components.  
//         - 3.3V: Provides regulated 3.3V output for low-voltage components.  
//         - GND: Ground pins, necessary for completing circuits.
//     </p>

   
//     <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//     <h3 id='PWM-Pins' className="md:text-2xl mt-[-10px] text-lg mt-6  font-bold">4. PWM Pins</h3>
//         Pins marked with ~ (tilde symbol) support Pulse Width Modulation (PWM). These are used to simulate analog output for tasks like controlling motor speed or LED brightness.
//     </p>

//     <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
      
//     <h3  id='Communication-Pins' className="md:text-2xl mt-[-10px] text-lg mt-6  font-bold">5. Communication Pins</h3>
//         Arduino supports serial communication through specific pins:
//         - TX (Transmit) and RX (Receive): Used for serial communication.  
//         - I2C Pins (SDA, SCL): Used to connect multiple devices like sensors.  
//         - SPI Pins (MISO, MOSI, SCK): Used for high-speed communication with devices like SD cards or displays.
//     </p>

//     <h2 id='Steps-to-Get-Started-with-Arduino' className="md:text-2xl  text-lg mt-10 hover:text-blue-600 md:mt-10 font-bold">
//         Steps to Get Started with Arduino
//     </h2>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">1. Install the Arduino IDE on your computer.</p>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">2. Connect the Arduino board to your computer via USB cable.</p>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">3. Open the Arduino IDE and select the correct board and port.</p>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">4. Write your code (example: blink an LED).</p>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">5. Upload the code to the Arduino board.</p>
//     <p className="mt-4 max-w-4xl bg-white p-4 rounded shadow-lg">6. Watch the results on the board (e.g., LED blinking).</p>

//     <h3 id='Conclusion' className="md:text-2xl hover:text-blue-600 text-lg mt-8  md:mt-6 font-bold ">Conclusion</h3>
//     <p className="mt-2 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//         After uploading the code, the LED on the Arduino board will blink on and off every second, demonstrating the basic functionality of the Arduino.
//     </p>
//     <div className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
//       <h3 className="text-lg font-semibold mb-2 text-center">More Experiments of Arduino</h3>
//       <div className="flex flex-wrap  gap-4 ">
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`arduino/${'interfacing-led'}`}>Interfacing LED</Link>
//     </p>
//     <p className="bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-rgb-led'}`}>Interfacing an RGB LED</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-7-segment-display'}`}>Interfacing Seven Segement Display</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-oled'}`}>Interfacing OLED</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-pir-sensor'}`}>Interfacing PIR Sensor</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-soil-moisture'}`}>Interfacing Soil Moisture Sensor</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-traffic-light-system'}`}>Interfacing Traffic Light</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-ultrasonic-sensor-with-led'}`}>Interfacing Ultrasonic with LED</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-dc-motor'}`}>Interfacing DC Motor</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-servo-motor'}`}>Interfacing Servo Motor</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-gear-motor'}`}>Interfacing Gear Motor</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-lcd'}`}>Interfacing LCD</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-dht22'}`}>Interfacing DHT22</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-led-with-push-button'}`}>Interfacing LED with Push Button</Link>
//     </p>
//     <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
//        <Link href={`/arduino/${'interfacing-oled-with-push-button'}`}>Interfacing Push Button with OLED</Link>
//     </p>
//         </div>
//     </div>
// </div>

//     </>
//   );
// }




import image1 from '../../../public/images/Arduino_SKT.webp'
import Image from 'next/image';
import Link from "next/link";

export const metadata = {
  title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
  description:
    "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
  alternates: {
    canonical: "https://sarkitshala.com/arduino",
  },
  openGraph: {
    title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
    description:
      "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
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
    description:
      "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
    image: "https://sarkitshala.com/opengraph-image.jpg",
  },
  keywords: [
    "What is Arduino ?",
    "Digital Pins of Arduino",
    "Analog Pins of Arduino",
    "Power Pins of Arduino",
    "PWM Pins of Arduino",
    "Communication Pins of Arduino",
    "Arduino Projects",
    "Arduino Tutorials",
    "Arduino for Beginners",
    "DIY Arduino Projects",
    "IoT Projects on Arduino"
  ]
};

  

export default function Page() {
  return (
    <>
<div className="md:block hidden  p-2 shadow-md rounded-md md:fixed text-center  md:right-1 md:top-24 md:w-[200px] 2xl:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold border  text-lg">Arduino Guide</p>
      <div className="flex flex-col gap-2 mt-2 text-sm md:text-md  ">
        <Link href="#Arduino" className=" max-w-4xl bg-white p-2 border border-black rounded shadow hover:text-blue-600">Arduino</Link>
        <Link href="#Overview-of-Arduino" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Overview of Arduino</Link>
        <Link href="#Arduino-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Understanding Arduino Pins</Link>
        <Link href="#Digital-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Digital Pins</Link>
        <Link href="#Analog-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow max-w-4xl bg-white rounded shadow hover:text-blue-600">Analog Pins</Link>
        <Link href="#Power-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Power Pins</Link>
        <Link href="#PWM-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">PWM Pins</Link>
        <Link href="#Communication-Pins" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Communication Pins</Link>
        <Link href="#Steps-to-Get-Started-with-Arduino" className="max-w-4xl bg-white p-2 rounded border border-black shadow hover:text-blue-600">Steps to Get Started</Link>
        <Link href="#Conclusion" className="max-w-4xl bg-white p-1 border border-black rounded shadow hover:text-blue-600">Conclusion</Link>
      </div>
    </div>
     <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] 2xl:w-[820px] font-serif md:ml-[330px] md:mt-[-730px] 2xl:ml-[430px] md:p-5 md:bg-[#FFF0E5]
 md:bg-cover md:rounded md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
    <h1 id='Arduino' className=" hover:text-blue-500 text-2xl mb-11 text-center md:text-2xl  md:text-3xl text-xl font-bold">
    All about Arduino
    </h1>

    <Image height={500} width={800}  loading="lazy" src={image1} className='mt-6 md:ml-[-2  ] rounded' alt='Arduino Image'/>
    
    <p className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  Arduino was developed by a group of developers from Italy in 2005, led by Massimo Banzi.</p>
    
    
    <p className="mt-4 max-w-4xl bg-white border border-black p-6 rounded shadow-lg ">
    <h2 id='Overview-of-Arduino' className="text-lg   md:mt-[-10px] mb-2   md:text-2xl  font-bold ">
        Overview of Arduino
    </h2> 
        <span className='mt-6 md:mt-20'>
        Arduino is an open-source electronics platform based on simple software and hardware. It's designed to make it easy for anyone to create interactive electronic projects. 
        The platform consists of a microcontroller and development environment to write code and upload it to the board. 
        Arduino can be used for a variety of purposes, from creating simple devices like blinking LEDs to complex robots and home automation systems.
        
        The versatility of Arduino is what makes it so popular with hobbyists, engineers, and educators. Its accessibility and affordability have made it a great tool for learning and prototyping in the world of electronics.
   
          </span> 
          </p>
   

   
    <p className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
    <h2 id='Arduino-Pins' className="text-lg mb-2 mt-[-10px] md:text-2xl font-bold ">
        Understanding Arduino Pins and Their Functions
    </h2>
    <span className='mt-10  md:mt-28'>An Arduino board typically has a range of input and output pins that allow it to interact with the external world. Below is a detailed explanation:
    </span>
        </p>

    <p className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      
    <h3 id='Digital-Pins' className="md:text-2xl mb-2 mt-[-10px] hover:text-blue-600  text-lg mt-6 font-bold">1. Digital Pins</h3>
        <span>
        Arduino boards come with a set of digital pins (usually numbered from 0 to 13) that can be used for digital input and output. For example, they can be used to control LEDs, read button presses, or communicate with other devices.
        
        <br/> - Input Mode: Detects high or low signals (1 or 0).  
         - Output Mode: Sends high (5V) or low (0V) signals to connected components.
 
        </span>
    </p>
    

    <p className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      
    <h3 id='Analog-Pins' className="md:text-2xl mb-2 mt-[-10px] text-lg mt-6 hover:text-blue-600 font-bold">2. Analog Pins</h3>
       <span>Analog pins (A0 to A5 on most boards) are used to read varying voltage levels. These are especially useful for sensors like temperature sensors, light sensors, etc.<br/>
       - Analog Input: Reads values between 0 and 1023, representing 0V to 5V.<br/>
       - Analog Output (PWM): Generates signals for tasks like motor speed control or dimming LEDs.
       </span>
    </p>


   
    <p className="mt-4 max-w-4xl bg-white p-6 rounded border border-black shadow-lg">
    <h3 id='Power-Pins' className="md:text-2xl mt-[-10px] mb-2 text-lg mt-6  font-bold">3. Power Pins</h3>
        - Vin: Input voltage for the Arduino board when using an external power source.<br/>
        - 5V: Provides regulated 5V output for components.<br/>
        - 3.3V: Provides regulated 3.3V output for low-voltage components.<br/>  
        - GND: Ground pins, necessary for completing circuits.<br/>
    </p>

   
    <p className="mt-4 max-w-4xl bg-white p-6 rounded border border-black shadow-lg">
    <h3 id='PWM-Pins' className="md:text-2xl mt-[-10px] text-lg mb-2 font-bold">4. PWM Pins</h3>
        Pins marked with ~ (tilde symbol) support Pulse Width Modulation (PWM). These are used to simulate analog output for tasks like controlling motor speed or LED brightness.
    </p>

    <p className="mt-4 max-w-4xl bg-white p-6 rounded border border-black shadow-lg">
      
    <h3  id='Communication-Pins' className="md:text-2xl mt-[-10px] text-lg mb-2 font-bold">5. Communication Pins</h3>
        Arduino supports serial communication through specific pins:<br/>
        - TX (Transmit) and RX (Receive): Used for serial communication.<br/>  
        - I2C Pins (SDA, SCL): Used to connect multiple devices like sensors.<br/>  
        - SPI Pins (MISO, MOSI, SCK): Used for high-speed communication with devices like SD cards or displays.
    </p>

    
<div className="mt-4 max-w-4xl bg-white p-6 rounded border border-black shadow-lg">
<h2 id="Steps-to-Get-Started-with-Arduino" className="md:text-2xl text-lg mb-2 mt-0 hover:text-blue-600 md:mt-2 font-bold">
  Steps to Get Started with Arduino
</h2>
  <p>1. Install the Arduino IDE on your computer.</p>
  <p>2. Connect the Arduino board to your computer via USB cable.</p>
  <p>3. Open the Arduino IDE and select the correct board and port.</p>
  <p>4. Write your code (example: blink an LED).</p>
  <p>5. Upload the code to the Arduino board.</p>
  <p>6. Watch the results on the board (e.g., LED blinking).</p>
</div>

    
    <p className="mt-4 max-w-4xl bg-white p-6 rounded border border-black shadow-lg">
    <h3 id='Conclusion' className="md:text-2xl hover:text-blue-600 mb-2 text-lg font-bold ">Conclusion</h3>
        After uploading the code, the LED on the Arduino board will blink on and off every second, demonstrating the basic functionality of the Arduino.
    </p>
    <div className="mt-4 max-w-6xl bg-white p-6 border border-black rounded  shadow-lg">
      <h3 className="text-lg font-semibold mb-4 text-center">More Experiments of Arduino</h3>
      <div className="flex flex-wrap  gap-4 ">
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`arduino/${'interfacing-led'}`}>Control an LED with Arduino (Step-by-Step Guide)</Link>
    </p>
    <p className="bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-rgb-led'}`}>Interfacing RGB LED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-7-segment-display'}`}>Interfacing 7-Segement Display</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-oled'}`}>Interfacing OLED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-pir-sensor'}`}>Interfacing PIR Sensor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-soil-moisture'}`}>Interfacing Soil Moisture Sensor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-traffic-light-system'}`}>Interfacing LED's For Traffic Light</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-ultrasonic-sensor-with-led'}`}>Interfacing Ultrasonic with LED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-dc-motor'}`}>Interfacing DC Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-servo-motor'}`}>Interfacing Servo Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-gear-motor'}`}>Interfacing Gear Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-lcd'}`}>Interfacing LCD</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-dht22'}`}>Interfacing DHT22</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-led-with-push-button'}`}>Interfacing LED with Push Button</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-oled-with-push-button'}`}>Interfacing Push Button with OLED</Link>
    </p>
        </div>
    </div>
</div>

    </>
  );
}
