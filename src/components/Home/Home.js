
// 'use client'

// import React, { useState,useEffect} from "react";

// import Aos from "aos";
// import 'aos/dist/aos.css';




// import Image from "next/image";
// import img1 from '../../../public/images/ArdTech.webp'
// import img2 from '../../../public/images/ESPTech.webp'
// import img3 from '../../../public/images/raspTech.webp'
// import img4 from '../../../public/images/jetsonTech.webp'
// import img5 from '../../../public/images/droneTech.webp'
// import img6 from '../../../public/images/STM32.webp'


// import dynamic from "next/dynamic";
// const SimpleSlider =dynamic(()=>import('../slider/Slider'))
// const RecentPosts=dynamic(()=>import('../recentPost/Recent'))
// const Carousel =dynamic(()=>import('../Techslider/Techslider'))
// const Footer=dynamic(()=>import('../Footer/Footer'))


//   const Home1 =()=> {
//     const [isMobile, setIsMobile] = useState(false); 
 
 
//   useEffect(() => {
   
  
    
//     Aos.init({ duration: 2000 });

    
//     const checkMobile = () => {
//       setIsMobile(window.innerWidth <= 368); 
//     };

  
//     window.addEventListener('resize', checkMobile);
    
    
//     checkMobile();

//     return () => {
//       window.removeEventListener('resize', checkMobile);
//     };
//   }, []);
 
//   return (
//     <>
     
//         <div className="xs:h-full
//         xl:h-full">
       
//      <SimpleSlider />
        
//            <RecentPosts/>


// <div className="md:grid  md:grid-cols-3 md:gap-[-20px] bg-[#580C82] grid grid-cols-2  mt-32 ml:20 md:ml-0 md:mt-24">
// <div className="mt-4 font-semibold"><h1 className=" p-4  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 
//              text-2xl text-white  bg-white md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-md:white md:pr-5 
//             md:text-3xl md:text-white md:font-light md:ml-0">LATEST TECHNOLOGIES</h1></div>

// {/* Arduino  */}
// <div className="md:ml-[-375px] 2xl:ml-[-428px]  md:mt-40 md:h-[300px] md:w-[300px] h-[100px] w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] ">
// <Image src={img1} height={300} width={300}/>
// </div>

// {/* Esp32 */}
// <div className="md:ml-[-380px] 2xl:ml-[-428px] md:mt-40 md:h-[300px] md:w-[300px] h-[100px] w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
// <Image src={img2} height={300} width={300}/>
// </div>

// <div className="md:ml-[970px] 2xl:ml-[1094px]  md:mt-[-300px] md:h-[300px] md:w-[300px] h-[100px] w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
// <Image src={img3} height={300} width={300}/>
// </div>

// {/* Jetson-Nano */}
// <div className="md:ml-20 md:mt-20 md:h-[300px] md:w-[300px] h-[100px]  mt-20  w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
// <Image src={img4} height={300} width={300}/>
// </div>
// {/* Drone */}
// <div className="md:ml-20 md:mt-20 md:h-[300px] md:w-[300px] h-[100px]  mt-20  w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
// <Image src={img5} height={300} width={300}/>
// </div>
// {/* STM32 */}
// <div className="md:ml-20 md:mt-[-300px] mb-10 md:h-[300px] md:w-[300px] h-[100px]  mt-20  w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
// <Image src={img6} height={300} width={300}/>
// </div>
// </div>

// {/* About Arduino */}
// <div className="bg-[#e91e63] text-gray-900 md:mt-1 p-6 rounded-lg shadow-lg">
//     {/* Hidden checkbox to control collapse */}
//     <input type="checkbox" id="toggle-arduino" className="peer hidden" />

//     {/* Clickable Header */}
//     <label 
//         htmlFor="toggle-arduino" 
//         className="block text-4xl font-serif font-semibold text-white text-center cursor-pointer transition-transform duration-300 hover:scale-105"
//     >
//         ARDUINO  
//         <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
//     </label>

//     {/* Collapsible Content */}
//     <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500">
//         <p className="text-lg md:text-xl text-justify font-mono hover:text-white font-semibold leading-relaxed">
//             Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping. 🚀
//         </p>
//     </div>
// </div>


// {/* About ESP32 */}
// <div className="bg-[#7b1fa2] text-white p-6 rounded-lg shadow-lg">
//     {/* Hidden checkbox to control collapse */}
//     <input type="checkbox" id="toggle-esp32" className="peer hidden" />

//     {/* Clickable Header */}
//     <label htmlFor="toggle-esp32" className="block text-4xl font-serif font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105">
//     ESP32  <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
//     </label>

//     {/* Collapsible Content */}
//     <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500">
//         <p className="text-lg md:text-xl text-justify font-mono hover:text-white font-semibold leading-relaxed">
//             ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency. With support for Arduino IDE, MicroPython, and ESP-IDF, it’s widely used for wireless communication, sensor networks, and real-time applications.
//         </p>
//     </div>
// </div>


// {/* About jetson */}
// <div className="bg-[#40ff2b] text-white p-6 rounded-lg shadow-lg">
//     {/* Hidden checkbox to control collapse */}
//     <input type="checkbox" id="toggle-jetson" className="peer hidden" />

//     {/* Clickable Header */}
//     <label htmlFor="toggle-jetson" className="block text-4xl font-serif font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105">
//     NVIDIA JETSON NANO<span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
//     </label>

