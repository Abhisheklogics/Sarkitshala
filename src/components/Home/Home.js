'use client';

import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import img1 from '../../../public/images/ArdTech.webp';
import img2 from '../../../public/images/ESPTech.webp';
import img3 from '../../../public/images/raspTech.webp';
import img4 from '../../../public/images/jetsonTech.webp';
import img5 from '../../../public/images/droneTech.webp';
import img6 from '../../../public/images/STM32.webp';

import MyBook from "../ArdBook";

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
      <div className="w-full h-full overflow-x-hidden">
        <SimpleSlider />
        <RecentPosts />

        {/* LATEST TECHNOLOGIES HEADER */}
        <div className="bg-[#ec407a] py-10 mt-20 px-4 sm:px-6 md:px-12 lg:px-16">
          <h1 className="p-0 sm:p-4 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light bg-white w-fit mx-auto border-r-2 border-white overflow-hidden whitespace-nowrap relative">
            <span className="inline-block animate-typing overflow-hidden whitespace-nowrap border-r-2 border-white pr-8">
              LATEST TECH
            </span>
          </h1>
{/* TECHNOLOGY IMAGE GRID */}
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 mt-8 justify-center">
  {/* Arduino */}
  <div className="">
    <Link href="/arduino">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img1}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="Arduino"
        />
      </div>
    </Link>
  </div>

  {/* Raspberry Pi */}
  <div className="">
    <Link href="/esp">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img2}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="esp"
        />
      </div>
    </Link>
  </div>

  {/* ESP */}
  <div className="">
    <Link href="/raspberry">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img3}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="raspberry"
        />
      </div>
    </Link>
  </div>

  {/* Jetson */}
  <div className="">
    <Link href="/jetson">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img4}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="Jetson"
        />
      </div>
    </Link>
  </div>

  {/* Arduino again */}
  <div className="">
    <Link href="/drone">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img5}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="Drone"
        />
      </div>
    </Link>
  </div>

  {/* Jetson again */}
  <div className="">
    <Link href="/stm32">
      <div className="h-[120px] w-[140px] sm:h-[180px] sm:w-[220px] md:h-[220px] md:w-[260px] lg:h-[260px] lg:w-[280px] border border-black shadow-xl hover:shadow-2xl transition-shadow bg-[#FFF0E5] rounded-md">
        <Image
          src={img6}
          height={300}
          width={300}
          className="object-cover h-full w-full rounded-md"
          alt="Jetson 2"
        />
      </div>
    </Link>
  </div>
  

            
          </div>
        </div>
        <MyBook/>

        {/* ABOUT SECTIONS (ACCORDIONS) */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-16 mt-10 space-y-6">
          {[
            {
              title: "ARDUINO",
              color: "bg-[#e91e63]",
              content:
                "Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping.",
            },
            {
              title: "ESP32",
              color: "bg-[#7b1fa2]",
              content:
                "ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency.",
            },
            {
              title: "NVIDIA JETSON NANO",
              color: "bg-[#40ff2b]",
              content:
                "NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing.",
            },
            {
              title: "RASPBERRY PI",
              color: "bg-[#3d5afe]",
              content:
                "Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux.",
            },
            {
              title: "UAV",
              color: "bg-[#FF6347]",
              content:
                "A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`${item.color} text-white p-4 sm:p-6 rounded-lg shadow-lg`}
            >
              <input
                type="checkbox"
                id={`toggle-${index}`}
                className="peer hidden"
              />
              <label
                htmlFor={`toggle-${index}`}
                className="block text-lg sm:text-2xl font-semibold text-center cursor-pointer hover:scale-105 transition-transform"
              >
                {item.title}
                <span className="ml-2 inline-block transition-transform duration-300 peer-checked:rotate-180">
                  ▼
                </span>
              </label>
              <div className="hidden peer-checked:block mt-4 p-2 sm:p-4 text-sm md:text-lg sm:text-base  text-white rounded-lg transition-all duration-500">
                <p className="text-justify font-mono hover:text-gray-100 font-medium leading-relaxed">
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Carousel />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home1;
