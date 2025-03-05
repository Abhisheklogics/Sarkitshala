import Image from "next/image"
import Link from "next/link"

export default function AllCom({data})
{
   
    return(
        <>
         <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
   <h1 className="text-3xl font-bold mb-6 text-center">
        {data.title1}
      </h1>
      <h2 className="text-xl font-bold mb-6 ml-6">
        {data.title2}
      </h2>
      <p className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  {data.para1}</p>
  <p className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  {data.para2}</p>
  <h2 className="text-xl font-bold mb-6 ml-6 mt-4">
        {data.title3}
      </h2>
      <p className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  {data.para3}</p>
  <h2 className="text-xl font-bold mb-6 ml-6 mt-4">
        {data.title4}
      </h2>
      <h2 className="text-xl font-bold mb-6 ml-6 mt-4">
      ⦁	Common Anode (CA)

      </h2>
      {data.CA && Object.values(data.CA).map((com)=>(
        <div  key={data._id} className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
     <p>{com.name}</p>
     </div>
      ))}
     <h2 className="text-xl font-bold mb-6 ml-6 mt-4">
     ⦁	Common Cathode (CC)


      </h2>
      {data.CC && Object.values(data.CA).map((com)=>(
        <div  key={data._id} className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
     <p>{com.name}</p>
     </div>
      ))}
      <h2 classNbame="text-xl font-bold mb-6 ml-6 mt-4">
    {data.title5}

      </h2>
        </div>
        </>
    )
}