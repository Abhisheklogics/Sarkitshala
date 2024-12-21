

/*'use client'
import { useState,useEffect } from "react";
import getData from "@/app/apiCall";
import dynamic from "next/dynamic";
import Image from "next/image";

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
const Loading = dynamic(() => import('@/components/loading/Loading'), {
  ssr: false
});


export default  function Page({ params }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchExperimentData = async () => {
      const res = await getData(`/api/experiments/Arduino`, params.Experiment);
      setData(res);
    };
    fetchExperimentData();
  }, [params.Experiment]);

  if (!data) {
    return <p><Loading/></p>;
  }


  if (data.pinDiagramInfo) {
    console.log('hello');
    return (
      <>
     
        <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-light 
        md:h-fit md:w-[790px] md:ml-[310px] md:mt-[-740px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

        
            <h1 className="md:text-center capitalize md:text-2xl text-xl font-bold md:font-light">{data.ExperimentName}</h1>

            {data.ExperimentId=='5'|| data.ExperimentId=='4'?<div className="mt-8 ml-[-10px] md:ml-32 md:mt-4">
              <Image
                width={470}
                height={200}
                className="md:ml:2 md:h-52 md:w-[500px]   md:h-[280px] w-full"
                src={data.image1}
                alt="Experiment Image"
              />
            </div>:<Image
                width={500}
                height={200}
                className=" md:mt-4 md:h-[300px] md:w-fit sm:h-fit sm:w-full md:ml-24 mt-10 "
                src={data.image1}
                alt="Experiment Image"
              />}

            <h2 className="text-sm mt-6 font-bold p-1">{data.madeBy}</h2>
            <p className="mt-2 ">{data.madeByinfo}</p>
            <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
            <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
            <h2 className="text-2xl mt-8">{data.overview}</h2>
            <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
            <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

            <div className="mt-10 md:ml-20">
             {data.ExperimentId == '1' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' ||data.ExperimentId == '6' || data.ExperimentId == '7' || data.ExperimentId == '8'  || data.ExperimentId == '9' || data.ExperimentId == '10' || data.ExperimentId =='11'? 
             <Image
                width={500}
                height={440}
                className=" sm:h-fit bg-none md:w-fit sm:w-full md:ml-4"
                src={data.image2}
                alt="Specifications"
              />: <Image
              width={450}
              height={400}
              className="ml-2 md:h-fit md:w-fit md:ml-4 bg-none "
              src={data.image2}
              alt="Specifications"
            />}
            
            </div>

           
            {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId=='3'  || data.ExperimentId=='4' || data.ExperimentId=='5'|| data.ExperimentId=='6'|| data.ExperimentId=='7'|| data.ExperimentId=='8'|| data.ExperimentId=='9'|| data.ExperimentId=='10' || data.ExperimentId=='11' ? (
            <div>
              <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="mt-8 capitalize rounded ml-10 md:ml-44 md:mt-10 md:rounded">
                <Image height={300} width={450} src={data.image3} />
              </div>

              <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="mt-8 md:ml-24 md:mt-10 w-fit h-fit">
                <Image height={400} width={500} src={data.image4} />
              </div>
            </div>
          ) : (
            ''
          )}



          {data.ExperimentId == '12'  ? (
            <div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-2 mt-4 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={350} src={data.image3} />
              </div>
              <div className="mt-2 text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Push Button
              </h2>
              </div>
              <div className="ml-2 mt-6 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2  capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-2 mt-6 md:ml-60 md:mt-4 ">
                <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}

   {data.ExperimentId == '13'  ? (
            <div className="md:mt-10">
              <h2 className="mt-2 text-2xl capitalize md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={350} src={data.image3} />
              </div>
              <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Arduino
              </h2>
              </div>
              <div className="ml-2 mt-6 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-2 mt-10 md:ml-60 md:mt-4 ">
                <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}

          
   {data.ExperimentId == '14'  ? (
            <div className="md:mt-20">
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.pinDiagramInfo}
              </h2>
              <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
                <Image height={100} width={400} src={data.image3} />
              </div>
              <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
              <h2 >
              Pin Diagram of Push Button
              </h2>
              </div>
              <div className="ml-2 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
                <Image height={100} width={300} src={data.image4} className="md:mt-10"/>
              </div>
              <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
                {data.CircuitDiagramInfo}
              </h2>
              <div className="ml-2 mt-10 md:ml-40 md:mt-10 ">
                <Image height={100} width={570} src={data.image5} className="md:mt-10"/>
              </div>
            </div>
          ) : (
            ''
          )}
        {data.ExperimentId=='14'?'':<div><h1 className="text-2xl mt-20">Steps:</h1>
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


      
            <h2 className="text-2xl mt-10">Code:</h2>
            <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

          
            <h3 className="text-2xl mt-6">Result</h3>
            <p className="mt-6">{data.result}</p>
        
        </div>
      </>
    );
  }
}
*/
import getData from "@/app/apiCall";
import Image from "next/image";
import dynamic from "next/dynamic";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
export async function generateMetadata({ params }) {
  await params.Experiment;
  let ExperimentName;
  let domain = process.env.DOMAIN || 'http://localhost:3000/'; // Use environment variable

  ExperimentName = await getData(`${domain}/api/experiments/Arduino`, params.Experiment);

  return {
    title: ExperimentName.ExperimentName,
    robots: {
      index: true,
      follow: true
    },
    description: ExperimentName.overview,
    openGraph: {
      title: ExperimentName.ExperimentName,
      description: ExperimentName.overview,
      url: `${domain}/${params.Experiment}`, // Dynamic URL based on the experiment
      images: [
        {
          url: ExperimentName.image1,
          width: 1200,
          height: 630,
          alt: `${ExperimentName.ExperimentName} - Visual representation of the experiment`
        }
      ],
      site_name: 'sarkitshala',
    },
    twitter: {
      card: 'summary_large_image',
      title: ExperimentName.ExperimentName,
      description: ExperimentName.overview,
      image: ExperimentName.image1,
      creator: '@sarkitshala',
    },
    keywords: 'Arduino, ESP, Soil Moisture, IoT Projects, Embedded Systems, Electronics, Circuit Design, Smart Agriculture',
    canonical: `${domain}/${params.Experiment}`,
    robots: 'index, follow',
    author: 'sarkitshala Team',
  };
}

