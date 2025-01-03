
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
export async function generateMetadata({ params }) {
  const ExperimentName = await getData(`https://sarkitshala.site/api/experiments/Arduino`, params.Experiment);

  if (!ExperimentName) {
    return {
      title: 'Arduino Projects - Sarkit Shala',
      description: 'Explore Arduino projects including sensors, motors, and IoT solutions like ultrasonic, servo, DHT11, and more at Sarkit Shala.',
      openGraph: {
        title: 'Arduino Projects - Sarkit Shala',
        description: 'Explore Arduino projects including sensors, motors, and IoT solutions like ultrasonic, servo, DHT11, and more at Sarkit Shala.',
        url: 'https://sarkitshala.site',
        images: [
          {
            url: 'https://sarkitshala.site/default-image.jpg',
            width: 1200,
            height: 630,
            alt: 'Arduino Projects - Sarkitshala'
          }
        ]
      },
      keywords: 'Arduino, IoT projects, electronics, Arduino tutorials, embedded systems, circuit diagrams, DHT11, ultrasonic sensor, servo motor, LED, traffic light, 7-segment display, embedded programming',
      canonical: 'https://sarkitshala.site',
      robots: 'index, follow',
      author: 'Sarkitshala Team',
    };
  }

  return {
    title: `${ExperimentName.ExperimentName} | Arduino Project`,
    robots: {
      index: true,
      follow: true
    },
    url: `https://sarkitshala.site/${params.Experiment}`,
    siteName: "Sarkitshala",
    description: `${ExperimentName.ExperimentName} - ${ExperimentName.overview}`,
    openGraph: {
      title: `${ExperimentName.ExperimentName} | Arduino Project`,
      description: `${ExperimentName.ExperimentName} - ${ExperimentName.overview}`,
      url: `https://sarkitshala.site/${params.Experiment}`,
      images: [
        {
          url: ExperimentName.image1 || 'https://sarkitshala.site/',
          width: 1200,
          height: 630,
          alt: `${ExperimentName.ExperimentName} - Experiment preview`
        }
      ],
      site_name: 'Sarkitshala',
    },
    keywords: `${ExperimentName.ExperimentName}, Arduino, IoT, Electronics, Embedded Systems, Circuit Diagrams, Project tutorials, Arduino circuits, embedded electronics, Servo Motor, DC Motor, Ultrasonic, DHT11, LED, 7-segment, OLED, Traffic LED`,
    canonical: `https://sarkitshala.site/${params.Experiment}`,
   
    author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj, Abhishek Kumar)'
  };
}



  export async function generateStaticParams() {
    let response;
    
  
    response = await getData(`https://sarkitshala.site/api/experiments/Arduino`);
  
    const data = await response;
    const posts = data.experiments || [];
  
    return posts.map((post) => ({
      ExperimentId: String(post.ExperimentId),
    }));
  }
  



