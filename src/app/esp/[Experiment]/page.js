


import dynamic from "next/dynamic";
import Image from "next/image";
import getData from "@/app/apiCall";
const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
const Esp = dynamic(() => import('@/components/Esp'), {ssr:false})
export async function generateMetadata({ params }) {
  let ExperimentName;
  try {
    ExperimentName = await getData(`https://sarkitshala.com/api/experiments/EspMeta`, params.Experiment);

    if (ExperimentName.ExperimentName.includes('Interfacing')) {
      ExperimentName.ExperimentName = ExperimentName.ExperimentName.replace('Interfacing', 'Interface');
    }

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
   if(data['ExperimentId']=='8' || data['ExperimentId']=='9' || data['ExperimentId']=='10' || data['ExperimentId']=='11' || data['ExperimentId']=='12'
     || data['ExperimentId']=='13' || data['ExperimentId']=='14' || data['ExperimentId']=='15' || data['ExperimentId']=='16' || data['ExperimentId']=='17' || data['ExperimentId']=='18'
      || data['ExperimentId']=='19' || data['ExperimentId']=='20' || data['ExperimentId']=='21' || data['ExperimentId']=='22' || data['ExperimentId']=='23' || data['ExperimentId']=='24'
      || data['ExperimentId']=='25' || data['ExperimentId']=='26' || data['ExperimentId']=='27' || data['ExperimentId']=='28' || data['ExperimentId']=='29' || data['ExperimentId']=='30'
       || data['ExperimentId']=='31' || data['ExperimentId']=='32' || data['ExperimentId']=='33' || data['ExperimentId']=='34' || data['ExperimentId']=='35' || data['ExperimentId']=='36'
       || data['ExperimentId']=='37' || data['ExperimentId']==''38 || data['ExperimentId']=='39' || data['ExperimentId']=='40' || data['ExperimentId']=='41' || data['ExperimentId']=='42'
     )
   {
     return(<Esp data={data}/>)
   }

  return (
    <>
    <div className="h-fit w-full p-4 font-serif  bg-cover rounded-xl leading-10 text-justify  
        md:h-fit md:w-[770px] md:text-md  md:ml-[380px] md:mt-[100px]
        md:p-5  md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap">
         
      <h1 className=" font-semibold text-2xl text-center hover:text-blue-500">{data.ExperimentName}</h1>
      
      <div className=" md:mt-6 mt-4">
        <Image
            width={500}
            height={440}
            
             sizes="(max-width: 700px) 100vw, (max-width: 700px) 50vw, 500px "
            className="   w-full h-full "
            src={data.image1} 
            alt={`${data.ExperimentName} - Experiment Image`}
          />
          </div>


      <h2 className="md:mt-4 md:text-sm md:ml-2 mt-4 text-sm ml-2 font-bold hover:text-blue-500">Written By: Aman Raj</h2>
      <h2 className="md:text-sm md:mt-2">{data.madeBy}</h2>
      <p className="md:mt-2 mt-10">{data.madeByinfo}</p>
      
      <div className="bg-white p-4 border border-black">
      <h2 className="mt-2 md:mb-2">{data.overview}</h2></div>

      <div className="border border-black mt-4 hover:shadow-black bg-white">
      <h2 className="md:text-2xl p-4  text-lg   font-bold hover:text-blue-500">Hardware components</h2>
      <p className="md:mt-2">{data.component}</p>
        <Image height={400} width={700} className="md:ml-4 md:mt-2" loading="lazy" src={data.image2} alt={`${data.ExperimentName} - Specifications`} />
      </div>
      
      <div className="border border-black mt-4 p-4 bg-white">
      <h2 className="md:text-2xl  text-lg  font-semibold hover:text-blue-500">{data.pinDiagramInfo}</h2>

      {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' || data.ExperimentId == '7' ? (
        
          <Image height={600} width={400} className="md:mt-20 md:ml-40 mt-8 rounded" loading="lazy" src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`}/>
       
      ) : (
        <div className="md:ml-20 md:h-[300px]">
          <Image height={300} width={200} className="ml-40 md:mt-24" loading="lazy" src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`} />
        </div>
      )}</div>

      <div className="mt-4 p-4 border border-black bg-white">
      <h2 className="md:text-2xl font-bold text-lg hover:text-blue-500">{data.CircuitDiagramInfo}</h2>
      <Image height={400} width={500} className="md:ml-24    mt-10" loading="lazy" src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
      </div>


      <div className="mt-4 p-4 bg-white border border-black ">
      <h3 className="md:text-2xl text-lg hover:text-blue-500 font-bold">Steps</h3>
        <p className="md:mt-4 ">{data.step}</p>
        {data.step1 && <p className="md:mt-2">1. {data.step1}</p>}
        {data.step2 && <p className="md:mt-2">2. {data.step2}</p>}
        {data.step3 && <p className="md:mt-2">3. {data.step3}</p>}
        {data.step4 && <p className="md:mt-2">4. {data.step4}</p>}
        {data.step5 && <p className="md:mt-2">5. {data.step5}</p>}
        {data.step6 && <p className="md:mt-2">6. {data.step6}</p>}
        {data.step7 && <p className="md:mt-2">7. {data.step7}</p>}
        {data.step8 && <p className="md:mt-2">8. {data.step8}</p>}
        {data.step9 && <p className="md:mt-2">9. {data.step9}</p>}
        {data.step10 && <p className="md:mt-2">10. {data.step10}</p>}
        {data.step11 && <p className="md:mt-2">11. {data.step11}</p>}
        {data.step12 && <p className="md:mt-2">12. {data.step12}</p>}
        {data.step13 && <p className="md:mt-2">13. {data.step13}</p>}
        {data.step14 && <p className="md:mt-2">14. {data.step14}</p>}
        {data.step15 && <p className="md:mt-2">15. {data.step15}</p>}
        {data.step16 && <p className="md:mt-2">16. {data.step16}</p>}
        {data.step17 && <p className="md:mt-2">17. {data.step17}</p>}
        {data.step18 && <p className="md:mt-2">18. {data.step18}</p>}
        {data.step19 && <p className="md:mt-2">19. {data.step19}</p>}
        {data.step20 && <p className="md:mt-2">20. {data.step20}</p>}
      </div>


      <div className="mt-4 p-4 border border-black bg-white">
      <h3 className="md:mt-4 md:text-2xl text-lg font-bold hover:text-blue-500">Code</h3>
      <CodeBox language={'c'} num={data.ExperimentId} exNam='esp' />
      </div>

      <div className="mt-4 p-4 border border-black bg-white shadow hover:black">
      <h3 className="md:text-2xl text-lg hover:text-blue-500 font-bold">Conclusion</h3>
      <p className="md:mt-2">{data.result}</p>
    </div></div>
   
  </>
  );
}