// This function is for generating static parameters for the page

  export async function generateStaticParams() {
    let response;
    const domain = process.env.DOMAIN || 'http://localhost:3000/'; // Use environment variable
  
    response = await getData(`${domain}/api/experiments/Arduino`);
  
    const data = await response;
    const posts = data.experiments || [];
  
    return posts.map((post) => ({
      ExperimentId: String(post.ExperimentId),
    }));
  }
  


// Main Page Component
export default async function Page({ params }) {
  const { Experiment } = params; // Destructure params to get the dynamic experiment ID

  // Get the post data dynamically using the ExperimentId
  const data = await getData(`http://localhost:3000/api/experiments/Arduino`, Experiment);

  return (
    <>
     
    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-light 
    md:h-fit md:w-[790px] md:ml-[310px] md:mt-[-740px] 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">

    
        <h1 className="md:text-center capitalize md:text-2xl text-xl font-bold md:font-light">{data.ExperimentName}</h1>

        {data.ExperimentId=='5'|| data.ExperimentId=='4'?<div className="mt-8 ml-[-10px] md:ml-32 md:mt-4">
          <Image
            width={470}
            height={200}
            className="md:ml:2 md:h-52 md:w-[500px]   md:h-[280px] w-full"
            src={data.image1}
            alt="Experiment Image"
          />
        </div>:<Image
            width={500}
            height={200}
            className=" md:mt-4 md:h-[300px] md:w-fit sm:h-fit sm:w-full md:ml-24 mt-10 "
            src={data.image1}
            alt="Experiment Image"
          />}

        <h2 className="text-sm mt-6 font-bold p-1">{data.madeBy}</h2>
        <p className="mt-2 ">{data.madeByinfo}</p>
        <p className="mt-2 md:mt-2">{data.madeByinfo1}</p>
        <p className="mt-2 md:mt-6">{data.madeByinfo2}</p>
        <h2 className="text-2xl mt-8">{data.overview}</h2>
        <p className="mt-8 md:mt-4">{data.overviewinfo1}</p>
        <p className="mt-8 md:mt-8">{data.overviewinfo2}</p>

        <div className="mt-10 md:ml-20">
         {data.ExperimentId == '1' || data.ExperimentId == '3' || data.ExperimentId == '4' || data.ExperimentId == '5' ||data.ExperimentId == '6' || data.ExperimentId == '7' || data.ExperimentId == '8'  || data.ExperimentId == '9' || data.ExperimentId == '10' || data.ExperimentId =='11'? 
         <Image
            width={500}
            height={440}
            className=" sm:h-fit bg-none md:w-fit sm:w-full md:ml-4"
            src={data.image2}
            alt="Specifications"
          />: <Image
          width={450}
          height={400}
          className="ml-2 md:h-fit md:w-fit md:ml-4 bg-none "
          src={data.image2}
          alt="Specifications"
        />}
        
        </div>

       
        {data.ExperimentId == '1' || data.ExperimentId == '2' || data.ExperimentId=='3'  || data.ExperimentId=='4' || data.ExperimentId=='5'|| data.ExperimentId=='6'|| data.ExperimentId=='7'|| data.ExperimentId=='8'|| data.ExperimentId=='9'|| data.ExperimentId=='10' || data.ExperimentId=='11' ? (
        <div>
          <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
            {data.pinDiagramInfo}
          </h2>
          <div className="mt-8 capitalize rounded ml-10 md:ml-44 md:mt-10 md:rounded">
            <Image height={300} width={450} src={data.image3} />
          </div>

          <h2 className="mt-8 capitalize text-2xl md:mt-6 md:text-2xl">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="mt-8 md:ml-24 md:mt-10 w-fit h-fit">
            <Image height={400} width={500} src={data.image4} />
          </div>
        </div>
      ) : (
        ''
      )}



      {data.ExperimentId == '12'  ? (
        <div>
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-4 md:ml-32 md:mt-10 md:ml-60">
            <Image height={100} width={350} src={data.image3} />
          </div>
          <div className="mt-2 text-2xl md:mt-6 md:text-2xl md:mt-10 ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-2 mt-6 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
            <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
          </div>
          <h2 className="mt-2  capitalize text-2xl md:mt-2 md:text-2xl">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-6 md:ml-60 md:mt-4 ">
            <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
          </div>
        </div>
      ) : (
        ''
      )}

{data.ExperimentId == '13'  ? (
        <div className="md:mt-10">
          <h2 className="mt-2 text-2xl capitalize md:mt-2 md:text-2xl">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
            <Image height={100} width={350} src={data.image3} />
          </div>
          <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
          <h2 >
          Pin Diagram of Arduino
          </h2>
          </div>
          <div className="ml-2 mt-6 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
            <Image height={100} width={350} src={data.image4} className="md:mt-10"/>
          </div>
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-10 md:ml-60 md:mt-4 ">
            <Image height={100} width={450} src={data.image5} className="md:mt-10"/>
          </div>
        </div>
      ) : (
        ''
      )}

      
{data.ExperimentId == '14'  ? (
        <div className="md:mt-20">
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
            {data.pinDiagramInfo}
          </h2>
          <div className="ml-2 mt-6 md:ml-32 md:mt-10 md:ml-60">
            <Image height={100} width={400} src={data.image3} />
          </div>
          <div className="mt-2 capitalize text-2xl md:mt-6 md:text-2xl md:mt-10 ">
          <h2 >
          Pin Diagram of Push Button
          </h2>
          </div>
          <div className="ml-2 mt-4 md:ml-32 md:mt-4 md:mt-10  md:ml-60 ">
            <Image height={100} width={300} src={data.image4} className="md:mt-10"/>
          </div>
          <h2 className="mt-2 capitalize text-2xl md:mt-2 md:text-2xl">
            {data.CircuitDiagramInfo}
          </h2>
          <div className="ml-2 mt-10 md:ml-40 md:mt-10 ">
            <Image height={100} width={570} src={data.image5} className="md:mt-10"/>
          </div>
        </div>
      ) : (
        ''
      )}
    {data.ExperimentId=='14'?'':<div><h1 className="text-2xl mt-20">Steps:</h1>
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


  
        <h2 className="text-2xl mt-10">Code:</h2>
        <CodeBox num={data.ExperimentId} exNam="ard" language={'c'} />

      
        <h3 className="text-2xl mt-6">Result</h3>
        <p className="mt-6">{data.result}</p>
    
    </div>
  </>

  );
}
