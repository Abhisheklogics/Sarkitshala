import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import image1 from '../../../public/images/esp.webp';
import image2 from '../../../public/images/Arduino_SKT.webp'
import image3 from '../../../public/images/Pi_Sarkitshala.webp'
import image4 from '../../../public/images/Drone.webp'
import Image from 'next/image';
export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 2, 
        },
      },
      {
        breakpoint: 290, 
        settings: {
          slidesToShow: 2, 
        },
      },
    ],
  };

  return (
    <Slider className='mt-10   bg-gray-800 h-[270px] 
      md:mt-10 md:bg-white md:h-[300px]' {...settings}>
      
     
      <div className='md:mt-8 mt-14 '>
        <div className="h-[170px] w-[150px] bg-gray-100 rounded  p-2 shadow-lg
        md:h-[240px] md:w-72 md:bg-gray-100 md:shadow-lg md:rounded md:flex md:flex-col md:justify-center md:items-center md:p-4 md:mx-4">
          <Link href={'/esp'}>
            <Image height={200} width={300} className="w-fit h-fit  mt-4
              md:w-60 md:h-fit rounded" src={image1} alt="ESP" />
            <p className='text-center mt-6 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              ESP32
            </p>
          </Link>
        </div>
      </div>
      
     
      <div className='md:mt-8  mt-14'>
        <div className="h-[170px] w-[160px] bg-gray-100 p-2 
        md:h-[240px] md:w-72 md:bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href="/arduino">
            <Image   height={200} width={300}  className="w-fit h-fit md:w-fit md:h-fit mt-2 rounded" src={image2} alt="Arduino" />
            <p className='text-center mt-8 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Arduino
            </p>
          </Link>
        </div>
      </div>
      
      
      <div className='md:mt-8   mt-14'>
        <div className="h-[170px] w-[160px] bg-gray-100 p-2 
        md:h-[240px] md:w-72 bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href={'/drone'}>
            <Image   height={200} width={300}  className="w-fit h-fit md:w-fit md:h-fit mt-[10px] rounded  " src={image4} alt="Drone" />
            <p className='text-center  bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 mt-8 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Drone
            </p>
          </Link>
        </div>
      </div>
      
      
      <div className='md:mt-8  mt-14'>
        <div className="h-[170px] w-[160px] md:w-72 bg-gray-100 p-2 
        md:h-[240px]  bg-gray-100 shadow-lg rounded flex flex-col justify-center items-center p-4 mx-4">
          <Link href={'/raspberry'}>
            <Image height={100} width={300}  className="w-60 h-fit mt-2  rounded " src={image3} alt="Raspberry Pi" />
            <p className='text-center mt-8 bg-gray-200 p-1 hover:bg-blue-700 hover:text-white active:bg-gray-900
              md:text-center md:mt-4 md:bg-gray-200 md:p-1 md:hover:bg-blue-700 md:hover:text-white md:active:bg-gray-900'>
              Raspberry Pi
            </p>
          </Link>
        </div>
      </div>
      
    </Slider>
  );
}
