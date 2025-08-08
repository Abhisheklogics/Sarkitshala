
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";

const CodeBox = dynamic(() => import('@/components/code.jsx'));
const AllCom = dynamic(() => import('@/components/AllCom'))
const LEDArduino =dynamic(()=>import('@/components/Led'))

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
export async function generateMetadata({ params }) {
  const ExperimentData = await getData(`https://sarkitshala.com/api/experiments/ArduinoMeta`, params.Experiment);

  const experimentTitle = ExperimentData.title || "Arduino Experiment";
  const experimentOverview = ExperimentData.metaDescription || "Learn Arduino interfacing step by step. Explore various Arduino experiments and tutorials with detailed guides.";
  const experimentImage = ExperimentData.image1 || 'https://sarkitshala.com/opengraph-image.jpg';
  const experimentSlug = `https://sarkitshala.com/arduino/${params.Experiment}`;
  const metadataBase = new URL('https://sarkitshala.com');
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: experimentTitle,
    description: experimentOverview,
    author: {
      "@type": "Organization",
      name: "Sarkitshala Team"
    },
    publisher: {
      "@type": "Organization",
      name: "Sarkitshala",
      logo: {
        "@type": "ImageObject",
        url: "https://sarkitshala.com/logo.jpg"
      }
    },
    datePublished: new Date().toISOString(),
    dateModified: new Date().toISOString(),
    image: experimentImage
  };

  return {
    metadataBase,
    title: `${experimentTitle} | Sarkitshala`,
    description: `${experimentOverview}`,

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

    canonical: experimentSlug,

    alternates: {
      canonical: experimentSlug,
      languages: {
        "en-US": `https://sarkitshala.com/en/arduino/${params.Experiment}`,
        "hi-IN": `https://sarkitshala.com/hi/arduino/${params.Experiment}`
      }
    },

    author: "Sarkitshala Team (Amarjeet Singh Chauhan, Abhishek Kumar, Aman Raj)",

    structuredData: JSON.stringify(structuredData), 
  };
}






  



