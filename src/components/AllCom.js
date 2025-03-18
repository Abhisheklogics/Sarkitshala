import Image from "next/image"

import Side from "./side";
export default function AllCom({data})
{
   
    return(
        <>
         <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
   <h1 className="text-3xl font-bold mb-6 text-center">
        {data.title1}
      </h1>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title2}</h2>
        <p>{data.para1}</p>
      </section>
        </div>
        <Side/>
        </>
    )
}