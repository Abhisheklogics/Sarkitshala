'use client';

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';
import image4 from '../../../public/images/Bristo.jpg';
import image8 from '../../../public/images/Drone.webp';
import image6 from '../../../public/images/Pi_Sarkitshala.webp';
import image1 from '../../../public/images/Arduino_SKT.webp';
import image5 from '../../../public/images/esp.webp';
import image2 from '../../../public/images/jetson_Sarkitshala.webp';

import image7 from '../../../public/images/hr.jpg';



const SimpleSlider = () => {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  }, []);

  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] right-1 transform -translate-y-1/2 text-white bg-gray-900  p-2 rounded-full cursor-pointer hover:bg-opacity-100 md:h-10 md:w-10 md:p-2"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        <div className=" md:ml-[5px] md:fold-bold mt-[-2px] md:mt-[-1px]">
          
          →
        </div>
      </div>
    );
  };

 
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[50%] left-1 transform -translate-y-1/2 text-white bg-gray-900  p-2 rounded-full cursor-pointer hover:bg-opacity-100 md:h-10 md:w-10 md:p-2"
        style={{ zIndex: 1 }}
        onClick={onClick}
      >
        <div className="md:ml-[5px] scale-x-[-1] md:fold-bold ml-[3px] mt-[-2px]  md:mt-[-1px]">
        →
        
        </div>
      </div>
    );
  };

  
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

  return (
    <Slider
      className="relative mt-40 w-[90vw] h-fit mx-auto 2xl:w-[900px]  md:w-[800px] md:mt-36  2xl:ml-24  md:mx-auto md:ml-12"
      {...settings}
    >
      <div className=" shadow-lg md:h-fit h-[200px] rounded overflow-hidden">
        <Link href={`/arduino/`} passHref>
          <Image
            src={image1}
            alt="Arduino"
            layout="responsive"
            width={900}
            height={450}
            priority={true}
            quality={75}
            className="object-cover"
          />
        </Link>
      </div>
     
      
      <div className=" md:h-fit h-[200px]  shadow-lg rounded overflow-hidden">
        <Link href={`/arduino/lcd`} passHref>
          <Image
            src={image4}
            alt="Pic 1"
            layout="responsive"
            width={1000}

            height={550}
            priority={true}
            quality={75}
            className=""
          />
        </Link>
      </div>
      <div className="shadow-lg md:h-fit   h-[200px]  rounded overflow-hidden">
        <Link href={`/esp`} passHref>
          <Image
            src={image5}
            alt="LED"
            layout="responsive"
            width={800}
            height={450}
            priority={true}
            quality={75}
            className="object-cover"
          />
        </Link>
      </div>
      <div className="shadow-lg rounded md:h-fit  h-[200px] overflow-hidden">
        <Link href={`/raspberry/`} passHref>
          <Image
            src={image6}
            alt="servo"
            layout="responsive"
            width={800}
            height={450}
            priority={true}
            quality={75}
            className="object-cover"
          />
        </Link>
      </div>

      <div className="shadow-lg rounded md:h-fit  h-[200px] overflow-hidden">
        <Link href={`/jetson/`} passHref>
          <Image
          // Jetson Nano
            src={image2}
            alt="servo"
            layout="responsive"
            width={800}
            height={450}
            priority={true}
            quality={75}
            className="object-cover"
          />
        </Link>
      </div>

      <div className=" shadow-lg md:h-fit h-[200px] rounded-lg overflow-hidden">
        <Link href={`/esp/dht11`} passHref>
          <Image
            src={image7}
            alt="Servo"
            layout="responsive"
            width={800}
            priority={true}
            quality={75}
            height={450}
            className="object-cover"
          />
        </Link>
      </div>
      <div className=" shadow-lg md:h-fit h-[200px] rounded-lg overflow-hidden">
        <Link href={`/drone`} passHref>
          <Image
            src={image8}
            alt="Servo"
            layout="responsive"
            width={800}
            height={450}
            priority={true}
            quality={75}
            className="object-cover"
          />
        </Link>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
