import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Image from "next/image";

import image1 from "../../../public/images/esp.webp";
import image2 from "../../../public/images/Arduino_SKT.webp";
import image3 from "../../../public/images/Pi_Sarkitshala.webp";
import image4 from "../../../public/images/Drone.webp";

export default function SimpleSlider() {
  const settings = {
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2800,
    arrows: false,
    dots: true,
    appendDots: (dots) => (
      <div className="pt-4">
        <ul className="flex justify-center space-x-3">{dots}</ul>
      </div>
    ),
    customPaging: (i) => (
      <button className="w-3 h-3 rounded-full bg-gray-300 dark:bg-gray-600 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500" />
    ),
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const cards = [
    {
      href: "/esp",
      image: image1,
      alt: "ESP32 Microcontroller",
      title: "ESP32",
    },
    {
      href: "/arduino",
      image: image2,
      alt: "Arduino Board",
      title: "Arduino",
    },
    {
      href: "/drone",
      image: image4,
      alt: "Drone Technology",
      title: "Drone",
    },
    {
      href: "/raspberry",
      image: image3,
      alt: "Raspberry Pi Computer",
      title: "Raspberry Pi",
    },
  ];

  return (
    <section className="my-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Slider {...settings}>
        {cards.map(({ href, image, alt, title }, index) => (
          <div
            key={index}
            className="px-3 focus-within:ring-2 focus-within:ring-blue-500 focus-within:outline-none rounded-lg"
            tabIndex={-1}
          >
            <Link
              href={href}
              className="group relative block rounded-lg overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500"
            >
           <div className="relative w-full h-52 sm:h-64 md:h-56 lg:h-80 xl:h-96">
  <Image
    src={image}
    alt={alt}
    fill
    sizes="(max-width: 640px) 100vw, 300px"
    className="object-contain p-6 transition-transform duration-300 group-hover:scale-110"
    priority={index === 0}
  />
</div>

              <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 to-transparent p-3">
                <h3 className="text-white text-lg font-semibold truncate">{title}</h3>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </section>
  );
}
