'use client';

import { motion } from 'motion/react';
import Link from 'next/link';
import Image from 'next/image';
import { ImagesSlider } from '../ui/images-slider';

import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { LampContainer } from '../ui/lamp';
import Footer from '../Footer/Footer';
import MyBook from '../ArdBook';
import Search from "../Search/Search";
import RecentPosts from '../recentPost/Recent';

import { Spotlight } from '../ui/spotlight-new';
import { BackgroundBeamsWithCollision } from '../ui/background-beams-with-collision';
import image1 from '../../../public/images/Arduino_SKT.webp';
import image2 from '../../../public/images/jetson_Sarkitshala.webp';
import image4 from '../../../public/images/Bristo.webp';
import image5 from '../../../public/images/esp.webp';
import image6 from '../../../public/images/Pi_Sarkitshala.webp';
import image7 from '../../../public/images/hr.jpg';
import image8 from '../../../public/images/Drone.webp';

import img1 from '../../../public/images/ArdTech.webp';
import img2 from '../../../public/images/ESPTech.webp';
import img3 from '../../../public/images/raspTech.webp';
import img4 from '../../../public/images/jetsonTech.webp';
import img5 from '../../../public/images/droneTech.webp';



const images = [
  { src: image1.src, href: '/arduino' },
  { src: image2.src, href: '/jetson' },
  { src: image4.src, href: '/arduino' },
  { src: image5.src, href: '/esp' },
  { src: image6.src, href: '/raspberry' },
  { src: image7.src, href: '/esp/dht11' },
  { src: image8.src, href: '/drone' },
];

const exploreTechnologies = [
  {
    src: img1.src,
    href: '/arduino',
    title: 'Arduino',
    desc: 'Open-source hardware for embedded electronics.',
  },
  {
    src: img2.src,
    href: '/esp',
    title: 'ESP32',
    desc: 'WiFi+Bluetooth-enabled MCU for IoT projects.',
  },
  {
    src: img3.src,
    href: '/raspberry',
    title: 'Raspberry Pi',
    desc: 'A tiny computer for learning, coding, and making.',
  },
  {
    src: img4.src,
    href: '/jetson',
    title: 'Jetson Nano',
    desc: 'AI computing at the edge with GPU acceleration.',
  },
  {
    src: img5.src,
    href: '/drone',
    title: 'Drone Tech',
    desc: 'Fly with embedded tech and remote sensing.',
  },
];


const testimonials = [
  {
    quote:
      "Artificial Intelligence is likely to be either the best or worst thing to happen to humanity.",
    name: "Stephen Hawking",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "The Internet of Things is not a concept; it is a network, the true technology-enabled Network of all networks.",
    name: "Edewede Oriwoh",
    title: "Cybersecurity & IoT Researcher",
  },
  {
    quote:
      "Technology is best when it brings people together.",
    name: "Matt Mullenweg",
    title: "Founder of WordPress",
  },
  {
    quote:
      "It has become appallingly obvious that our technology has exceeded our humanity.",
    name: "Albert Einstein",
    title: "Theoretical Physicist",
  },
  {
    quote:
      "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.",
    name: "Bill Gates",
    title: "Co-founder of Microsoft",
  },
  {
    quote:
      "We are stuck with technology when what we really want is just stuff that works.",
    name: "Douglas Adams",
    title: "Author & Futurist",
  },
  {
    quote:
      "The real problem is not whether machines think but whether men do.",
    name: "B.F. Skinner",
    title: "Psychologist & Behaviorist",
  },
  {
    quote:
      "The next big thing is the one that makes the last big thing usable.",
    name: "Blake Ross",
    title: "Co-creator of Mozilla Firefox",
  },
  {
    quote:
      "IoT is transforming the everyday physical objects that surround us into an ecosystem of information that will enrich our lives.",
    name: "John Chambers",
    title: "Former CEO, Cisco Systems",
  },
  {
    quote:
      "The science of today is the technology of tomorrow.",
    name: "Edward Teller",
    title: "Physicist & Father of the Hydrogen Bomb",
  },
];


export function HomePage() {
  return (
    <main className="text-gray-100">
      {/* Hero Section */}
      <BackgroundBeamsWithCollision>
        <Spotlight />
        <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 lg:px-8">
          <div className="mt-20  lg:mt-24 md:p-0 p-2">
            <h1 className="md:font-extrabold text-white text-3xl text-3xl md:text-6xl leading-tight">
              Welcome to{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Sarkitshala
              </span>
            </h1>
            <h2 className="mt-4 font-semibold text-white text-xl sm:text-3xl md:text-4xl">
              The Best Learning Platform for{" "}
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                IoT Learners
              </span>
            </h2>
             <div className="ml-4 mt-2">
                        <Search />
                      </div>
            <p className="mt-4 text-gray-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto">
              On this platform, you’ll find the best documentation about
              technologies, tutorials, and projects to boost your IoT journey.
            </p>
            
          </div>

          {/* Category Buttons */}
          <div className="hidden md:flex flex-wrap justify-center gap-4 mt-10">
            {[
              { name: "Arduino", href: "/arduino" },
              { name: "Raspberry", href: "/raspberry" },
              { name: "ESP32", href: "/esp" },
              { name: "Protocols", href: "/iotProtocols" },
              { name: "Jetson", href: "/jetson" },
            ].map((item, idx) => (
              <Link key={idx} href={item.href}>
                <button className="bg-gray-800/70 backdrop-blur-md px-5 py-2 rounded-xl shadow-lg text-lg font-semibold transition-all duration-300 hover:bg-black hover:scale-105">
                  <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {item.name}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </BackgroundBeamsWithCollision>

      {/* Image Slider + Recent Posts */}
      <section className="relative md:mt-20 mt-4 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:mt-6 mt-4 md:grid-cols-2 gap-10 md:gap-45">
          <div className="sm:w-[47rem] rounded-xl overflow-hidden shadow-md">
            <ImagesSlider
              className="h-[13rem] md:h-[26rem] rounded-xl"
              images={images.map((img) => img.src)}
            >
              {images.map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -80 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="z-50 flex justify-center items-center h-full w-full"
                >
                  <Link href={img.href} className="block w-full h-full" />
                </motion.div>
              ))}
            </ImagesSlider>
          </div>
          <div className="w-full rounded-xl overflow-hidden">
            <RecentPosts />
          </div>
        </div>
      </section>

      {/* Explore Technologies */}
      <section className="relative mt-24 px-4 max-w-7xl mx-auto">
        <LampContainer />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {exploreTechnologies.map((tech, index) => (
            <Link
              key={index}
              href={tech.href}
              className="group bg-[#141a33] rounded-2xl p-4 border border-gray-700 shadow-md hover:shadow-xl transition-all"
            >
              <div className="overflow-hidden rounded-xl mb-3">
                <Image
                  src={tech.src}
                  alt={tech.title}
                  width={300}
                  height={200}
                  className="w-full h-44 sm:h-48 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-semibold">{tech.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{tech.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Arduino Book */}
      <section className="mt-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-blue-400 text-3xl font-semibold text-center mb-6">
          Arduino Book
        </h2>
        <MyBook />
      </section>

      {/* Testimonials */}
      <section className="mt-20 px-4 max-w-7xl mx-auto py-12">
        <h2 className="text-blue-400 font-bold text-3xl sm:text-4xl mb-6 text-center">
          Latest Tech Insights
        </h2>
        <div className="w-full max-w-6xl mx-auto">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-20 border-t border-gray-800 py-10">
        <Footer />
      </footer>
    </main>
  );
}
