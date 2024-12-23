
import Image from "next/image";
import dynamic from "next/dynamic";

import getData from "@/app/apiCall";

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });
const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });
export async function generateMetadata({params})
 {
  await params.Experiment
  let ExperimentName;
 
   
   
  
 ExperimentName = await getData(`https://sarkitshala.site/api/experiments/Res`,params.Experiment)
  return {
    title: ExperimentName.ExperimentName,
    robots: {
      index: true,
      follow: true
    },
    url: 'https://sarkitshala.site',
    siteName: "sarkitshala.site",
    description: ExperimentName.overview,
    openGraph: {
      title: ExperimentName.ExperimentName,
      description: ExperimentName.overview,
      url: `https://sarkitshala.site/${params.Experiment}`, 
      images: [
        {
          url: ExperimentName.image1,
          width: 1200,
          height: 630,
          alt: `${ExperimentName.ExperimentName} - Visual representation of the experiment`
        },

        
      ],
      site_name: 'sarkitshala',
      keywords: 'Raspberry Pi, ESP, Soil Moisture, IoT Projects, Embedded Systems, Electronics, Circuit Design, Smart Agriculture',
    
      twitter: {
        card: "summary_large_image",
        site: '@sarkitshala', 
        title: ExperimentName.ExperimentName,
        description:ExperimentName.overview,
        image: ExperimentName.image1,
      }
  }
}
 }
