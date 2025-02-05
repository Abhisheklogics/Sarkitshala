
import Image from "next/image";
import dynamic from "next/dynamic";

import getData from "@/app/apiCall";


const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });
export async function generateMetadata({ params }) {
 
  try {
    const ExperimentName = await getData(`https://sarkitshala.com/api/experiments/ResMeta`, params.Experiment);
    if(ExperimentName.ExperimentName.includes('Interfacing'))
    {
      ExperimentName.ExperimentName= ExperimentName.ExperimentName.replace('Interfacing','Interface')
    }
    const generateSeoDescription = (text, maxLength = 160) => {
      const truncatedText = text.length > maxLength 
          ? `${text.slice(0, text.lastIndexOf(' ', maxLength)).trim()}...` 
          : text.trim();
      return `${truncatedText} Discover Raspberry Pi projects on Sarkitshala.`;
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
          
         {data.ExperimentId != '3'  ?
       
            <Image
              className=" md:ml-28 md:mt-4 ml-1 rounded mt-4 md:w-[500px]"
              src={data.image1}
              alt={`${data.ExperimentName} - Experiment Image`}
              width={470}  
              height={400} 
              objectFit="cover"
              loading="lazy"
            />
         :
           <Image
           className="md:ml-28 md:mt-4  ml-1 rounded mt-2 w-full mt-4 md:w-[500px]"
           src={data.image1}
           alt={`${data.ExperimentName} - Experiment Image`} 
            width={470}  
           height={200} 
           objectFit="cover"
            loading="lazy"
         />
          }
         

          <h2 className=" text-sm mt-4 md:text-sm md:mt-2 font-bold hover:text-blue-500">{data.madeBy}</h2>
          <p className="md:mt-6 mt-6">{data.madeByinfo1}</p>
          <p className="md:mt-6 mt-6">{data.madeByinfo2}</p>
          <h2 className="md:text-2xl md:mt-10 text-lg  font-bold mt-10 hover:text-blue-500">{data.overview}</h2>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo1}</p>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo2}</p>

          <div className="md:leading-10 ">
            <p className="md:mt-10 md:text-2xl mt-10 text-lg  font-bold hover:text-blue-500">{data.Material}</p>
            {data.Material1 && <p className="md:ml-10 md:mt-4 mt-4">1: {data.Material1}</p>}
            {data.Material2 && <p className="md:ml-10 md:mt-2 mt-4">2: {data.Material2}</p>}
            {data.Material3 && <p className="md:ml-10 md:mt-2 mt-4">3: {data.Material3}</p>}
            {data.Material4 && <p className="md:ml-10 md:mt-2 mt-4">4: {data.Material4}</p>}
            {data.Material5 && <p className="md:ml-10 md:mt-2 mt-4">5: {data.Material5}</p>}
          </div>

          {data.ExperimentId === '7' && <h2 className="text-lg ">{data.CircuitDiagramInfo}</h2>}
          
          {data.ExperimentId === '7' || data.ExperimentId != '5' ? (
            <div className="md:ml-20 mt-10 ">
              <Image
                src={data.image2}
                alt={`${data.ExperimentName} - Specifications`} 
                width={400}
                height={300}
                loading="lazy"
                className="md:ml-10 mt-4 md:w-fit h-fit"
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="md:ml-28 md:mt-12   mt-10">
              <Image
                src={data.image2}
                alt={`${data.ExperimentName} - Specifications`} 
                width={484}  
                height={320} 
                 loading="lazy"
                 className="md:ml-32 "
                objectFit="cover"
              />
            </div>
          )}
          
          {data.ExperimentId === '8' && (
            <div className="md:ml-28 mt-4 md:mt-12">
              <Image
                src={data.image3}
                alt={`${data.ExperimentName} - Pin Diagram`}
                width={384}
                height={320}
                 loading="lazy"
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:text-2xl md:mt-20 text-lg  mt-8 hover:text-blue-500" : "md:text-2xl text-lg font-bold md:mt-16 text-2xl mt-8 hover:text-blue-500"}>
            {data.pinDiagramInfo}
          </h2>

          {data.ExperimentId == '7' ? (
            <div className="md:ml-44 md:mt-12">
              <Image
                src={data.image4}
                alt={`${data.ExperimentName} - Circuit Diagram`}
                width={402}
                height={176}
                 loading="lazy"
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="md:ml-36 md:mt-12 mt-12 ml-[-40px]">
              <Image
                src={data.image3}
                alt={`${data.ExperimentName} - Pin Diagram`}
                width={400}
                height={300}
                 loading="lazy"
                className=" md:w-fit ml-6"
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:mt-10 md:text-2xl text-lg mt-8  hover:text-blue-500" : "md:mt-4 font-bold md:text-2xl text-lg mt-10 hover:text-blue-500"}>
            {data.CircuitDiagramInfo}
          </h2>

          {data.ExperimentId == '7'  ? (
            <div className="md:ml-32 mt-10 ml-4 ml-10 ">
              <Image
                src={data.image5}
                alt={`${data.ExperimentName} - Circuit Diagram`}
                width={400}
                height={330}
               loading="lazy"
                objectFit="cover"
              />
            </div>
          ):<div className="md:ml-32 mt-10  ml-10 ">
          <Image
            src={data.image4}
            alt={`${data.ExperimentName} - Circuit Diagram`}
            width={400}
            height={330}
             loading="lazy"
            className="mt-14"
            objectFit="cover"
          />
        </div>}

          {data.ExperimentId === '8' && (
            <div className="md:ml-44 md:mt-10">
              <Image
                src={data.image5}
                alt={`${data.ExperimentName} - Circuit Diagram`}
                width={192}
                height={240}
                 loading="lazy"
                objectFit="cover"
              />
            </div>
          )}

          <h3 className="md:text-2xl md:mt-6 font-bold text-lg  mt-8 hover:text-blue-500">Steps</h3>
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

          <h3 className="md:mt-4 md:text-2xl text-lg font-bold mt-8 hover:text-blue-500">Code</h3>
          <CodeBox num={data.ExperimentId} exNam='Raspberry' language={'c'} />
          
          <h3 className="md:text-2xl md:mt-4 text-lg  font-bold mt-8 hover:text-blue-500">Conclusion</h3>
          <p className="md:mt-4">{data.result}</p>
       
      </div>
    </>
  );
}
/*
import Image from "next/image";
import dynamic from "next/dynamic";
import getData from "@/app/apiCall";
const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });
const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });

export async function generateMetadata({ params }) {
  try {
    const ExperimentName = await getData(`https://sarkitshala.com/api/experiments/ResMeta`, params.Experiment);
    if (ExperimentName.ExperimentName.includes('Interfacing')) {
      ExperimentName.ExperimentName = ExperimentName.ExperimentName.replace('Interfacing', 'Interface');
    }
    return {
      title: `Learn How to ${ExperimentName.ExperimentName}`,
      description: ExperimentName.overviewinfo1 || 'Explore Raspberry Pi projects with step-by-step guides and tutorials.',
      url: `https://sarkitshala.com/raspberry/${params.Experiment}`,
      siteName: "sarkitshala.com",
      openGraph: {
        title: `${ExperimentName.ExperimentName} - Raspberry Pi Project`,
        description: ExperimentName.overviewinfo1 || 'Explore various Raspberry Pi experiments and projects.',
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
      keywords: `DHT11 Sensor, Raspberry Pi Projects, ${ExperimentName.ExperimentName}, Circuit Design, GPIO Pins, Python Programming`,
      canonical: `https://sarkitshala.com/raspberry/${params.Experiment}`,
      author: 'Sarkitshala Team',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: `${ExperimentName.ExperimentName} - Raspberry Pi Project`,
        description: ExperimentName.overviewinfo1 || 'Explore innovative Raspberry Pi projects.',
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
        images: [{ url: 'https://sarkitshala.com/opengraph-image.jpg', width: 1200, height: 630, alt: `Experiment Image` }],
      },
      canonical: 'https://sarkitshala.com/raspberry',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: 'Explore Raspberry Pi Projects & Tutorials - Sarkitshala',
        description: 'Explore various Raspberry Pi experiments and projects.',
        image: 'https://sarkitshala.com/opengraph-image.jpg'
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

  const data = await getData(`https://sarkitshala.com/api/experiments/Res`, Experiment);

  if (!data) {
    return <p><Loading /></p>;
  }

  return (
    <div className="bg-white p-6 md:p-8 max-w-4xl mx-auto rounded-lg shadow-md space-y-6">
      <h1 className="text-center text-2xl font-semibold text-gray-800">{data.ExperimentName}</h1>

      {data.ExperimentId !== '3' ? (
        <div className="flex justify-center">
          <Image
            className="rounded-md shadow-lg"
            src={data.image1}
            alt={`${data.ExperimentName} - Experiment Image`}
            width={500}
            height={400}
            objectFit="cover"
            loading="lazy"
          />
        </div>
      ) : (
        <Image
          className="w-full rounded-md shadow-lg"
          src={data.image1}
          alt={`${data.ExperimentName} - Experiment Image`}
          width={500}
          height={300}
          objectFit="cover"
          loading="lazy"
        />
      )}

      <div className="space-y-4">
        <h2 className="text-lg font-medium text-gray-700">{data.madeBy}</h2>
        <p>{data.madeByinfo1}</p>
        <p>{data.madeByinfo2}</p>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mt-6">{data.overview}</h2>
      <p>{data.overviewinfo1}</p>
      <p>{data.overviewinfo2}</p>

      <div className="space-y-2">
        <h3 className="text-lg font-semibold text-gray-800">{data.Material}</h3>
        {data.Material1 && <p>1: {data.Material1}</p>}
        {data.Material2 && <p>2: {data.Material2}</p>}
        {data.Material3 && <p>3: {data.Material3}</p>}
        {data.Material4 && <p>4: {data.Material4}</p>}
        {data.Material5 && <p>5: {data.Material5}</p>}
      </div>

      {data.ExperimentId === '7' && <h3>{data.CircuitDiagramInfo}</h3>}

      <div className="space-y-6">
        <h2 className="text-xl font-semibold text-gray-800">{data.pinDiagramInfo}</h2>
        <Image
          src={data.image3}
          alt={`${data.ExperimentName} - Pin Diagram`}
          width={400}
          height={300}
          loading="lazy"
          objectFit="cover"
          className="rounded-md"
        />
        <h3 className="text-xl font-semibold text-gray-800 mt-6">{data.CircuitDiagramInfo}</h3>
        <Image
          src={data.image4}
          alt={`${data.ExperimentName} - Circuit Diagram`}
          width={400}
          height={330}
          loading="lazy"
          objectFit="cover"
          className="rounded-md"
        />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Steps</h3>
      <div>
        <p>{data.step}</p>
        {data.step1 && <p>1: {data.step1}</p>}
        {data.step2 && <p>2: {data.step2}</p>}
        {data.step3 && <p>3: {data.step3}</p>}
        {data.step4 && <p>4: {data.step4}</p>}
        {data.step5 && <p>5: {data.step5}</p>}
        {data.step6 && <p>6: {data.step6}</p>}
        {data.step7 && <p>7: {data.step7}</p>}
        {data.step8 && <p>8: {data.step8}</p>}
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Code</h3>
      <CodeBox num={data.ExperimentId} exNam="Raspberry" language="c" />

      <h3 className="text-xl font-semibold text-gray-800 mt-6">Conclusion</h3>
      <p>{data.result}</p>
    </div>
  );
}

*/