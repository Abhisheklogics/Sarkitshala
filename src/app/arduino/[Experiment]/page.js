
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});


export async function generateMetadata({ params }) {
  const ExperimentName = await getData(`https://sarkitshala.com/api/experiments/ArduinoMeta`, params.Experiment);
  const generateSeoDescription = (text, maxLength = 160) => {
    const truncatedText = text.length > maxLength 
        ? `${text.slice(0, text.lastIndexOf(' ', maxLength)).trim()}...` 
        : text.trim();
    return `${truncatedText} Learn more about Arduino projects on Sarkitshala.`;
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
      url: `https://sarkitshala.com/arduino${params.Experiment}`,
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
    keywords: `${ExperimentName.ExperimentName}, LED , OLED, LCD,Ultrasonic Sensor ,Arduino Push Button`,
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
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-740px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1 className="text-center capitalize md:text-3xl text-xl font-bold hover:text-blue-500">{data.ExperimentName}</h1>

        {data.ExperimentId=='5'|| data.ExperimentId=='4'?<div className="mt-4 ml-[-10px] md:ml-32 md:mt-4">
          <Image
            width={500}
            height={200}
            className="md:ml:4 md:h-52 mt-0 md:w-[500px] rounded  md:h-[280px] w-full"
            src={data.image1}
             loading="lazy"
            alt={`${data.ExperimentName} - Experiment Image `}
          />
        </div>:<Image
            width={600}
            height={200}
            className=" md:mt-4 md:h-fit   rounded md:w-[500px]  md:ml-28 mt-4 "
            src={data.image1}
             loading="lazy"
            alt={`${data.ExperimentName} - Experiment Image `}
          />}

        <h2 className="text-sm mt-6 font-bold p-1 hover:text-blue-500">{data.madeBy}</h2>
        <p className="mt-2 hover:text-blue-500">{data.madeByinfo}</p>
        <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
        <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
        <h2 className="md:text-2xl mt-8 font-bold text-lg hover:text-blue-500">{data.overview}</h2>
        <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
        <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

        <div className="mt-12 md:ml-20">
         {data.ExperimentId == '1' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' ||data.ExperimentId == '6' || data.ExperimentId == '7' || data.ExperimentId == '8'  || data.ExperimentId == '9' || data.ExperimentId == '10' || data.ExperimentId =='11'? 
         <Image
            width={500}
            height={440}
             loading="lazy"
            className="   w-full h-full md:ml-4"
            src={data.image2} 
            alt={`${data.ExperimentName} - Specifications `}
          />: <Image
          width={450}
          height={400}
           loading="lazy"
          className="ml-2 md:h-fit md:w-fit md:ml-4 bg-none "
          src={data.image2}
          alt={`${data.ExperimentName} - Specifications `}
        />}
        
        </div>

       
        {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId=='3'  || data.ExperimentId=='4' || data.ExperimentId=='5'|| data.ExperimentId=='6'|| data.ExperimentId=='7'|| data.ExperimentId=='8'|| data.ExperimentId=='9'|| data.ExperimentId=='10' || data.ExperimentId=='11' ? (
        <div>
          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-10 md:text-2xl font-bold md:font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="mt-12 capitalize rounded ml-10 md:ml-44 md:mt-12 md:rounded">
            <Image  loading="lazy" height={300} width={450} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>

          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-10 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="mt-12 md:ml-24 md:mt-12 w-fit h-fit">
            <Image  loading="lazy" height={400} width={500} src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
          </div>
        </div>
      ) : (
        ''
      )}



      {data.ExperimentId == '12'  ? (
        <div>
          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-6 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-12 mt-8 md:ml-32 md:mt-12 md:ml-60">
            <Image  loading="lazy" height={100} width={350} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `} />
          </div>
          <div className="hover:text-blue-500 mt-12 text-lg md:mt-8 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-12 mt-6 md:ml-32 md:mt-8 md:mt-10  md:ml-60 ">
            <Image  loading="lazy" height={100} width={350} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="mt-12 hover:text-blue-500 capitalize text-lg md:mt-8 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-12 mt-8 md:ml-60 md:mt-4 ">
            <Image  loading="lazy" height={100} width={450} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}

{data.ExperimentId == '13'  ? (
        <div className="md:mt-12 mt-12">
          <h2 className="hover:text-blue-500 mt-12 text-lg capitalize md:mt-4 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-12 md:ml-32 md:mt-12 md:ml-60">
            <Image  loading="lazy" height={100} width={350} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>
          <div className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-8 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Arduino
          </h2>
          </div>
          <div className="ml-2 mt-12 md:ml-32 md:mt-4 md:mt-12  md:ml-60 ">
            <Image  loading="lazy" height={100} width={350} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="hover:text-blue-500 mt-12 capitalize text-lg md:mt-6 md:text-2xl font-bold">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-12 md:ml-60 md:mt-8 ">
            <Image  loading="lazy" height={100} width={450} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}

      
{data.ExperimentId == '14'  ? (
        <div className="md:mt-20">
          <h2 className="mt-2 hover:text-blue-500 capitalize text-lg md:mt-2 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
            <Image  loading="lazy" height={100} width={400} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>
          <div className="mt-2 hover:text-blue-500 capitalize text-lg md:mt-6 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-2 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
            <Image  loading="lazy" height={100} width={300} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="mt-2 hover:text-blue-500 capitalize text-lg md:mt-2 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-10 md:ml-40 md:mt-10 ">
            <Image  loading="lazy" height={100} width={570} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}
    {data.ExperimentId=='14'?'':<div><h3 className="md:text-2xl text-lg mt-20 font-bold hover:text-blue-500">Steps</h3>
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


  
        <h3 className="md:text-2xl text-lg mt-10 font-bold hover:text-blue-500">Code</h3>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

      
        <h3 className="md:text-2xl mt-6 text-lg font-bold hover:text-blue-500">Conclusion</h3>
        <p className="mt-6">{data.result}</p>
    
    </div>
  </>

  );
}
