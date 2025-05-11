'use client'

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import image1 from '../../../public/AllImages/jetson_Sarkitshala.webp';
import image2 from '../../../public/AllImages/image1.webp';
import image3 from '../../../public/AllImages/image11.webp';
import image4 from '../../../public/AllImages/image7.webp';
import image6 from '../../../public/AllImages/image9.webp';
import image7 from '../../../public/AllImages/image6.webp';
import image10 from '../../../public/AllImages/image9.webp';
import image11 from '../../../public/AllImages/RGBLED.webp';
import image13 from '../../../public/AllImages/image13.webp';

const RecentPosts = (props) => {
  const listRef = useRef(null);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [scrollInterval, setScrollInterval] = useState(null);

  let arr = [
    {
      id: 1,
      slug: "/jetson",
      title: "NVIDIA Jetson Nano Developer Kit",
      image: image1,
    },
    {
      id: 2,
      slug: "arduino/interfacing-led",
      title: "Control an LED with Arduino",
      image: image2,
    },
    {
      id: 3,
      slug: "arduino/interfacing-rgb-led",
      title: "Interfacing RGB LED with Arduino",
      image: image11
    },
    {
      id: 4,
      slug: "arduino/interfacing-7-segment-display",
      title: "Interfacing 7-Segement Display",
      image: image13,
    },
    {
      id: 5,
      slug: "arduino/interfacing-dc-motor",
      title: "Interfacing DC Motor",
      image: image3,
    },
    {
      id: 6,
      slug: "arduino/Interfacing OLED",
      title: "Interfacing OLED",
      image: image4,
    },
    {
      id: 7,
      slug: "arduino/interfacing-pir-sensor",
      title: "Interfacing PIR Sensor",
      image: image6,
    },
    {
      id: 8,
      slug: "arduino/interfacing-dht11-sensor",
      title: "Interfacing DHT11 Sensor",
      image: image7,
    },
  ];

  useEffect(() => {
    const list = listRef.current;
    if (!list || window.innerWidth < 768) return;

    let scrollAmount = 0;
    const maxScroll = list.scrollHeight - list.clientHeight;

    const scrollList = () => {
      if (!isUserInteracting) {
        scrollAmount += 1;
        if (scrollAmount >= maxScroll) {
          scrollAmount = 0;
        }
        list.scrollTo({
          top: scrollAmount,
          behavior: 'smooth',
        });
      }
    };

    const interval = setInterval(scrollList, 100);
    setScrollInterval(interval);

    return () => clearInterval(interval);
  }, [isUserInteracting]);

  const handleUserInteractionStart = () => {
    setIsUserInteracting(true);
  };

  const handleUserInteractionEnd = () => {
    setIsUserInteracting(false);
  };

  return (
  <div className="w-full max-w-md md:w-[360px] h-[500px] md:h-[450px] 2xl:h-[520px] bg-white overflow-hidden shadow-md md:shadow-lg rounded-md mt-6 mx-auto md:mx-0 relative md:absolute md:top-[85px] xl:right-[100px] md:right-[10px]">
    <div className="text-start font-bold text-lg md:text-2xl text-white bg-gradient-to-r from-indigo-500 to-gray-900 rounded-t-md px-4 py-3 sticky top-0 z-10">
      <h1>RECENT POST</h1>
    </div>

    <ul
      className="h-full overflow-y-auto md:overflow-hidden text-sm scrollbar-hide px-2 py-1"
      ref={listRef}
      onMouseEnter={handleUserInteractionStart}
      onMouseLeave={handleUserInteractionEnd}
      onTouchStart={handleUserInteractionStart}
      onTouchEnd={handleUserInteractionEnd}
    >
      {arr.map((image, index) => (
        <Link key={image.id} href={`/${image.slug}`}>
          <li
            className={`bg-gray-50 rounded-md shadow-sm active:scale-[0.98] transition-transform duration-150 hover:bg-gray-200 p-3 flex items-center gap-3 ${
              index === 0 ? 'mt-3' : 'mt-3'
            }`}
          >
            <Image
              src={image.image}
              alt={image.title}
              width={60}
              height={60}
              className="rounded-md object-cover w-[60px] h-[60px] md:w-[70px] md:h-[70px]"
            />
            <p className="text-blue-700 font-medium text-sm md:text-base leading-snug">
              {image.title}
            </p>
          </li>
        </Link>
      ))}
    </ul>
  </div>
);

};

export default RecentPosts;
