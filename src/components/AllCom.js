import Image from "next/image"
import Link from "next/link"

export default function AllCom({data})
{
   console.log(data)
    return(
        <>
         <div className="h-fit w-full p-5 bg-gray-100 bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
   <h1 className="text-3xl font-bold mb-6 text-center">
        {data.ExperimentName}
      </h1>

        </div>
        </>
    )
}