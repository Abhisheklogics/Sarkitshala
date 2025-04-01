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