export default async function Page({ params }) {
  console.log(params)
  const { Experiment } = await params; 

 
  const data = await getData(`https://sarkitshala.site/api/experiments/Arduino`, Experiment);
  
  return (
    <>
     
    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-740px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1 className="text-center capitalize md:text-3xl text-xl font-bold">{data.ExperimentName}</h1>

        {data.ExperimentId=='5'|| data.ExperimentId=='4'?<div className="mt-8 ml-[-10px] md:ml-32 md:mt-4">
          <Image
            width={470}
            height={200}
            className="md:ml:2 md:h-52 md:w-[500px]   md:h-[280px] w-full"
            src={data.image1}
            alt={`${data.ExperimentName} - Experiment Image `}
          />
        </div>:<Image
            width={600}
            height={200}
            className=" md:mt-4 md:h-[300px] md:w-fit sm:h-fit sm:w-full md:ml-24 mt-10 "
            src={data.image1}
            alt={`${data.ExperimentName} - Experiment Image `}
          />}

        <h2 className="text-sm mt-6 font-bold p-1">{data.madeBy}</h2>
        <p className="mt-2 ">{data.madeByinfo}</p>
        <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
        <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
        <h2 className="text-2xl mt-8 font-bold ">{data.overview}</h2>
        <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
        <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

        <div className="mt-12 md:ml-20">
         {data.ExperimentId == '1' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' ||data.ExperimentId == '6' || data.ExperimentId == '7' || data.ExperimentId == '8'  || data.ExperimentId == '9' || data.ExperimentId == '10' || data.ExperimentId =='11'? 
         <Image
            width={500}
            height={440}
            className="   w-full h-full md:ml-4"
            src={data.image2} 
            alt={`${data.ExperimentName} - Specifications `}
          />: <Image
          width={450}
          height={400}
          className="ml-2 md:h-fit md:w-fit md:ml-4 bg-none "
          src={data.image2}
          alt={`${data.ExperimentName} - Specifications `}
        />}
        
        </div>

       
        {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId=='3'  || data.ExperimentId=='4' || data.ExperimentId=='5'|| data.ExperimentId=='6'|| data.ExperimentId=='7'|| data.ExperimentId=='8'|| data.ExperimentId=='9'|| data.ExperimentId=='10' || data.ExperimentId=='11' ? (
        <div>
          <h2 className="mt-12 capitalize text-2xl md:mt-10 md:text-2xl font-bold md:font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="mt-12 capitalize rounded ml-10 md:ml-44 md:mt-12 md:rounded">
            <Image height={300} width={450} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>

          <h2 className="mt-12 capitalize text-2xl md:mt-10 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="mt-12 md:ml-24 md:mt-12 w-fit h-fit">
            <Image height={400} width={500} src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
          </div>
        </div>
      ) : (
        ''
      )}



      {data.ExperimentId == '12'  ? (
        <div>
          <h2 className="mt-12 capitalize text-2xl md:mt-6 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-12 mt-8 md:ml-32 md:mt-12 md:ml-60">
            <Image height={100} width={350} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `} />
          </div>
          <div className="mt-12 text-2xl md:mt-8 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-12 mt-6 md:ml-32 md:mt-8 md:mt-10  md:ml-60 ">
            <Image height={100} width={350} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="mt-12  capitalize text-2xl md:mt-8 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-12 mt-8 md:ml-60 md:mt-4 ">
            <Image height={100} width={450} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}

{data.ExperimentId == '13'  ? (
        <div className="md:mt-12 mt-12">
          <h2 className="mt-12 text-2xl capitalize md:mt-4 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-12 md:ml-32 md:mt-12 md:ml-60">
            <Image height={100} width={350} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>
          <div className="mt-12 capitalize text-2xl md:mt-8 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Arduino
          </h2>
          </div>
          <div className="ml-2 mt-12 md:ml-32 md:mt-4 md:mt-12  md:ml-60 ">
            <Image height={100} width={350} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="mt-12 capitalize text-2xl md:mt-6 md:text-2xl font-bold">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-12 md:ml-60 md:mt-8 ">
            <Image height={100} width={450} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}

      
{data.ExperimentId == '14'  ? (
        <div className="md:mt-20">
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl font-bold ">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
            <Image height={100} width={400} src={data.image3} alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>
          <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 font-bold ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-2 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
            <Image height={100} width={300} src={data.image4} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl font-bold ">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-10 md:ml-40 md:mt-10 ">
            <Image height={100} width={570} src={data.image5} className="md:mt-10" alt={`${data.ExperimentName} - Circuit Diagram`}/>
          </div>
        </div>
      ) : (
        ''
      )}
    {data.ExperimentId=='14'?'':<div><h1 className="text-2xl mt-20 font-bold">Steps:</h1>
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


  
        <h2 className="text-2xl mt-10 font-bold ">Code:</h2>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

      
        <h3 className="text-2xl mt-6 font-bold ">Conclusion</h3>
        <p className="mt-6">{data.result}</p>
    
    </div>
  </>

  );
}
