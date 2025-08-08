import Image from "next/image";

import { CodeBlock } from "./ui/code-block";
import   '../app/globals.css'


export default function AllCom({ data }) {
  
  return (
    <>
    <div className="articleContainer mt-12 md:mt-0 ml-[-43px] md:ml-0">
  <h1 className="">{data.mainTitle}</h1>
  {data.image1 && <Image src={data.image1} height={800} width={740} className='md:ml-1 md:mt-4'/>}

        {data.title1 && (
          <section >
            <h2 >{data.title1}</h2>
            <p>{data.para1}</p>
          </section>
        )}
         {data.title2 && (
          <section >
            <h2 >{data.title2}</h2>
            <p>{data.para2}</p>
          </section>
        )}

        {data.arrangement && (
          <section >
            <h2 >Arrangement</h2>
            <pre >{data.arrangement}</pre>
          </section>
        )}

        {data.title3 && data.types && data.types.length > 0 && (
          <section >
            <h2 >{data.title3}</h2>
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
          <section >
            <p className="headingClass">{data.title10}</p>
            <p className=" ml-4  mb-2">{data.para5}</p>
            <p className="ml-4 mb-2">{data.para6}</p>
            <p className=" ml-4 mb-2">{data.para7}</p>
            <p className=" ml-4 mb-2">{data.para8}</p>
            
          </section>
        )}

        {data.title4 && data.configurations && data.configurations.length > 0 && (
          <section>
            <h2 >{data.title4}</h2>
            {data.configurations.map((config, index) => (
              <div key={index} className="mb-6">
                {config.name && <h3 >{config.name}</h3>}
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
          <section >
            <h2 >{data.title5}</h2>
            <p>{data.para2}</p>
          </section>
        )}
         {data.title8 && (
          <section >
            <h2 >{data.title8}</h2>
            <p>{data.para4}</p>
          </section>
        )}

        {data.algorithms && data.algorithms.length > 0 && (
          <section >
            <h2 >Algorithm</h2>
            <ol className="list-decimal pl-6">
              {data.algorithms.map((algo, index) => (
                <li key={index} className="mb-4">
                  <h3 >{algo[`step${index + 1}`]}</h3>
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
          <section >
            <h2 >{data.title11}</h2>
            <p>{data.para9}</p>
          </section>
        )}

    <section > 
              <h3  id="Code"> Arduino Code</h3>    
  {data.code && 
  <CodeBlock
         language="c"     
           filename=""
         highlightLines={[9, 13, 14, 18]}
          code={data.code.replace(/\\n/g, '\n')} 
       />
     }
      </section> 
        {data.title9 && data.applications && data.applications.length > 0 && (
          <section >
            <h2 >{data.title9}</h2>
            <ul className="list-disc pl-6">
              {data.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </section>
        )}
        

        {data.conclusion && (
          <section >
            <h2 >Conclusion</h2>
            <p>{data.conclusion}</p>
          </section>
        )}
      </div>

  
    </>
  );
}
