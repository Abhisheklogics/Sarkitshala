
'use client'

import React, { useState,useEffect} from "react";

import Aos from "aos";
import 'aos/dist/aos.css';


import getData from "@/app/apiCall";


import Image from "next/image";
import img1 from '../../../public/images/ArdTech.webp'
import img2 from '../../../public/images/ESPTech.webp'
import img3 from '../../../public/images/raspTech.webp'


import dynamic from "next/dynamic";
const SimpleSlider =dynamic(()=>import('../slider/Slider'))
const RecentPosts=dynamic(()=>import('../recentPost/Recent'))
const Carousel =dynamic(()=>import('../Techslider/Techslider'))
const Footer=dynamic(()=>import('../Footer/Footer'))
import Loading from '@/components/loading/Loading';

  const Home1 =()=> {
    const [isMobile, setIsMobile] = useState(false); 
 let [data,setData]=useState([]);
let [loading,setLoading]=useState(false)
 
  useEffect(() => {
    setLoading(true)
    getData(`/api/experiments/Home`)
      .then((res) => 
        {
        setData(res)
        setLoading(false)
        
      }
    )
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
 if(loading)
 {
  return(
    <Loading/>
    
  )
 }
  return (
    <>
     
        <div className="xs:h-full
        xl:h-full">
       
       {loading ? <Loading /> : <SimpleSlider />}
        
            {loading ? <Loading/> : <RecentPosts  image={data.arduinodata}/>} 

<div className="md:grid md:grid-cols-3 md:gap-[-20px] grid grid-cols-2  mt-12  md:mt-0">
<div className="md:ml-20  md:mt-32 md:h-[300px] md:w-[300px] h-[100px] w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
<Image src={img1} height={300} width={300}/> 
</div>
<div className="md:ml-20 md:mt-32 md:h-[300px] md:w-[300px] h-[100px] w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
<Image src={img2} height={300} width={300}/>
</div>
<div className="md:ml-20 md:mt-32 md:h-[300px] md:w-[300px] h-[100px]  mt-20  w-[150px] border border-black shadow-xl hover:shadow-lg hover:shadow-[#000000] bg-[#FFF0E5]">
<Image src={img3} height={300} width={300}/>
</div>
</div>
          <div data-aos={isMobile ? undefined :'fade-right'} className={` bg-gradient-to-r from-indigo-300 to-black rounded mt-24 col-span-3 w-[350px]  p-3 text-black ml-6  md:ml-[480px]  2xl:ml-[560px]
         
          xl:rounded xl:mt-20 bg-green-700 col-span-3 xl:w-[450px] justify-center mx-auto relative text-center xl:p-3 xl:text-black`} >
            <div className=""><h1 className="  animate-typing overflow-hidden whitespace-nowrap border-r-2 border-r-white pr-5 
             text-2xl text-white font-light 
            md:animate-typing md:overflow-hidden md:whitespace-nowrap md:border-r-2 md:border-r-md:white md:pr-5 
            md:text-3xl md:text-white md:font-light md:ml-10 
            ">LATEST TECHNOLOGIES</h1></div>
          </div>
          
         

          {loading ? <Loading/> : <Carousel/>}
          
        </div>
        {loading ?<Loading/> : <Footer/>}
    </>
  );
}
 export default Home1

