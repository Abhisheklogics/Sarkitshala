
'use client'

import React, { useState,useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';
import Link from "next/link";

import getData from "@/app/apiCall";

import dynamic from "next/dynamic";
const SimpleSlider =dynamic(()=>import('../slider/Slider'))
const RecentPosts=dynamic(()=>import('../recentPost/Recent'))
const Carousel =dynamic(()=>import('../Techslider/Techslider'))
const Footer=dynamic(()=>import('../Footer/Footer'))

  const Home1 =()=> {
    const [isMobile, setIsMobile] = useState(false); 
 let [data,setData]=useState([]);

 
  useEffect(() => {
    // Fetch data
    getData(`/api/experiments/Home`)
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    // Initialize AOS on mount
    Aos.init({ duration: 2000 });

    // Check if the device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // Set to true if mobile, false if desktop
    };

    // Check on resize
    window.addEventListener('resize', checkMobile);
    
    // Initial check
    checkMobile();

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
 
  return (
    <>
     
        <div className="xs:h-full
        xl:h-full">
       
            <SimpleSlider />
        
          <RecentPosts  image={data.arduinodata}/>

          <div data-aos={isMobile ? undefined :'fade-left'} className={`rounded mt-20 col-span-3 w-[350px]  p-3 text-black ml-6  md:ml-[480px]  2xl:ml-[560px]
         
          xl:rounded xl:mt-20 bg-green-700 col-span-3 xl:w-[450px] justify-center mx-auto relative text-center xl:p-3 xl:text-black`} >
            <div className=""><h1 className="  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 
             text-2xl text-white font-light 
            md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-md:white md:pr-5 
            md:text-3xl md:text-white md:font-light md:ml-10 
            ">LATEST TECHNOLOGIES</h1></div>
          </div>

          <Carousel/>
          
        </div>
   <Footer/>
    </>
  );
}
 export default Home1

 /*// Track if device is mobile
 data-aos={isMobile ? undefined : "fade-left"} 
 */