//     {/* Collapsible Content */}
//     <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500">
//         <p className="text-lg md:text-xl text-justify font-mono hover:text-white font-semibold leading-relaxed">
//         NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing. With multiple GPIOs, USB, CSI camera interfaces, and compatibility with TensorFlow, PyTorch, and CUDA, it enables real-time AI inference for autonomous machines, drones, and smart devices.        </p>
//     </div>
// </div>




// {/* About Rasp Pi */}
// <div className="bg-[#3d5afe] text-white p-6 rounded-lg shadow-lg">
//     {/* Hidden checkbox to control collapse */}
//     <input type="checkbox" id="toggle-pi" className="peer hidden" />

//     {/* Clickable Header */}
//     <label 
//         htmlFor="toggle-pi" 
//         className="block text-4xl font-serif font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105">
//         RASPBERRY PI  
//         <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
//     </label>

//     {/* Collapsible Content */}
//     <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500">
//         <p className="text-lg md:text-xl font-mono hover:text-white text-justify font-semibold leading-relaxed">
//             Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux. With built-in WiFi, Bluetooth, and expandable storage via microSD, it is widely used in robotics, AI, home automation, and embedded systems.
//         </p>
//     </div>
// </div>


// {/* About Drone */}
// <div className="bg-[#FF6347] text-white p-6 rounded-lg shadow-lg">
//     {/* Hidden checkbox to control collapse */}
//     <input type="checkbox" id="toggle-uav" className="peer hidden" />

//     {/* Clickable Header */}
//     <label 
//         htmlFor="toggle-uav" 
//         className="block text-4xl font-serif font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105">
//        UAV 
//         <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
//     </label>

//     {/* Collapsible Content */}
//     <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500">
//         <p className="text-lg md:text-xl font-mono hover:text-white text-justify font-semibold leading-relaxed">
//         A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission.
//         UAVs are widely used in surveillance, agriculture, mapping, delivery, and defense, leveraging advanced automation and AI for efficient operations.</p>
//     </div>
// </div>













// {/* <div data-aos={isMobile ? undefined :'fade-right'} className={` bg-gradient-to-r from-indigo-300 to-black rounded mt-24 col-span-3 w-[350px]  p-3 text-black ml-6  md:ml-[480px]  2xl:ml-[560px]
//             xl:rounded xl:mt-20 bg-green-700 xl:w-[450px] justify-center mx-auto relative text-center xl:p-3 xl:text-black`} >
//             <div className=""><h1 className="  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 
//              text-2xl text-white font-light 
//             md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-md:white md:pr-5 
//             md:text-3xl md:text-white md:font-light md:ml-10 
//             ">LATEST TECHNOLOGIES</h1></div>
//           </div> */}
          
         

//           <Carousel/>
          
//         </div>
//         <Footer/>
//     </>
//   );
// }
//  export default Home1

'use client';

import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import dynamic from "next/dynamic";

import img1 from '../../../public/images/ArdTech.webp';
import img2 from '../../../public/images/ESPTech.webp';
import img3 from '../../../public/images/raspTech.webp';
import img4 from '../../../public/images/jetsonTech.webp';
import img5 from '../../../public/images/droneTech.webp';
import img6 from '../../../public/images/STM32.webp';

const SimpleSlider = dynamic(() => import('../slider/Slider'));
const RecentPosts = dynamic(() => import('../recentPost/Recent'));
const Carousel = dynamic(() => import('../Techslider/Techslider'));
const Footer = dynamic(() => import('../Footer/Footer'));

const Home1 = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <>
      <div className="w-full h-full">
        <SimpleSlider />
        <RecentPosts />

        <div className="bg-[#e91e63] py-10 mt-20 px-4 md:px-16">
        <h1 className="p-4 text-xl sm:text-2xl md:text-2xl lg:text-4xl xl:text-5xl  font-light bg-white w-fit mx-auto border-r-2 border-white overflow-hidden whitespace-nowrap relative">
  <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white pr-2">
    LATEST TECHNOLOGIES
  </span>
</h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 justify-center">
            {[img1, img2, img3, img4, img5, img6].map((img, index) => (
              <div key={index} className="flex justify-center mt-2">
                <div className="h-[120px] w-[160px] sm:h-[200px] sm:w-[250px] md:h-[300px] md:w-[300px] border border-black shadow-xl hover:shadow-lg hover:shadow-black bg-[#FFF0E5]">
                  <Image src={img} height={300} width={300} className="object-cover " alt="Technology Image" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* About Sections */}
        {[
          { title: "ARDUINO", color: "bg-[#e91e63]", content: "Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping." },
          { title: "ESP32", color: "bg-[#7b1fa2]", content: "ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency." },
          { title: "NVIDIA JETSON NANO", color: "bg-[#40ff2b]", content: "NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing." },
          { title: "RASPBERRY PI", color: "bg-[#3d5afe]", content: "Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux." },
          { title: "UAV", color: "bg-[#FF6347]", content: "A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission." }
        ].map((item, index) => (
          <div key={index} className={`${item.color} text-white p-6 rounded-lg shadow-lg mx-4 my-4 md:mx-16`}> 
            <input type="checkbox" id={`toggle-${index}`} className="peer hidden" />
            <label htmlFor={`toggle-${index}`} className="block text-2xl md:text-3xl font-semibold text-center cursor-pointer transition-transform duration-300 hover:scale-105">
              {item.title} <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">▼</span>
            </label>
            <div className="hidden peer-checked:block mt-4 p-4 text-black transition-all duration-500 text-sm md:text-base">
              <p className="text-justify font-mono hover:text-white font-semibold leading-relaxed">{item.content}</p>
            </div>
          </div>
        ))}

        <Carousel />
      </div>
      <Footer />
    </>
  );
};

export default Home1;
