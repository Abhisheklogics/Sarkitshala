
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import getData from "@/app/apiCall";

import Res from "@/components/Res";
const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });


export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Res');
      const posts = response?.experiments || [];
      
      return posts.map((post) => ({
          ExperimentId: String(post.ExperimentId),
      }));
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
}

export default async function Page({ params }) {
    const { Experiment } = await params; 
    
    const data = await getData(`https://sarkitshala.com/api/experiments/Res`, Experiment)
    
      if(data)
      {
        return(<Res data={data}/>)
        
      }
    if (!data) {
     
        return <p><Loading/></p>;
      }
      
      

    return (
    <>
      <div className="h-fit w-full p-2 text-wrap font-serif bg-cover rounded-xl leading-10 text-justify  
      md:h-fit md:w-[790px] md:ml-[330px]  md:mt-28 2xl:ml-[400px] md:p-5  md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
       
 
  

          <h1 className="text-center capitalize  text-xl font-bold md:text-center md:text-2xl hover:text-blue-500">{data.ExperimentName}</h1>
          
        
       
            <Image
              className=" md:ml-28 md:mt-4 ml-1 rounded mt-4 md:w-[500px]"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              src={data.image1}
              alt={`${data.ExperimentName} - Experiment Image`}
              width={470}  
              height={400} 
              objectFit="cover"
             
            />
         
         

          <h2 className=" text-sm md:mt-4 md:text-sm font-bold hover:text-blue-500">{data.madeBy}</h2>
        
          <p className="md:mt-4 p-4 bg-white border border-black mt-6" id="introduction">{data.madeByinfo1}<br/> {data.madeByinfo2}</p>
          <p className="p-4 bg-white border border-black md:mt-10 text-lg" id="Overview"><h2 className="font-semibold text-2xl mb-2 hover:text-blue-500">{data.overview}</h2> {data.overviewinfo1} {data.overviewinfo2}</p>


          <div className="md:mt-4 p-4 border border-black bg-white mt-4 ">
            <p className=" md:text-2xl text-lg  font-bold hover:text-blue-500" id="Hardware-Components">{data.Material}</p>
            {data.Material1 && <p className="md:ml-10 md:mt-4 mt-4">1. {data.Material1}</p>}
            {data.Material2 && <p className="md:ml-10 md:mt-2 mt-4">2. {data.Material2}</p>}
            {data.Material3 && <p className="md:ml-10 md:mt-2 mt-4">3. {data.Material3}</p>}
            {data.Material4 && <p className="md:ml-10 md:mt-2 mt-4">4. {data.Material4}</p>}
            {data.Material5 && <p className="md:ml-10 md:mt-2 mt-4">5. {data.Material5}</p>}
          </div>


        
            <div className="p-4 md:ml-[-40] mt-4 border border-black bg-white ">
              <h2 className="text-2xl font-semibold">Specifications</h2>
              <Image
                src={data.image2}
                alt={`${data.ExperimentName} - Specifications`} 
                width={400}
                height={300}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="md:ml-10 border border-black mt-4 md:w-fit h-fit"
                objectFit="cover"
              />
            </div>


            <div className=" p-4  mt-4 border border-black bg-white md:mt-12">     
            <p className="md:text-2xl font-semibold mb-4 text-lg hover:text-blue-500" id="Pin-Diagram">{data.pinDiagramInfo}</p>
              <Image
                src={data.image3}
                alt={`${data.ExperimentName} - Pin Diagram`}
                width={384}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                objectFit="cover"
              />
            </div>
  
          
           
            <div className="p-4  mt-4 border border-black bg-white md:mt-12">
          <p className="md:text-2xl font-semibold mb-4 text-lg hover:text-blue-500"  id="Circuit-Diagram">{data.CircuitDiagramInfo}</p>
            <div className="flex justify-center"><Image
                src={data.image4}
                alt={`${data.ExperimentName} - Circuit Diagram`}
                width={402}
                height={176}
                 
                objectFit="cover"
              /></div>
            </div>
      

          <div className="mt-4 p-4 border border-black bg-white">
          <h3 className="md:text-2xl font-semibold text-lg hover:text-blue-500" id="Steps">Steps</h3>
          <p className="md:mt-4">{data.step}</p>
            {data.step1 && <p className="md:mt-2 mt-4">1. {data.step1}</p>}
            {data.step2 && <p className="md:mt-2">2. {data.step2}</p>}
            {data.step3 && <p className="md:mt-2">3. {data.step3}</p>}
            {data.step4 && <p className="md:mt-2">4. {data.step4}</p>}
            {data.step5 && <p className="md:mt-2">5. {data.step5}</p>}
            {data.step6 && <p className="md:mt-2">6. {data.step6}</p>}
            {data.step7 && <p className="md:mt-2">7. {data.step7}</p>}
            {data.step8 && <p className="md:mt-2">8. {data.step8}</p>}
          </div>

          <div className="md:mt-4 p-4 border border-black">
          <h3 className=" md:text-2xl font-semibold hover:text-blue-500" id="Code">Code</h3>
          <CodeBox num={data.ExperimentId} exNam='Raspberry' language={'c'} />
          </div>

          <div className="md:mt-4 p-4 border bg-white border-black">
          <h3 className="md:text-2xl  text-lg hover:text-blue-500" id="Conclusion">Conclusion</h3>
          <p className="md:mt-4">{data.result}</p></div>
       
      </div>
      <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-1 2xl:right-2 md:top-24 md:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold text-lg">In this Article</p>
      <div className="flex flex-col gap-2 mt-3 text-sm md:text-md ">
        <Link href="#introduction" className="hover:text-blue-600">Introduction</Link>
        <Link href="#Overview" className="hover:text-blue-600">Overview of Experiment</Link>
        <Link href="#Hardware-Components" className="hover:text-blue-600">Hardware Components</Link>
        <Link href="#Pin-Diagram" className="hover:text-blue-600">Pin Diagram</Link>
        <Link href="#Circuit-Diagram" className="hover:text-blue-600">Circuit Diagram</Link>
        <Link href="#Steps" className="hover:text-blue-600">Steps</Link>
        <Link href="#Code" className="hover:text-blue-600">Code</Link>

        <Link href="#Conclusion" className="hover:text-blue-600">Conclusion</Link>
        
      </div>
    </div>
    </>
  );
}
