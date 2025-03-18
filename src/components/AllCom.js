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
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title3}</h2>
        <p>{data.para2}</p>
      
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title4}</h2>
        {data.CC &&  Object.values(data.CC).map((val)=>(
          <p key={data.ExperimentId}>{val.name}</p>
        ))}
      
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">Common Anode RGB LED
        </h2>
        {data.CA &&  Object.values(data.CA).map((val)=>(
          <p key={data.ExperimentId}>{val.name}</p>
        ))}
      
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title5}
        </h2>
        
          <p>{data.para3}</p>
     
      
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title6}
        </h2>
        
          {data.IDC && Object.values(data.IDC).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
     
      
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-xl font-bold mb-6 ">{data.title7}
        </h2>
            <p>{data.para4}</p>  
            { data.WA && Object.values(data.WA).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
     
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
      <h2 className="text-xl font-bold mb-6 ">{data.title8}
         
      </h2>
      </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
        <h2 className="text-xl font-bold mb-6 ">{data.title9}
           
        </h2>
        </section>
        <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
        <h2 className="text-xl font-bold mb-2 ">{data.title10}      
        </h2>
        { data.CM && Object.values(data.CM).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
        </section>
        <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
        <h2 className="text-xl font-bold mb-2 ">{data.title11}      
        </h2>
        {data.URP &&  Object.values(data.URP).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
        </section>
        <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
        <h2 className="text-xl font-bold mb-2 ">{data.title12}      
        </h2>
        { data.CCA && Object.values(data.CCA).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
        </section>
        <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        
        <h2 className="text-xl font-bold mb-2 ">{data.title13}      
        </h2>
        { data.CCAA &&  Object.values(data.CCAA).map((val)=>(
            <p key={data.ExperimentId}>{val.name}</p>
          ))}
        </section>
        </div>
        <Side/>
        </>
    )
}