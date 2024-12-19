 
import getData from "@/app/apiCall";
import dynamic from "next/dynamic";
import Image from "next/image";
const Loading=dynamic(()=>import('@/components/loading/Loading'),{
  ssr:false
})


const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
export const revalidate = 3600*24*30 
 
export default async function Page() {
  const data = await getData(`${process.env.DOMAIN}/api/experiments/Esp`, 1)
  
  
    return (
   
   
     
      <>
      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words mt-24 

       md:h-fit md:w-[770px] md:text-md md:ml-[350px] md:mt-[-480px] 
    md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap 
    ">
      <h1 className=" text-center text-2xl  md:text-center capitalize md:text-2xl text-xl font-bold md:font-light

      md:text-center md:text-2xl
    ">{data.ExperimentName}</h1>
   
     <div className="mt-6
     md:ml-40 md:mt-6"> <Image height={400} width={500}  className="md:ml-[-40px]
     " loading="lazy"
    src={data.image1} alt="Experiment Image" /></div>
    <h1 className="mt-4  text-sm ml-2
    md:mt-4  md:text-sm md:ml-2 font-bold">Made By : Aman Raj</h1>
      <h2 className="text-sm mt-2
      md:text-sm md:mt-2">{data.madeBy}</h2>
      <p className="mt-2
      md:mt-2">{data.madeByinfo}</p>
      <h2 className="  mt-10
        md:mt-10 ">{data.overview}</h2>
      <h2 className=" text-2xl  mt-10
      md:text-2xl  md:mt-10 ">Hardware components</h2>
      <p className="md:mt-4 mt-4">{data.component}</p>

    
      <div className="ml-12 mt-8
      md:ml-12 md:mt-8">
       
       <Image height={500} width={700}  className="
     " loading="lazy"
    src={data.image2} alt="Experiment Image" />
       
      </div>

      <h2 className="text-2xl mt-14
      md:text-2xl md:mt-14 ">{data.pinDiagramInfo}</h2>
     
        
      <div className="ml-20  mt-10
      md:ml-20  md:h-[300px]">
        <Image height={400} width={500}  className="md:ml-[-40px] h-fit w-fit
     " loading="lazy"
    src={data.image3} alt="Experiment Image" />
       
      </div>


      <h2 className=" text-2xl 
      md:text-2xl ">{data.CircuitDiagramInfo}</h2>
      
      <div className="ml-32 mt-10
      md:ml-60   md:mt-10">
       
       <Image height={400} width={400}  className="md:ml-[-40px]
     " loading="lazy"
    src={data.image4} alt="Experiment Image" />
    
   </div>
      

      <h1 className="text-2xl
      md:text-2xl ">Steps:</h1>
      <div className="ml-4
      md:ml-14">
        <p className="md:mt-4 ">{data.step}</p>
        {data.step1 && <p className="mt-2
        md:mt-2 ">1: {data.step1}</p>}
        {data.step2 && <p className="mt-2
        md:mt-2">2: {data.step2}</p>}
        {data.step3 && <p className="mt-2
        md:mt-2">3: {data.step3}</p>}
        {data.step4 && <p className="mt-2
        md:mt-2">4: {data.step4}</p>}
        {data.step5 && <p className="mt-2
        md:mt-2">5: {data.step5}</p>}
        {data.step6 && <p className="mt-2
        md:mt-2">6: {data.step6}</p>}
        {data.step7 && <p className="mt-2
        md:mt-2">7: {data.step7}</p>}
        {data.step8 && <p className="mt-2
        md:mt-2">8: {data.step8}</p>}
        {data.step9 && <p className="mt-2
        md:mt-2">9: {data.step9}</p>}
        {data.step10 && <p className="mt-2
        md:mt-2">10: {data.step10}</p>}
        {data.step11 && <p className="mt-2
        md:mt-2">11: {data.step11}</p>}
        {data.step12 && <p className="mt-2
        md:mt-2">12: {data.step12}</p>}
        {data.step13 && <p className="mt-2
        md:mt-2">13: {data.step13}</p>}
        {data.step14 && <p className="mt-2
        md:mt-2">14: {data.step14}</p>}
        {data.step15 && <p className="mt-2
        md:mt-2">15: {data.step15}</p>}
        {data.step16 && <p className="mt-2
        md:mt-2">16: {data.step16}</p>}
        {data.step17 && <p className="mt-2
        md:mt-2">17: {data.step17}</p>}
        {data.step18 && <p className="mt-2
        md:mt-2">18: {data.step18}</p>}
        {data.step19 && <p className="mt-2
        md:mt-2">19: {data.step19}</p>}
        {data.step20 && <p className="mt-2
        md:mt-2">20: {data.step20}</p>}
        
        
      </div>

      <h2 className="mt-4 text-2xl
      md:mt-4 md:text-2xl ">Code:</h2>
      <CodeBox codeString={data.code} language={'c'} num={data.ExperimentId} exNam='esp'/>
      
      <h3 className="text-2xl  mt-6
      md:text-2xl  md:mt-6">Result</h3>
      <p className="mt-6
      md:mt-6">{data.result}</p>
    </div>
      </>
 
);
  
}

