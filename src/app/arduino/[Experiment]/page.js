
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});


export async function generateMetadata({ params }) {
  const ExperimentName = await getData(`https://sarkitshala.com/api/experiments/ArduinoMeta`, params.Experiment);
  const generateSeoDescription = (text, maxLength = 160) => {
    return text.length > maxLength 
      ? `${text.substring(0, maxLength).trim()}...` 
      : text.trim();
  };
  

  if(ExperimentName.ExperimentName.includes('Interfacing'))
    {
      ExperimentName.ExperimentName= ExperimentName.ExperimentName.replace('Interfacing','Interface')
    }
  return {
    title: ` ${ExperimentName.ExperimentName} using Arduino - Sarkitshala`,

    robots: {
      index: true,
      follow: true
    },
    url: `https://sarkitshala.com/arduino/${params.Experiment}`,
    siteName: "Sarkitshala",
    description:  generateSeoDescription(ExperimentName.overviewinfo1),
    openGraph: {
      title: `${ExperimentName.ExperimentName} | Arduino Projects & Tutorials`,
      description: generateSeoDescription(ExperimentName.overviewinfo1),
      url: `https://sarkitshala.com/arduino/${params.Experiment}`,
      images: [
        {
          url: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: `${ExperimentName.ExperimentName} Experiment preview`
        }
      ],
      site_name: 'Sarkitshala',
    },
   keywords: `${ExperimentName.ExperimentName}, Arduino circuits, IoT projects, microcontroller interfacing, beginner electronics, LED ,Sensor`,
    canonical: `https://sarkitshala.com/arduino/${params.Experiment}`,
    author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)'
  };
}




export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Arduino');
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
  console.log(params)
  const { Experiment } = await params; 

 
  const data = await getData(`https://sarkitshala.com/api/experiments/Arduino`, Experiment);
  
  return (
    <>
  
    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-720px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1  className="text-center capitalize md:text-3xl text-xl font-bold hover:text-blue-500">{data.ExperimentName}</h1>

        <Image
  width={data.ExperimentId === '5' || data.ExperimentId === '4' ? 300 : 500}
  height={data.ExperimentId === '5' || data.ExperimentId === '4' ? 200 : 400}
   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px "
  src={data.image1}
  alt={`${data.ExperimentName} - Experiment Image`}
 className="md:ml-28 mt-4 md:rounded"
/>
        <h2 className="text-sm mt-6 font-bold p-1 hover:text-blue-500">{data.madeBy}</h2>
        <p className="mt-2 hover:text-blue-500">{data.madeByinfo}</p>
        <p className="mt-2 md:mt-2" id="introduction">{data.madeByinfo1}</p>
        <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
        <h2 className="md:text-2xl mt-8 font-bold text-lg hover:text-blue-500" id="Overview">{data.overview}</h2>
        <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
        <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

        <div className="mt-12 md:ml-20">
        <Image
            width={500}
            height={440}
            
             sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px "
            className="   w-full h-full md:ml-4"
            src={data.image2} 
            alt={`${data.ExperimentName} - Specifications `}
          />
        
        </div>

        
          <div>
          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-10 md:text-2xl font-bold md:font-bold " id="Pin-Diagram">
            {data.pinDiagramInfo}
          </h2>
          <div className="mt-12 capitalize rounded ml-10 md:ml-44 md:mt-12 md:rounded">
            <Image height={300} width={450}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>

          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-10 md:text-2xl font-bold " id="Circuit-Diagram">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="mt-12 md:ml-24 md:mt-12 w-fit h-fit">
            <Image  height={400} width={500}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
          </div>
        </div>

       
     
    {data.ExperimentId=='14'?'':<div><h3 className="md:text-2xl text-lg mt-20 font-bold hover:text-blue-500" id="Steps">Steps</h3>
        <div className="leading-10">
          {data.step && <p>{data.step}</p>}
          {data.step1 && <p className="mt-4">1: {data.step1}</p>}
          {data.step2 && <p className="ml-">2: {data.step2}</p>}
          {data.step3 && <p className="ml-">3: {data.step3}</p>}
          {data.step4 && <p className="ml-">4: {data.step4}</p>}
          {data.step5 && <p className="ml-">5: {data.step5}</p>}
          {data.step6 && <p className="ml-">6: {data.step6}</p>}
        </div>
        </div>}


  
        <h3 className="md:text-2xl text-lg mt-10 font-bold hover:text-blue-500" id="Code">Code</h3>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

      
        <h3 className="md:text-2xl mt-6 text-lg font-bold hover:text-blue-500" id="Conclusion">Conclusion</h3>
        <p className="mt-6">{data.result}</p>
    
    </div>
    <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-1 2xl:right-2 md:top-24 md:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold text-lg">In this article</p>
      <div className="flex flex-col gap-2 mt-3 text-sm md:text-md ">
        <Link href="#introduction" className="hover:text-blue-600">Introduction</Link>
        <Link href="#Overview" className="hover:text-blue-600">Overview of Experiment</Link>
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
