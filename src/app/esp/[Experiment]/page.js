


import dynamic from "next/dynamic";
import Image from "next/image";
import getData from "@/app/apiCall";
const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
export async function generateMetadata({ params }) {
  
  let ExperimentName;
  try {
   
    ExperimentName = await getData(`https://sarkitshala.site/api/experiments/Esp`, params.Experiment);
    

    if (!ExperimentName) {
      return {
        title: 'ESP-based IoT Projects - Sarkit Shala',
        robots: { index: true, follow: true },
        description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkit Shala.',
        url: 'https://sarkitshala.site',
        siteName: "sarkitshala.site",
        openGraph: {
          title: 'ESP-based IoT Projects - Sarkit Shala',
          description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkit Shala.',
          url: 'https://sarkitshala.site/',
          images: [
            { url: 'https://sarkitshala.site/', width: 1200, height: 630, alt: 'ESP IoT Projects - Sarkit Shala' }
          ],
          site_name: 'sarkitshala',
        },
        keywords: 'ESP, Dht11, IoT projects, electronics, circuit design, Arduino, sensor-based systems, smart agriculture',
        twitter: {
          card: 'summary_large_image',
          site: '@sarkitshala',
          title: 'ESP-based IoT Projects - Sarkit Shala',
          description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkit Shala.',
          image: 'https://sarkitshala.site/'
        },
        canonical: 'https://sarkitshala.site/',
      };
    }

    
    return {
      title: `${ExperimentName.ExperimentName} - ESP Project `,
      robots: { index: true, follow: true },
      description: ExperimentName.overview,
      url: `https://sarkitshala.site/${params.Experiment}`, 
      siteName: "sarkitshala.site",
      openGraph: {
        title: `${ExperimentName.ExperimentName} - ESP Project `,
        description: ExperimentName.overview,
        url: `https://sarkitshala.site/${params.Experiment}`,
        images: [
          {
            url: ExperimentName.image1 || 'https://sarkitshala.site/default-image.jpg',  
            width: 1200,
            height: 630,
            alt: `${ExperimentName.ExperimentName} - Visual representation of the experiment`
          }
        ],
        site_name: 'sarkitshala',
        keywords: `${ExperimentName.ExperimentName}, ESP, DHT11, Ultrasonic, Servo, Flame Sensor, Sound Sensor, IoT Projects, Embedded Systems, Circuit Design, Smart Agriculture`,
      },
      canonical: `https://sarkitshala.site/${params.Experiment}`,
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: ExperimentName.ExperimentName,
        description: ExperimentName.overview,
        image: ExperimentName.image1 || 'https://sarkitshala.site/default-image.jpg',  
      },
      author: 'Sarkitshala Team',
    };
  } catch (error) {
    console.error('Error fetching experiment data:', error.message);
    return {
      title: 'ESP-based IoT Projects - Sarkitshala',
      robots: { index: true, follow: true },
      description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkitshala.',
      url: 'https://sarkitshala.site',
      siteName: "sarkitshala.site",
      openGraph: {
        title: 'ESP-based IoT Projects - Sarkit Shala',
        description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkitshala.',
        url: 'https://sarkitshala.site',
        images: [
          { url: 'https://sarkitshala.site/default-image.jpg', width: 1200, height: 630, alt: 'ESP IoT Projects - Sarkitshala' }
        ],
        site_name: 'sarkitshala',
      },
      keywords: 'ESP, IoT projects, electronics, circuit design, Arduino, sensor-based systems, smart agriculture',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: 'ESP-based IoT Projects - Sarkitshala',
        description: 'Explore various ESP-based IoT projects, tutorials, and experiments at Sarkit Shala.',
        image: `${ExperimentName.image1}`
      },
      canonical: 'https://sarkitshala.site',
    };
  }
}



export async function generateStaticParams() {
  
  let response;
  
  
  response = await getData(`https://sarkitshala.site/api/experiments/Esp`);
  
  const data = await response;
 
 
  const posts = data.experiments || []; 

  if (!Array.isArray(posts)) {
    throw new Error('Expected experiments to be an array');
  }

 
  return posts.map((post) => ({
    ExperimentId: String(post.ExperimentId),
  }));
}

export default async function Page({ params }) {
  const { Experiment } =await params; 
  
  
  const data = await getData(`https://sarkitshala.site/api/experiments/Esp`, Experiment)
    

  return (
    <>
    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
        md:h-fit md:w-[770px] md:text-md  md:ml-[300px] md:mt-[100px]
        md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap">
      
      <h1 className=" font-bold text-2xl text-center md:text-2xl">{data.ExperimentName}</h1>
      
      <div className="md:ml-32 md:mt-6 mt-6">
        <Image height={400} width={500} className=" " loading="lazy" src={data.image1} alt={`${data.ExperimentName} - Experiment Image`} />
      </div>

      <h1 className="md:mt-4 md:text-sm md:ml-2 mt-4 text-sm ml-2 font-bold">Written By: Aman Raj</h1>
      <h2 className="md:text-sm md:mt-2">{data.madeBy}</h2>
      <p className="md:mt-2 mt-10">{data.madeByinfo}</p>
      
      <h2 className="md:mt-10">{data.overview}</h2>
      <h2 className="md:text-2xl md:mt-10  text-2xl   font-bold mt-10">Hardware components</h2>
      <p className="md:mt-4">{data.component}</p>

      <div className="md:ml-12 md:mt-8">
        <Image height={400} width={700} className="ml-1 md:ml-[-10px] w-fit h-fit mt-10" loading="lazy" src={data.image2} alt={`${data.ExperimentName} - Specifications`} />
      </div>

      <h2 className="md:text-2xl md:mt-14  text-2xl  font-bold  mt-10">{data.pinDiagramInfo}</h2>

      {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' || data.ExperimentId == '7' ? (
        <div className="">
          <Image height={500} width={400} className="md:mt-20 md:ml-40 mt-10" loading="lazy" src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`}/>
        </div>
      ) : (
        <div className="md:ml-20 md:h-[300px]">
          <Image height={300} width={200} className="ml-40 md:mt-24" loading="lazy" src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`} />
        </div>
      )}

      <h2 className="md:text-2xl font-bold text-2xl  mt-12">{data.CircuitDiagramInfo}</h2>

      <div className="md:ml-32 md:mt-10">
        <Image height={400} width={500} className="md:ml-24    mt-10" loading="lazy" src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
      </div>

      <h1 className="md:text-2xl text-2xl  font-bold mt-10">Steps:</h1>
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

      <h2 className="md:mt-4 md:text-2xl text-2xl font-bold mt-10">Code:</h2>
      <CodeBox language={'c'} num={data.ExperimentId} exNam='esp' />

      <h3 className="md:text-2xl text-2xl md:mt-6 mt-10  font-bold">Result</h3>
      <p className="md:mt-6">{data.result}</p>
    </div>
  </>
  );
}
