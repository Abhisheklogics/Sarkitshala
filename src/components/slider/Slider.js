'use client';

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Image from 'next/image';
import Aos from 'aos';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'aos/dist/aos.css';

// Image imports
import image1 from '../../../public/images/Arduino_SKT.webp';
import image2 from '../../../public/images/jetson_Sarkitshala.webp';
import image4 from '../../../public/images/Bristo.jpg';
import image5 from '../../../public/images/esp.webp';
import image6 from '../../../public/images/Pi_Sarkitshala.webp';
import image7 from '../../../public/images/hr.jpg';
import image8 from '../../../public/images/Drone.webp';

const SimpleSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 right-2 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
      onClick={onClick}
    >
      →
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-1/2 left-2 z-10 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full cursor-pointer hover:bg-gray-700"
      onClick={onClick}
    >
      ←
    </div>
  );

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          autoplay: false,
          swipeToSlide: true,
        },
      },
    ],
  };

  // Define a consistent size container
  return (
    <div className="mx-auto mt-32 md:ml-12 md:mt-28 w-[95vw] sm:w-[80vw] md:w-[600px] lg:w-[700px] xl:w-[800px] 2xl:w-[900px]">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/arduino/" passHref>
            <Image
              src={image1}
              alt="Arduino"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Slide 2 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/arduino/lcd" passHref>
            <Image
              src={image4}
              alt="LCD"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Slide 3 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/esp" passHref>
            <Image
              src={image5}
              alt="ESP"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Slide 4 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/raspberry/" passHref>
            <Image
              src={image6}
              alt="Raspberry Pi"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Slide 5 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/jetson/" passHref>
            <Image
              src={image2}
              alt="Jetson Nano"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>

        {/* Slide 6 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/esp/dht11" passHref>
            <Image
              src={image7}
              alt="DHT11"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
              priority
            />
          </Link>
        </div>

        {/* Slide 7 */}
        <div className="rounded shadow-lg overflow-hidden">
          <Link href="/drone" passHref>
            <Image
              src={image8}
              alt="Drone"
              layout="responsive"
              width={800}
              height={450}
              className="object-cover"
            />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
