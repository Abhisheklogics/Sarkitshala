
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
let AllCom=dynamic(() => import('@/components/AllCom'))

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

export async function generateMetadata({ params }) {
  const ExperimentData = await getData(`https://sarkitshala.com/api/experiments/ArduinoMeta`, params.Experiment);

  

  const experimentTitle = ExperimentData.title || "Arduino Experiment";
  const experimentOverview = ExperimentData.metaDescription || "Learn Arduino interfacing step by step.";
  const experimentImage = ExperimentData.image1 || 'https://sarkitshala.com/opengraph-image.jpg';
  const experimentSlug = `https://sarkitshala.com/arduino/${params.Experiment}`;

  return {
    title: `${experimentTitle} `,
    description: experimentOverview,
    
    robots: {
      index: true,
      follow: true,
    },

    url: experimentSlug,
    siteName: "Sarkitshala",
    
    openGraph: {
      title: `${experimentTitle} | Arduino Projects & Tutorials`,
      description: experimentOverview,
      url: experimentSlug,
      images: [
        {
          url: experimentImage,
          width: 1200,
          height: 630,
          alt: `${experimentTitle} Experiment preview`
        }
      ],
      site_name: "Sarkitshala",
      type: "article",
    },

    twitter: {
      card: "summary_large_image",
      title: `${experimentTitle} | Arduino Guide`,
      description: experimentOverview,
      images: [experimentImage]
    },

    keywords: `${experimentTitle}, Arduino circuits, IoT projects, microcontroller interfacing, beginner electronics, LED, Sensor, ESP32, DHT11`,
    
    canonical: experimentSlug,

    alternates: {
      canonical: experimentSlug,
      languages: {
        "en-US": `https://sarkitshala.com/en/arduino/${params.Experiment}`,
        "hi-IN": `https://sarkitshala.com/hi/arduino/${params.Experiment}`
      }
    },

    author: "Sarkitshala Team (Amarjeet Singh Chauhan, Abhishek Kumar, Aman Raj)",

   


  };
}