export async function generateStaticParams() {
  
  let response;
  
  
  response = await getData(`https://sarkitshala.site/api/experiments/Res`);
  
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
    
    const data = await getData(`https://sarkitshala.site/api/experiments/Res`, Experiment)
      
    if (!data) {
        return <p><Loading/></p>;
      }
  

    return (
    <>
      <div className="h-fit w-full p-6 bg-white bg-cover rounded-xl leading-10 text-justify break-words 

      md:h-fit md:w-[790px] md:ml-[330px]  md:mt-28 2xl:ml-[400px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
      
          <h1 className="md:text-center capitalize md:text-2xl text-xl font-bold md:font-light
          md:text-center md:text-2xl">{data.ExperimentName.trim()}</h1>
          
         {data.ExperimentId != '3'  ?
         <div className="md:ml-32 md:mt-6 mt-6 md:w-fit  md:h-fit w-full ml-4">
            <Image
              className="md:ml-0 ml-[-20px]"
              src={data.image1}
              alt="Experiment Image"
              width={470}  
              height={400} 
              objectFit="cover"
            />
          </div>:
           <Image
           className="md:ml-32 md:mt-8   w-full mt-4 md:w-[470px]"
           src={data.image1}
           alt="Experiment Image"
           width={470}  
           height={200} 
           objectFit="cover"
         />
          }
          
          <h2 className=" text-sm mt-4 md:text-sm md:mt-2 font-bold ">{data.madeBy}</h2>
          <p className="md:mt-6 mt-6">{data.madeByinfo1}</p>
          <p className="md:mt-6 mt-6">{data.madeByinfo2}</p>
          <h2 className="md:text-2xl md:mt-10 text-2xl  mt-10">{data.overview.trim()}</h2>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo1}</p>
          <p className="md:mt-10 md:leading-8 mt-10">{data.overviewinfo2}</p>

          <div className="md:leading-10 ">
            <p className="md:mt-10 md:text-2xl mt-10 text-2xl">{data.Material}</p>
            {data.Material1 && <p className="md:ml-10 md:mt-4 mt-4">1: {data.Material1}</p>}
            {data.Material2 && <p className="md:ml-10 md:mt-2 mt-4">2: {data.Material2}</p>}
            {data.Material3 && <p className="md:ml-10 md:mt-2 mt-4">3: {data.Material3}</p>}
            {data.Material4 && <p className="md:ml-10 md:mt-2 mt-4">4: {data.Material4}</p>}
            {data.Material5 && <p className="md:ml-10 md:mt-2 mt-4">5: {data.Material5}</p>}
          </div>

          {data.ExperimentId === '7' && <h2>{data.CircuitDiagramInfo}</h2>}
          
          {data.ExperimentId === '7' || data.ExperimentId != '5' ? (
            <div className="md:ml-20 mt-10 ">
              <Image
                src={data.image2}
                alt="Specifications"
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
                alt="Specifications"
                width={484}  
                height={320} 
                 className="md:ml-32 "
                objectFit="cover"
              />
            </div>
          )}
          
          {data.ExperimentId === '8' && (
            <div className="md:ml-28 mt-4 md:mt-12">
              <Image
                src={data.image3}
                alt="Pin Diagram"
                width={384}
                height={320}
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:text-2xl md:mt-20 text-2xl mt-8" : "md:text-2xl md:mt-16 text-2xl mt-8"}>
            {data.pinDiagramInfo}
          </h2>

          {data.ExperimentId == '7' ? (
            <div className="md:ml-44 md:mt-12">
              <Image
                src={data.image4}
                alt="Pin Diagram"
                width={402}
                height={176}
                objectFit="cover"
              />
            </div>
          ) : (
            <div className="md:ml-36 md:mt-12 mt-12 ml-[-40px]">
              <Image
                src={data.image3}
                alt="Pin Diagram"
                width={400}
                height={300}
                className=" md:w-fit ml-6"
                objectFit="cover"
              />
            </div>
          )}

          <h2 className={data.ExperimentId === '8' ? "md:mt-10 md:text-2xl text-2xl mt-8  " : "md:mt-4 md:text-2xl text-2xl mt-10"}>
            {data.CircuitDiagramInfo}
          </h2>

          {data.ExperimentId == '7'  ? (
            <div className="md:ml-32 mt-10 ml-4 ml-10 ">
              <Image
                src={data.image5}
                alt="Pin Diagram"
                width={400}
                height={330}
                className=""
                objectFit="cover"
              />
            </div>
          ):<div className="md:ml-32 mt-10  ml-10 ">
          <Image
            src={data.image4}
            alt="Pin Diagram"
            width={400}
            height={330}
            className="mt-14"
            objectFit="cover"
          />
        </div>}

          {data.ExperimentId === '8' && (
            <div className="md:ml-44 md:mt-10">
              <Image
                src={data.image5}
                alt="Circuit Diagram"
                width={192}
                height={240}
                objectFit="cover"
              />
            </div>
          )}

          <h1 className="md:text-2xl md:mt-6 text-2xl mt-8">Steps:</h1>
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

          <h2 className="md:mt-4 md:text-2xl text-2xl mt-8">Code:</h2>
          <CodeBox num={data.ExperimentId} exNam='Raspberry' language={'c'} />
          
          <h3 className="md:text-2xl md:mt-4 text-2xl mt-8">Result</h3>
          <p className="md:mt-4">{data.result}</p>
       
      </div>
    </>
  );
}
/*import getData from "@/app/apiCall";

// This function is for generating static parameters for the page
export async function generateStaticParams() {
  const response = await getData("http://localhost:3000/api/experiments/Res");
  console.log(response)
  // Assuming response contains an array of experiments
  const data = await response; // You don't need .json() here if getData already parses the response

  const posts = data.experiments || []; // Adjust this based on your API response

  console.log(posts);
  // Map through the experiments to return the dynamic params
  return posts.map((post) => ({
    ExperimentId: String(post.ExperimentId),
  }));
}

// Main Page Component
export default async function Page({ params }) {
  const { Experiment } = await params; // Destructure params to get the dynamic experiment ID

  // Get the post data dynamically using the ExperimentId
  const post = await getData(`http://localhost:3000/api/experiments/Res`, Experiment);

  return (
    <main>
      <h1 className="md:ml-30 md:mt-20">{post.ExperimentId}</h1>
      <p>{post.ExperimentName}</p>
    </main>
  );
}*/
