
'use client'

import React, { useState,useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';


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
   
    getData(`/api/experiments/Home`)
      .then((res) => setData(res))
      .catch((err) => console.log(err));

    
    Aos.init({ duration: 2000 });

    
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 368); 
    };

  
    window.addEventListener('resize', checkMobile);
    
    
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

          <div data-aos={isMobile ? undefined :'fade-right'} className={` bg-gradient-to-r from-indigo-300 to-black rounded mt-20 col-span-3 w-[350px]  p-3 text-black ml-6  md:ml-[480px]  2xl:ml-[560px]
         
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