export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Arduino');
      const posts = response?.experiments || [];
      
      return posts.map((post) => ({
          ExperimentId: String(post.Experiment),
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
 
  if (data.ExperimentId === 15) {
    return (
      <div className="h-fit w-full p-5 bg-gray-100 bg-cover rounded-xl leading-8 text-justify break-words 
      md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
        {/* Title */}
        <h1 className="text-center capitalize text-3xl font-bold text-gray-800 hover:text-blue-500">
          {data.title}
        </h1>
  
        {/* Introduction */}
        <p className="mt-4 text-gray-700 hover:text-blue-500">
          {data.introduction}
        </p>
  
        {/* Color List */}
        <ul className="mt-6 ml-10 list-disc text-gray-800 font-bold hover:text-blue-500">
          <li>Red (R)</li>
          <li>Green (G)</li>
          <li>Blue (B)</li>
        </ul>
  
        {/* Description */}
        <p className="mt-4 text-gray-700 hover:text-blue-500">
          By mixing these three colors in different proportions, we can create a wide range of colors,
          including white, yellow, cyan, magenta, and many more. They have either four pins (common cathode
          or common anode) or three pins in addressable types (like WS2812B). Here, we focus on a
          four-pin RGB LED interfaced with an Arduino.
        </p>
  
        {/* Type Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800 hover:text-blue-500">
          {data.type}
        </h2>
        <p className="mt-2 text-gray-700 hover:text-blue-500">
          {data.typeval}
        </p>
        <ol className="mt-4 ml-6 list-decimal text-gray-700">
          <li>{data.anodeVal1}</li>
          <li>{data.anodeVal2}</li>
          <li>{data.anodeVal3}</li>
        </ol>
  
        {/* Cathode Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800 hover:text-blue-500">
          {data.cathode}
        </h2>
        <p className="mt-2 text-gray-700 hover:text-blue-500">
          {data.cathvalue1}
        </p>
        <p className="mt-2 text-gray-700 hover:text-blue-500">
          {data.cathvalue2}
        </p>
        <p className="mt-2 text-gray-700 hover:text-blue-500">
          {data.cathvalue3}
        </p>
  
        {/* Anode Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800">
          {data.anode}
        </h2>
        <p className="mt-2 text-gray-700">{data.anodeVal1}</p>
        <p className="mt-2 text-gray-700">{data.anodeVal2}</p>
        <p className="mt-2 text-gray-700">{data.anodeVal3}</p>
  
        {/* Pin Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800">
          {data.pin}
        </h2>
        <p className="mt-2 text-gray-700">{data.pinInfo}</p>
  
        {/* Identification Info Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800">
          {data.idenInfo}
        </h2>
        <p className="mt-2 text-gray-700">{data.ideninfo1}</p>
        <p className="mt-2 text-gray-700">{data.ideninfo2}</p>
  
        {/* RGB Work Section */}
        <h2 className="mt-6 text-xl font-bold p-1 text-gray-800 hover:text-blue-500">
          {data.rgbWork}
        </h2>
        <p className="mt-2 text-gray-700">{data.rgbintro}</p>
        <p className="mt-2 text-gray-700">{data.rgbintro1}</p>
        <p className="mt-2 text-gray-700">{data.rgbintro2}</p>
      </div>
    );
  }
  

if(data.ExperimentId==2 )
{
  
return(
  <>

  <AllCom data={data}/>
  </>
)
}

  return (
    <>
  
    <div className="h-fit w-full p-5 bg-gray-100 bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1  className="  text-center capitalize md:text-3xl text-xl font-bold ">{data.ExperimentName}</h1>

        <Image
  width={data.ExperimentId === '5' || data.ExperimentId === '4' ? 300 : 500}
  height={data.ExperimentId === '5' || data.ExperimentId === '4' ? 200 : 400}
   sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px "
  src={data.image1}
  alt={`${data.ExperimentName} - Experiment Image`}
 className=" bg-white  rounded-2xl shadow-xl md:ml-28 mt-4 md:rounded "
/>
        <h2 className="text-sm mt-6 font-bold p-1 hover:text-white">{data.madeBy}</h2>
        <p className="">{data.madeByinfo}</p>
        <p className="mt-2 max-w-4xl bg-white p-6 rounded-2xl shadow-lg " id="introduction">{data.madeByinfo1}</p>
        <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg ">{data.madeByinfo2}</p>
        <h2 className="md:text-2xl mt-8 font-bold text-lg hover:text-blue-500 ml-4 " id="Overview">{data.overview}</h2>
        <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg ">{data.overviewinfo1}</p>
        <p className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg ">{data.overviewinfo2}</p>

        <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg ">
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
          <div className="mt-10  max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
            <Image height={300} width={450}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " src={data.image3} className="md:ml-28" alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>

          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-10 md:text-2xl font-bold " id="Circuit-Diagram">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="mt-10  max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
            <Image  height={400} width={500}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " className="md:ml-20" src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
          </div>
        </div>

       
     
    {data.ExperimentId=='14'?'':<div><h3 className="md:text-2xl text-lg mt-10 font-bold hover:text-blue-500" id="Steps">Steps</h3>
        <div className=" ">
          {data.step && <p className="">{data.step}</p>}
          {data.step1 && <p className=" mt-4  max-w-4xl bg-white p-6 rounded-2xl shadow-lg">1: {data.step1}</p>}
          {data.step2 && <p className=" mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">2: {data.step2}</p>}
          {data.step3 && <p className=" mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">3: {data.step3}</p>}
          {data.step4 && <p className=" mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">4: {data.step4}</p>}
          {data.step5 && <p className=" mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">5: {data.step5}</p>}
          {data.step6 && <p className=" mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">6: {data.step6}</p>}
        </div>
        </div>}


  
        <h3 className="md:text-2xl text-lg mt-10 font-bold hover:text-blue-500" id="Code">Code</h3>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

      
        <h3 className="md:text-2xl mt-6 text-lg font-bold hover:text-blue-500" id="Conclusion">Conclusion</h3>
        <p className=" mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">{data.result}</p>
        <div className="mt-4 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
      <h3 className="text-lg font-semibold mb-2 text-center">More Experiments of Arduino</h3>
      <div className="flex flex-wrap  gap-4 ">
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`arduino/${'interfacing-led'}`}>Interfacing LED</Link>
    </p>
    <p className="bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-rgb-led'}`}>Interfacing an RGB LED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-7-segment-display'}`}>Interfacing Seven Segement Display</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-oled'}`}>Interfacing OLED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-pir-sensor'}`}>Interfacing PIR Sensor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-soil-moisture'}`}>Interfacing Soil Moisture Sensor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-traffic-light-system'}`}>Interfacing Traffic Light</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-ultrasonic-sensor-with-led'}`}>Interfacing Ultrasonic with LED</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-dc-motor'}`}>Interfacing DC Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-servo-motor'}`}>Interfacing Servo Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-gear-motor'}`}>Interfacing Gear Motor</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-lcd'}`}>Interfacing LCD</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-dht22'}`}>Interfacing DHT22</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-led-with-push-button'}`}>Interfacing LED with Push Button</Link>
    </p>
    <p className=" bg-white p-2 px-4 rounded-lg shadow-md text-sm font-medium text-blue-700 transition-all duration-200 hover:bg-gray-100 hover:shadow-lg">
       <Link href={`/arduino/${'interfacing-oled-with-push-button'}`}>Interfacing Push Button with OLED</Link>
    </p>
        </div>
    </div>
    
    </div>
    <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-1 2xl:right-2 md:top-28 md:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold text-lg">In this article</p>
      <div className="flex flex-col gap-2 mt-3 text-center text-sm md:text-md ">
        <Link href="#introduction" className=" max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Introduction</Link>
        <Link href="#Overview" className=" max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Overview of Experiment</Link>
        <Link href="#Pin-Diagram" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Pin Diagram</Link>
        <Link href="#Circuit-Diagram" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Circuit Diagram</Link>
        <Link href="#Steps" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Steps</Link>
        <Link href="#Code" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Code</Link>

        <Link href="#Conclusion" className="max-w-4xl bg-white p-2 rounded-2xl shadow hover:text-blue-600">Conclusion</Link>
        
      </div>
      
    </div> 
  </>

  );
}
