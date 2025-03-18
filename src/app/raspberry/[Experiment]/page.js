
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import getData from "@/app/apiCall";


const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });
export async function generateMetadata({ params }) {
 
  try {
    const ExperimentName = await getData(`https://sarkitshala.com/api/experiments/ResMeta`, params.Experiment);
  
    const generateSeoDescription = (text, maxLength = 160) => {
      return text.length > maxLength 
        ? `${text.substring(0, maxLength).trim()}...` 
        : text.trim();
    };
    
   
    return {
      title: ` ${ExperimentName.ExperimentName} – Sarkitshala `,
      description:  generateSeoDescription(ExperimentName.overviewinfo1),
      url: `https://sarkitshala.com/raspberry/${params.Experiment}`,
      siteName: "sarkitshala.com",
      openGraph: {
        title: `${ExperimentName.ExperimentName} - Raspberry Pi Project`,
        description:  generateSeoDescription(ExperimentName.overviewinfo1),
        url: `https://sarkitshala.com/raspberry/${params.Experiment}`,
        images: [
          {
            url: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: `${ExperimentName.ExperimentName} Experiment Image`,
          }
        ]
      },
      keywords: [
        `${ExperimentName.ExperimentName}`, 
        "Raspberry Pi Projects", 
        "DHT11 Sensor",
        "GPIO Pins",
        'DHT11',
        "LED",
        
      ],
      

      canonical: `https://sarkitshala.com/raspberry/${params.Experiment}`,
      author: 'Sarkitshala Team',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: `${ExperimentName.ExperimentName} - Raspberry Pi Project`,
        description:  generateSeoDescription(ExperimentName.overviewinfo1),
        image: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
      }
    };
  } catch (error) {
    console.error('Error fetching experiment data:', error.message);
    return {
      title: 'Explore Raspberry Pi Projects & Tutorials - Sarkitshala',
      description: 'Discover a range of Raspberry Pi tutorials and projects with detailed guides.',
      url: 'https://sarkitshala.com',
      siteName: "sarkitshala.com",
      openGraph: {
        title: 'Explore Raspberry Pi Projects & Tutorials - Sarkitshala',
        description: 'Discover a range of Raspberry Pi tutorials and projects with detailed guides.',
        images: [{ url:'https://sarkitshala.com/opengraph-image.jpg', 
         width: 1200,
         height: 630,
          alt: `Experiment Image`,
         }],
      },
      canonical: 'https://sarkitshala.com/raspberry',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: 'Explore Raspberry Pi Projects & Tutorials - Sarkitshala',
        description: 'Explore various Raspberry Pi experiments and projects.',
         image: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg'
      }
    };
  }
  
}

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
      
    if (!data) {
     
        return <p><Loading/></p>;
      }
      
      

    return (
    <>
      <div className="h-fit w-full p-2 text-wrap bg-white bg-cover rounded-xl leading-10 text-justify  

      md:h-fit md:w-[790px] md:ml-[330px]  md:mt-28 2xl:ml-[400px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
       
 
  

          <h1 className="text-center capitalize md:text-2xl text-xl font-bold 
          md:text-center md:text-2xl hover:text-blue-500">{data.ExperimentName}</h1>
          
        
       
            <Image
              className=" md:ml-28 md:mt-4 ml-1 rounded mt-4 md:w-[500px]"
               sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
              src={data.image1}
              alt={`${data.ExperimentName} - Experiment Image`}
              width={470}  
              height={400} 
              objectFit="cover"
             
            />
         
         

          <h2 className=" text-sm mt-4 md:text-sm md:mt-2 font-bold hover:text-blue-500">{data.madeBy}</h2>
          <p className="md:mt-6 mt-6" id="introduction">{data.madeByinfo1}</p>
          <p className="md:mt-6 mt-6">{data.madeByinfo2}</p>
          <h2 className="md:text-2xl md:mt-10 text-lg  font-bold mt-10 hover:text-blue-500" id="Overview">{data.overview}</h2>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo1}</p>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo2}</p>

          <div className="md:leading-10 ">
            <p className="md:mt-10 md:text-2xl mt-10 text-lg  font-bold hover:text-blue-500" id="Hardware-Components">{data.Material}</p>
            {data.Material1 && <p className="md:ml-10 md:mt-4 mt-4">1: {data.Material1}</p>}
            {data.Material2 && <p className="md:ml-10 md:mt-2 mt-4">2: {data.Material2}</p>}
            {data.Material3 && <p className="md:ml-10 md:mt-2 mt-4">3: {data.Material3}</p>}
            {data.Material4 && <p className="md:ml-10 md:mt-2 mt-4">4: {data.Material4}</p>}
            {data.Material5 && <p className="md:ml-10 md:mt-2 mt-4">5: {data.Material5}</p>}
          </div>


        
            <div className="md:ml-20 mt-10 ">
              <Image
                src={data.image2}
                alt={`${data.ExperimentName} - Specifications`} 
                width={400}
                height={300}
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                className="md:ml-10 mt-4 md:w-fit h-fit"
                objectFit="cover"
              />
            </div>
         
            <h2 className="md:text-2xl md:mt-20 text-lg  mt-8 hover:text-blue-500" id="Pin-Diagram">
            {data.pinDiagramInfo}
          </h2>
         
            <div className="md:ml-28 mt-4 md:mt-12">
              <Image
                src={data.image3}
                alt={`${data.ExperimentName} - Pin Diagram`}
                width={384}
                height={320}
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"
                objectFit="cover"
              />
            </div>
        

         

        
          
           
  
          <h2 className="md:mt-10 md:text-2xl text-lg mt-8  hover:text-blue-500"  id="Circuit-Diagram">
            {data.CircuitDiagramInfo}
          </h2>

         
          <div className="md:ml-44 md:mt-12">
              <Image
                src={data.image4}
                alt={`${data.ExperimentName} - Circuit Diagram`}
                width={402}
                height={176}
                 
                objectFit="cover"
              />
            </div>
      
          <h3 className="md:text-2xl md:mt-6 font-bold text-lg  mt-8 hover:text-blue-500" id="Steps">Steps</h3>
          <div className="md:leading-10">
            <p className="md:mt-4">{data.step}</p>
            {data.step1 && <p className="md:mt-2 mt-4">1: {data.step1}</p>}
            {data.step2 && <p className="md:mt-2">2: {data.step2}</p>}
            {data.step3 && <p className="md:mt-2">3: {data.step3}</p>}
            {data.step4 && <p className="md:mt-2">4: {data.step4}</p>}
            {data.step5 && <p className="md:mt-2">5: {data.step5}</p>}
            {data.step6 && <p className="md:mt-2">6: {data.step6}</p>}
            {data.step7 && <p className="md:mt-2">7: {data.step7}</p>}
            {data.step8 && <p className="md:mt-2">8: {data.step8}</p>}
          </div>

          <h3 className="md:mt-4 md:text-2xl text-lg font-bold mt-8 hover:text-blue-500" id="Code">Code</h3>
          <CodeBox num={data.ExperimentId} exNam='Raspberry' language={'c'} />
          
          <h3 className="md:text-2xl md:mt-4 text-lg  font-bold mt-8 hover:text-blue-500" id="Conclusion">Conclusion</h3>
          <p className="md:mt-4">{data.result}</p>
       
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
