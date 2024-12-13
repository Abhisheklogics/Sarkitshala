
import getData from "@/app/apiCall";
import dynamic from "next/dynamic";
import Image from "next/image";

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
const Loading = dynamic(() => import('@/components/loading/Loading'), {
  ssr: false
});
export async function generateStaticParams() {
  console.log('Fetching from:', `${process.env.DOMAIN}/api/experiments/Arduino`);
  
  let res = await fetch(`${process.env.DOMAIN}/api/experiments/Arduino`);
  console.log('Response:', res);

  let data = await res.json();
  console.log('Data:', data);

  return data.map(({ ExperimentId }) => ExperimentId);
}

export const metadata = {
  title: 'Arduino with LED: A Complete Guide for Beginners', // More descriptive title
  description: 'Learn how to use Arduino with LED in your projects. Explore step-by-step instructions for beginners to create amazing circuits and experiments using Arduino and LED technology.',
  openGraph: {
    title: 'Arduino with LED: A Complete Guide for Beginners',
    description: 'Step-by-step guide to using Arduino with LED, including basic tutorials and circuit design tips. Perfect for beginners exploring electronics and programming.',
    url: 'https://adhayanshala.netlify.app/arduino-with-led', // Dynamic URL (update with actual URL)
    images: [
      {
        url: 'https://example.com/path-to-image.jpg', // Use a relevant and high-quality image for OpenGraph
        width: 1200,
        height: 630,
        alt: 'Arduino with LED experiment - Step-by-step guide'
      }
    ],
    site_name: 'CircuitHub',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Arduino with LED: A Complete Guide for Beginners',
    description: 'Learn how to use Arduino with LED in your projects. A great resource for beginners in electronics and programming.',
    image: 'https://example.com/path-to-image.jpg', // Same high-quality image as above
    creator: '@CircuitHub', // Add the creator's Twitter handle for better engagement
  },
  keywords: 'Arduino, LED, Electronics, Circuit Design, Arduino Projects, Beginner Electronics, IoT, Programming with Arduino, Arduino Tutorial', // More targeted keywords
  canonical: 'https://adhayanshala.netlify.app/arduino', // Ensure this is the correct URL to prevent duplicate content
  robots: 'index, follow', // Allow search engines to index the page and follow links
  author: 'CircuitHub Team', // Add author information
};

 

export default async function Page() {
 
let data=  await getData(`${process.env.DOMAIN}/api/experiments/Arduino`,1)
  return (
    <>
    
    
      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-light  
      md:h-fit md:w-[790px] md:ml-[320px] md:mt-[-640px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
       
          <h1 className=" capitalize text-2xl md:text-center md:text-2xl md:text-center capitalize md:text-2xl text-xl font-bold md:font-light
">
            {data.ExperimentName}
          </h1>
          <div className="mt-8 ml-[-10px] md:ml-28 md:mt-4">
              <Image
                width={470}
                height={200}
                className="md:ml-4"
                src={data.image1}
                alt="Experiment Image"
              />
            </div>
          <h2 className="text-sm mt-6 md:text-sm md:mt-4 font-bold">{data.madeBy}</h2>
          <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
          <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>


          <h2 className="text-2xl mt-8 md:text-2xl md:mt-8 ">
            {data.overview}
          </h2>
          <p className="mt-8 md:mt-8">{data.overviewinfo}</p>
          <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
          <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

          <div className="mt-10 md:ml-20">
              <Image
                width={500}
                height={400}
                className="md:h-fit  md:w-fit ml-2 bg-none"
                src={data.image2}
                alt="Specifications"
              />
            </div>

            <div>
              <h2 className="mt-8 text-2xl md:mt-6 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="mt-8 rounded ml-10 md:ml-44 md:mt-6 md:rounded">
                <Image height={100} width={450} src={data.image3} />
              </div>

              <h2 className="mt-8 text-2xl md:mt-6 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="mt-8 md:ml-24 md:mt-6 w-fit h-fit">
                <Image height={300} width={500} src={data.image4} />
              </div>
            </div>
          

        

          <h1 className="mt-10 text-2xl md:mt-20 md:text-2xl">Steps:</h1>

          {data.step && <p className="mt-10">{data.step}</p>}
          {data.step1 && <p className="mt-8 md:ml-24">1: {data.step1}</p>}
          {data.step2 && <p className="mt-4 md:ml-24">2: {data.step2}</p>}
          {data.step3 && <p className="mt-4 md:ml-24">3: {data.step3}</p>}
          {data.step4 && <p className="mt-4 md:ml-24">4: {data.step4}</p>}
          {data.step5 && <p className="mt-4 md:ml-24">5: {data.step5}</p>}
          {data.step6 && <p className="mt-4 md:ml-24">6: {data.step6}</p>}

          <h2 className="mt-10 text-2xl md:mt-10 md:text-2xl">Code:</h2>
          <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

          <h3 className="text-2xl mt-8 md:text-2xl md:mt-6">Result</h3>
          <p className="mt-6 md:mt-8">{data.result}</p>
  
      </div>
    </>
  );
}


/*

 const [data, setData] = useState([]);
  //const [loading, setLoading] = useState(false);
  let fetchData=useCallback(async ()=>{
    try {
      setLoading(true);
      const response = await getData(`/api/experiments/Arduino`, 1);
      setData(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  },[data])

  useEffect(() => {
    
    fetchData();
  }, [data]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> 
      </div>
    );
  }
*/