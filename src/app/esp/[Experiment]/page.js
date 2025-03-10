


import dynamic from "next/dynamic";
import Image from "next/image";
import getData from "@/app/apiCall";
import Link from "next/link";
const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
export async function generateMetadata({ params }) {
  let ExperimentName;
  try {
    ExperimentName = await getData(`https://sarkitshala.com/api/experiments/EspMeta`, params.Experiment);

   
    const generateSeoDescription = (text, maxLength = 160) => {
      const truncatedText = text.length > maxLength
        ? `${text.slice(0, text.lastIndexOf(' ', maxLength)).trim()}...`
        : text.trim();
      return `${truncatedText} Discover ESP32 projects on Sarkitshala.`;
    };

    return {
      title: ` ${ExperimentName.ExperimentName} Using ESP –Sarkitshala`,
      robots: { index: true, follow: true },
      description: generateSeoDescription(ExperimentName.overview),
      url: `https://sarkitshala.com/esp/${params.Experiment}`,
      siteName: "sarkitshala.com",
      openGraph: {
        title: `${ExperimentName.ExperimentName} | ESP32 Project Guide`,
        description: generateSeoDescription(ExperimentName.overview),
        url: `https://sarkitshala.com/esp/${params.Experiment}`,
        images: [
          {
            url: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: `${ExperimentName.ExperimentName} Project for ESP32 - Sarkitshala`
          }
        ],
        site_name: 'Sarkitshala',
        keywords: `${ExperimentName.ExperimentName}, ESP32 Projects, IoT Projects, Embedded Systems, Circuit Diagrams, Motor Control, Sound Sensor, Distance Measurement`,
      },
      canonical: `https://sarkitshala.com/esp/${params.Experiment}`,
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: `${ExperimentName.ExperimentName} - ESP32 Projects`,
        description: generateSeoDescription(ExperimentName.overview),
        image: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg'
      },
      author: 'Sarkitshala Team',
    };
  } catch (error) {
    console.error('Error fetching experiment data:', error.message);
    return {
      title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
      description: 'Discover a range of ESP32 tutorials and projects with detailed guides.',
      url: 'https://sarkitshala.com/esp',
      siteName: "sarkitshala.com",
      openGraph: {
        title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
        description: 'Discover a range of ESP32 tutorials and projects with detailed guides.',
        images: [{
          url: 'https://sarkitshala.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ESP32 Project Image - Sarkitshala'
        }],
      },
      canonical: 'https://sarkitshala.com/esp',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
        description: 'Explore various ESP32 experiments and projects.',
        image: 'https://sarkitshala.com/opengraph-image.jpg'
      }
    };
  }
}


export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Esp');
      
     
      const posts = response?.experiments || [];

      if (!Array.isArray(posts)) {
          throw new Error('Expected "experiments" to be an array.');
      }

      return posts.map((post) => ({
          ExperimentId: String(post.ExperimentId),
      }));
  } catch (error) {
      console.error('Error fetching or processing data:', error);
      return [];
  }
}