export default async function Page({ params }) {

  const { Experiment } = await params; 

 
  const data = await getData(`https://sarkitshala.com/api/experiments/Arduino`, Experiment);
 
  if(data.ExperimentId == 1)
    {
    
      return(<LEDArduino data={data} />)
    
    }
    
if(data['ExperimentId'] == '9' || data['ExperimentId'] == '11' || data['ExperimentId'] == '15' || data['ExperimentId']=='16' || data['ExperimentId']=='17' || data['ExperimentId']=='18' || data['ExperimentId']=='19'  || data['ExperimentId']=='20' || data['ExperimentId']=='21' 
  || data['ExperimentId'] == '22' || data['ExperimentId'] == '23' || data['ExperimentId'] == '24' || data['ExperimentId'] == '25' || data['ExperimentId'] == '26' || data['ExperimentId'] == '27' || data['ExperimentId'] == '28'
  || data['ExperimentId'] == '29' || data['ExperimentId'] == '30' || data['ExperimentId'] == '31' || data['ExperimentId'] == '32' || data['ExperimentId'] == '33' ||
  data['ExperimentId'] == '34' || data['ExperimentId'] == '35' || data['ExperimentId'] == '36' || data['ExperimentId'] == '37' || data['ExperimentId'] == '38' || data['ExperimentId'] == '39'
  || data['ExperimentId'] == '40'|| data['ExperimentId'] == '41'|| data['ExperimentId'] == '42'|| data['ExperimentId'] == '43'|| data['ExperimentId'] == '44'|| data['ExperimentId'] == '45'
  || data['ExperimentId'] == '46'|| data['ExperimentId'] == '47'|| data['ExperimentId'] == '48'|| data['ExperimentId'] == '49'|| data['ExperimentId'] == '50'|| data['ExperimentId'] == '51'
  || data['ExperimentId'] == '52'|| data['ExperimentId'] == '53'|| data['ExperimentId'] == '54'|| data['ExperimentId'] == '55'|| data['ExperimentId'] == '56'|| data['ExperimentId'] == '57'
  || data['ExperimentId'] == '58'|| data['ExperimentId'] == '59'|| data['ExperimentId'] == '60'|| data['ExperimentId'] == '61'|| data['ExperimentId'] == '62'|| data['ExperimentId'] == '63'
  || data['ExperimentId'] == '64'|| data['ExperimentId'] == '65'|| data['ExperimentId'] == '66'|| data['ExperimentId'] == '67'|| data['ExperimentId'] == '68'|| data['ExperimentId'] == '69'
  || data['ExperimentId'] == '70'|| data['ExperimentId'] == '71'|| data['ExperimentId'] == '72'|| data['ExperimentId'] == '73'|| data['ExperimentId'] == '74'|| data['ExperimentId'] == '75'
  || data['ExperimentId'] == '76' || data['ExperimentId'] == '77' || data['ExperimentId'] == '78' || data['ExperimentId'] == '79' || data['ExperimentId'] == '80' || data['ExperimentId'] == '81'
  || data['ExperimentId'] == '82'|| data['ExperimentId'] == '83'|| data['ExperimentId'] == '84'|| data['ExperimentId'] == '85'|| data['ExperimentId'] == '86'|| data['ExperimentId'] == '87'|| data['ExperimentId'] == '88'
  || data['ExperimentId'] == '89'|| data['ExperimentId'] == '90'|| data['ExperimentId'] == '91'|| data['ExperimentId'] == '92'|| data['ExperimentId'] == '93'|| data['ExperimentId'] == '94'
  || data['ExperimentId'] == '95'|| data['ExperimentId'] == '96'|| data['ExperimentId'] == '97'|| data['ExperimentId'] == '98'|| data['ExperimentId'] == '99'|| data['ExperimentId'] == '100'
  || data['ExperimentId'] == '101'|| data['ExperimentId'] == '102'|| data['ExperimentId'] == '103'|| data['ExperimentId'] == '104'|| data['ExperimentId'] == '105'|| data['ExperimentId'] == '106'
  || data['ExperimentId'] == '107'|| data['ExperimentId'] == '108'|| data['ExperimentId'] == '109'|| data['ExperimentId'] == '110'|| data['ExperimentId'] == '111'|| data['ExperimentId'] == '112'
  || data['ExperimentId'] == '113'|| data['ExperimentId'] == '114'|| data['ExperimentId'] == '115'|| data['ExperimentId'] == '116'|| data['ExperimentId'] == '117'|| data['ExperimentId'] == '118'
  || data['ExperimentId'] == '119'|| data['ExperimentId'] == '120'|| data['ExperimentId'] == '121'|| data['ExperimentId'] == '122'|| data['ExperimentId'] == '123'|| data['ExperimentId'] == '124'
  || data['ExperimentId'] == '125')
{

  return(<AllCom  data={data}/>)

}


  return (
    <>
  
    <div className="h-fit w-full p-5 bg-gray-100 md:bg-[#FFF0E5] bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-24 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1  className="  text-center capitalize md:text-3xl text-xl font-bold ">{data.ExperimentName}</h1>

        <Image

  src={data.image1}
  alt={`${data.ExperimentName} - Experiment Image`}
  width={data.ExperimentId === '5' || data.ExperimentId === '4' ? 300 : 500}
  height={data.ExperimentId === '5' || data.ExperimentId === '4' ? 200 : 400}
   sizes="(max-width: 768px) 100vw, (max-width: 100px) 50vw, 500px "
 className="   md:ml-28 mt-4 md:rounded "
/>
        <h2 className="text-sm mt-6 font-bold p-1 hover:text-white">{data.madeBy}</h2>
        <p className="">{data.madeByinfo}</p>
        <p className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black" id="introduction">{data.madeByinfo1}<br/>{data.madeByinfo2}</p>

        <p className="mt-4 max-w-4xl border border-black bg-white p-6 ] rounded shadow-lg ">
        <h2 className="md:text-2xl mt-8 font-bold text-lg md:mt-[-15px] hover:text-blue-500 mb-2 " id="Overview">{data.overview}</h2>{data.overviewinfo1}<br/>{data.overviewinfo2}</p>

        <div className="mt-4 border border-black max-w-4xl bg-white p-6 rounded shadow-lg ">
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
          <div className="mt-4  max-w-4xl border border-black bg-white p-6 rounded shadow-lg">
          <h2 className="hover:text-blue-500 md:mt-[-15px]  mt-12 capitalize text-lg md:text-2xl font-bold md:font-bold " id="Pin-Diagram">
            {data.pinDiagramInfo}
          </h2>
            <Image height={300} width={450}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " src={data.image3} className="md:ml-28" alt={`${data.ExperimentName} -  Pin Diagram `}/>
          </div>

          
          <div className="mt-4  max-w-4xl bg-white border border-black p-6 rounded shadow-lg">
          <h2 className="hover:text-blue-500 md:mt-[-15px]  capitalize text-lg md:text-2xl font-bold " id="Circuit-Diagram">
            {data.CircuitDiagramInfo}</h2>
            <Image  height={400} width={500}  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 500px " className="md:ml-20" src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />
          </div>
        </div>

       
     
  {data.ExperimentId !== '14' && (
  <div className="mt-4 p-6 bg-white border border-black  rounded shadow-lg max-w-4xl">
    <h3 className="md:text-2xl md:mt-[-15px] text-lg font-bold hover:text-blue-500" id="Steps">Steps</h3>
    {data.step && <p className="mt-4">{data.step}</p>}
    {data.step1 && <p className="mt-4">1. {data.step1}</p>}
    {data.step2 && <p className="mt-4">2. {data.step2}</p>}
    {data.step3 && <p className="mt-4">3. {data.step3}</p>}
    {data.step4 && <p className="mt-4">4. {data.step4}</p>}
    {data.step5 && <p className="mt-4">5. {data.step5}</p>}
    {data.step6 && <p className="mt-4">6. {data.step6}</p>}
  </div>
)}

        <p className=" mt-4 max-w-4xl bg-white p-6 border border-black rounded shadow-lg">
        <h3 className="md:text-2xl text-lg md:mt-[-15px] mb-[-50px] font-bold hover:text-blue-500" id="Code">Code</h3>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} /></p>

      
        
        <p className=" mt-4 max-w-4xl bg-white p-6 border border-black rounded shadow-lg">
        <h3 className="md:text-2xl md:mt-[-15px]  text-lg mb-2  font-bold hover:text-blue-500" id="Conclusion">Conclusion</h3>
        {data.result}</p>
    
    </div>

  </>

  );
}
