import Image from "next/image";

import dynamic from "next/dynamic";
import   '../app/globals.css'
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

export default function AllCom({ data }) {
  
  return (
    <>
    <div className="w-full p-4 md:p-5 bg-white md:bg-[#FFF0E5] rounded-xl leading-8 text-justify break-words font-serif h-fit overflow-y-auto 
                md:w-[780px] md:ml-[340px] md:mt-20 
                 xl:ml-[430px]">
  

       
  

        <h1 className="text-3xl font-bold mb-4 text-center">{data.mainTitle}</h1>
  {data.image1 && <Image src={data.image1} height={800} width={740} className='md:ml-1 md:mt-4'/>}

        {data.title1 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title1}</h2>
            <p>{data.para1}</p>
          </section>
        )}
         {data.title2 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title2}</h2>
            <p>{data.para2}</p>
          </section>
        )}

        {data.arrangement && (
          <section className='containerClass'>
            <h2 className="headingClass">Arrangement</h2>
            <pre className="whitespace-pre-wrap">{data.arrangement}</pre>
          </section>
        )}

        {data.title3 && data.types && data.types.length > 0 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title3}</h2>
            {data.types.map((type, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{type.name}</h3>
                <ul className="list-disc pl-6">
                  {type.operation.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

         {data.title10 && (
          <section className='containerClass'>
            <p className="headingClass">{data.title10}</p>
            <p className=" ml-4  mb-2">{data.para5}</p>
            <p className="ml-4 mb-2">{data.para6}</p>
            <p className=" ml-4 mb-2">{data.para7}</p>
            <p className=" ml-4 mb-2">{data.para8}</p>
            
          </section>
        )}

        {data.title4 && data.configurations && data.configurations.length > 0 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title4}</h2>
            {data.configurations.map((config, index) => (
              <div key={index} className="mb-6">
                {config.name && <h3 className="text-lg font-semibold">{config.name}</h3>}
                {Array.isArray(config.operation) && config.operation.length > 0 && (
                  <ul className="list-disc pl-6">
                    {config.operation.map((op, idx) => (
                      <li key={idx}>{op}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {data.title5 && data.para2 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title5}</h2>
            <p>{data.para2}</p>
          </section>
        )}
         {data.title8 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title8}</h2>
            <p>{data.para4}</p>
          </section>
        )}

        {data.algorithms && data.algorithms.length > 0 && (
          <section className='containerClass'>
            <h2 className="headingClass">Algorithm</h2>
            <ol className="list-decimal pl-6">
              {data.algorithms.map((algo, index) => (
                <li key={index} className="mb-4">
                  <h3 className="text-lg font-semibold">{algo[`step${index + 1}`]}</h3>
                  <ul className="list-disc pl-6">
                    {algo.operation.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </section>
        )}

        
        {data.title11 && data.para9 && (
          <section className='containerClass'>
            <h2 className="headingClass">{data.title11}</h2>
            <p>{data.para9}</p>
          </section>
        )}

    <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black"> 
              <h3 className="md:text-2xl text-lg md:mt-[-15px] mb-[-50px] font-bold hover:text-blue-500" id="Code"> Arduino Code</h3>    
  {data.code && 
  
        <CodeBox code={data.code.replace(/\\n/g, '\n')} language={'cpp'}/>
     }
      </section> 
        {data.title9 && data.applications && data.applications.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="headingClass">{data.title9}</h2>
            <ul className="list-disc pl-6">
              {data.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </section>
        )}
        

        {data.conclusion && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="headingClass">Conclusion</h2>
            <p>{data.conclusion}</p>
          </section>
        )}
      </div>

  
    </>
  );
}
