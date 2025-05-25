'use client';

import React, { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import AdBanner from '@/components/Banner/AdBanner';
import img1 from '../../../public/images/ArdTech.webp';
import img2 from '../../../public/images/ESPTech.webp';
import img3 from '../../../public/images/raspTech.webp';
import img4 from '../../../public/images/jetsonTech.webp';
import img5 from '../../../public/images/droneTech.webp';
import img6 from '../../../public/images/STM32.webp';

import MyBook from '../ArdBook';

const SimpleSlider = dynamic(() => import('../slider/Slider'));
const RecentPosts = dynamic(() => import('../recentPost/Recent'));
const Carousel = dynamic(() => import('../Techslider/Techslider'));
const Footer = dynamic(() => import('../Footer/Footer'));

const techItems = [
  { href: '/arduino', img: img1, alt: 'Arduino' },
  { href: '/esp', img: img2, alt: 'ESP32' },
  { href: '/raspberry', img: img3, alt: 'Raspberry Pi' },
  { href: '/jetson', img: img4, alt: 'Jetson Nano' },
  { href: '/drone', img: img5, alt: 'Drone' },
  { href: '/stm32', img: img6, alt: 'STM32' },
];

const accordionItems = [
  {
    title: 'ARDUINO',
    color: '#e91e63',
    content:
      'Arduino is an open-source microcontroller platform designed for building electronics projects. It features digital and analog I/O pins, supports PWM, serial communication (SPI, I2C, UART), and runs on C/C++ via the Arduino IDE. With its easy-to-use hardware and vast community support, Arduino is widely used in IoT, automation, robotics, and prototyping.',
  },
  {
    title: 'ESP32',
    color: '#7b1fa2',
    content:
      'ESP32 is a powerful microcontroller with built-in WiFi and Bluetooth, making it ideal for IoT, automation, and smart devices. It features dual-core processing, multiple GPIOs, ADC, DAC, PWM, SPI, I2C, UART, and low-power modes for energy efficiency.',
  },
  {
    title: 'NVIDIA JETSON NANO',
    color: '#40ff2b',
    content:
      'NVIDIA Jetson Nano is a compact AI computing platform designed for edge AI, robotics, and IoT applications. It features a quad-core ARM Cortex-A57 CPU, a 128-core Maxwell GPU, and supports deep learning, computer vision, and parallel processing.',
  },
  {
    title: 'RASPBERRY PI',
    color: '#3d5afe',
    content:
      'Raspberry Pi is a compact, single-board computer designed for programming, IoT, and automation. It features a powerful processor, GPIO pins for hardware interfacing, multiple USB and HDMI ports, and supports operating systems like Raspberry Pi OS and Linux.',
  },
  {
    title: 'UAV',
    color: '#FF6347',
    content:
      'A UAV (Unmanned Aerial Vehicle) is an aircraft that operates without a human pilot onboard, controlled remotely or autonomously via onboard systems. It features sensors, GPS, flight controllers, and communication modules for navigation and data transmission.',
  },
];

const TechCard = ({ href, img, alt }) => (
  <Link href={href} className="group transform transition duration-300 hover:scale-[1.04]">
    <div className="relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl border border-gray-200 bg-white">
      <Image
        src={img}
        alt={alt}
        className="w-full h-44 md:h-56 lg:h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        priority
      />
      <div className="absolute bottom-0 w-full bg-black/60 text-white text-center py-2 font-semibold text-base">
        {alt}
      </div>
    </div>
  </Link>
);

const Home1 = () => {
  useEffect(() => {
    Aos.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="w-full font-sans md:bg-[#FFF0E5] text-gray-900 overflow-x-hidden">
        {/* Hero Slider */}
        <SimpleSlider />

        {/* Recent Posts */}
        <section className=" px-4 sm:px-6 md:px-12 lg:px-20 md:bg-[#FFF0E5]">
          <RecentPosts />
        </section>
 <AdBanner />
        {/* Latest Tech */}
        <section className="py-16  px-4 sm:px-6 md:px-12 lg:px-20 md:bg-[#FFF0E5] text-center">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-800 mb-12 tracking-tight animate-pulse">
            LATEST TECH
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {techItems.map((item, i) => (
              <TechCard key={i} {...item} />
            ))}
          </div>
        </section>

        {/* MyBook */}
        <section className="py-16 px-4 sm:px-6 md:px-12 lg:px-20 md:bg-[#FFF0E5]">
          <MyBook />
        </section>
 
        {/* About Tech Section */}
        <section className="py-12 px-4 sm:px-6 md:px-12 lg:px-20 md:bg-[#FFF0E5]">
          <h2 className="text-4xl sm:text-5xl font-bold text-center text-gray-800 mb-12">
            About Our Tech
          </h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {accordionItems.map((item, i) => (
              <div
                key={i}
                className="bg-white border-l-8 rounded-xl shadow-sm overflow-hidden transition-all duration-300"
                style={{ borderColor: item.color }}
              >
                <input type="checkbox" id={`acc-${i}`} className="peer hidden" />
                <label
                  htmlFor={`acc-${i}`}
                  className="flex justify-between items-center px-6 py-4 cursor-pointer font-semibold text-xl text-gray-800 hover:bg-gray-100"
                >
                  {item.title}
                  <span className="transition-transform peer-checked:rotate-180">▼</span>
                </label>
                <div className="max-h-0 peer-checked:max-h-[300px] overflow-hidden px-6 pb-4 text-gray-700 text-base transition-all duration-500">
                  <p className="text-justify leading-relaxed">{item.content}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tech Carousel */}
        <section className="px-4 sm:px-6 md:px-12 lg:px-20 md:bg-[#FFF0E5]">
          <Carousel />
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home1;