export default async function Page({ params }) {
  const { Experiment } =await params; 
  
  
  const data = await getData(`https://sarkitshala.com/api/experiments/Esp`, Experiment)
    

  return (
    <>
    <div className="h-fit w-full p-4  bg-white bg-cover rounded-xl leading-10 text-justify  
        md:h-fit md:w-[770px] md:text-md  md:ml-[320px] md:mt-[100px]
        md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap">
      
      <h1 className=" font-bold text-2xl text-center md:text-2xl hover:text-blue-500">{data.ExperimentName}</h1>
      
      <div className="md:ml-32 md:mt-6 mt-4">
        <Image height={400} width={500}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" className="rounded "  src={data.image1} alt={`${data.ExperimentName} - Experiment Image`} />
      </div>

      <h2 className="md:mt-4 md:text-sm md:ml-2 mt-4 text-sm ml-2 font-bold hover:text-blue-500">Written By: Aman Raj</h2>
      <h2 className="md:text-sm md:mt-2">{data.madeBy}</h2>
      <p className="md:mt-2 mt-10">{data.madeByinfo}</p>
      
      <h2 className="md:mt-10" id="Introduction">{data.overview}</h2>
      <h2 className="md:text-2xl md:mt-10  text-lg   font-bold mt-10 hover:text-blue-500" >Hardware components</h2>
      <p className="md:mt-4">{data.component}</p>

      <div className="md:ml-12 md:mt-8" id="Hardware-components">
        <Image height={400} width={700} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px"  className="ml-1 md:ml-[-10px]  mt-10"  src={data.image2} alt={`${data.ExperimentName} - Specifications`} />
      </div>

      <h2 className="md:text-2xl md:mt-14  text-lg  font-bold  mt-10 hover:text-blue-500" id="Pin-Diagram">{data.pinDiagramInfo}</h2>

 
        <div className="md:ml-20 md:h-[300px]">
          <Image height={300} width={200}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" className="ml-40 md:mt-24"  src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`} />
        </div>
     

      <h2 className="md:text-2xl font-bold text-lg hover:text-blue-500 mt-12" id="Circuit-Diagram">{data.CircuitDiagramInfo}</h2>

      <div className="md:ml-32 md:mt-10">
        <Image height={400} width={500} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px" className="md:ml-24    mt-10"  src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
      </div>

      <h3 className="md:text-2xl text-lg hover:text-blue-500 font-bold hover:text-blue-500 mt-10" id="Steps">Steps</h3>
      <div className="md:ml-14 leading-10 mt-4 ">
        <p className="md:mt-4 ">{data.step}</p>
        {data.step1 && <p className="md:mt-2">1: {data.step1}</p>}
        {data.step2 && <p className="md:mt-2">2: {data.step2}</p>}
        {data.step3 && <p className="md:mt-2">3: {data.step3}</p>}
        {data.step4 && <p className="md:mt-2">4: {data.step4}</p>}
        {data.step5 && <p className="md:mt-2">5: {data.step5}</p>}
        {data.step6 && <p className="md:mt-2">6: {data.step6}</p>}
        {data.step7 && <p className="md:mt-2">7: {data.step7}</p>}
        {data.step8 && <p className="md:mt-2">8: {data.step8}</p>}
        {data.step9 && <p className="md:mt-2">9: {data.step9}</p>}
        {data.step10 && <p className="md:mt-2">10: {data.step10}</p>}
        {data.step11 && <p className="md:mt-2">11: {data.step11}</p>}
        {data.step12 && <p className="md:mt-2">12: {data.step12}</p>}
        {data.step13 && <p className="md:mt-2">13: {data.step13}</p>}
        {data.step14 && <p className="md:mt-2">14: {data.step14}</p>}
        {data.step15 && <p className="md:mt-2">15: {data.step15}</p>}
        {data.step16 && <p className="md:mt-2">16: {data.step16}</p>}
        {data.step17 && <p className="md:mt-2">17: {data.step17}</p>}
        {data.step18 && <p className="md:mt-2">18: {data.step18}</p>}
        {data.step19 && <p className="md:mt-2">19: {data.step19}</p>}
        {data.step20 && <p className="md:mt-2">20: {data.step20}</p>}
      </div>

      <h3 className="md:mt-4 md:text-2xl text-lg font-bold hover:text-blue-500 mt-10" id='Code'>Code</h3>
      <CodeBox language={'c'} num={data.ExperimentId} exNam='esp' />

      <h3 className="md:text-2xl text-lg md:mt-6 mt-10 hover:text-blue-500 font-bold" id="Conclusion">Conclusion</h3>
      <p className="md:mt-6">{data.result}</p>
    </div>
    <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-1 2xl:right-2 md:top-24 md:w-fit  max-w-xs mx-auto mt-4">
      <p className="font-semibold text-lg">In this article</p>
      <div className="flex flex-col gap-2 mt-3 text-sm md:text-md ">
        <Link href="#Introduction" className="hover:text-blue-600">Introduction</Link>

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
