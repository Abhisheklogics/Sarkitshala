import dynamic from "next/dynamic";
import Image from "next/image"
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

export default function Esp({ data }) {
  return (
    <div className="h-fit w-full p-5 bg-cover rounded-xl leading-8 text-justify break-words 
        md:w-[790px] md:ml-[330px] md:mt-24 2xl:ml-[430px] md:bg-fixed">
      
      <h1 className="text-3xl font-bold mb-4 text-center">{data.mainTitle}</h1>
   <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
  {data.image1 && <Image height={400} width={700} className="md:ml-4 md:mt-2"  src={data.image1} alt={`${data.ExperimentName}`} />}
 </section>
      {/* Title 1 - Introduction */}
      {data.title1 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title1}</h2>
          <p>{data.para1}</p>
        </section>
      )}

      {/* Title 2 - Working Principle */}
      {data.title2 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title2}</h2>
          <p>{data.para2}</p>

          {/* Working Steps */}
          {data.workingSteps?.length > 0 && (
            <ul className="list-decimal pl-6 mt-4">
              {data.workingSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          )}

          {/* Formula */}
          {data.formula && (
            <p className="mt-4 font-semibold">Formula: {data.formula}</p>
          )}
        </section>
      )}
<section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
        {data.image2 &&  <Image height={400} width={700} className="md:ml-4 md:mt-2"  src={data.image1} alt={`${data.ExperimentName}`} /> }
         </section>

      {/* Title 3 - Components Required */}
      {data.title3 && data.components?.length > 0 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title3}</h2>
          <ul className="list-disc pl-6">
            {data.components.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {data.title4 && data.pinConfig?.length > 0 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title4}</h2>
          <ul className="list-disc pl-6">
            {data.pinConfig.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.pin}</span>: {item.description}
              </li>
            ))}
          </ul>
          {data.note && <p className="mt-4 italic text-sm text-gray-700">{data.note}</p>}
        </section>
      )}
  <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
  {data.image3 && <Image height={600} width={400} className="md:mt-20 md:ml-40 mt-8 rounded"  src={data.image3} alt={`${data.ExperimentName} - Pin Diagram`}/>}
     </section>
      {/* Title 5 - Wiring */}
      {data.title5 && data.wiring?.length > 0 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title5}</h2>
          <ul className="list-decimal pl-6">
            {data.wiring.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.sensorPin}</span> {'->'} {item.esp32Pin}
              </li>
            ))}
          </ul>
        </section>
      )}
 <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
{data.image4 && <Image height={400} width={500} className="md:ml-24    mt-10"  src={data.image4} alt={`${data.ExperimentName} - Circuit Diagram`} />}
 </section>
      {/* Title 6 - Arduino Code */}
      {data.title6 && data.code && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title6}</h2>
          {data.code && 
            <CodeBox code={data.code.replace(/\\n/g, '\n')} language={'cpp'} />
          }
        </section>
      )}

      {/* Title 7 - Code Explanation */}
      {data.title7 && data.codeExplanation?.length > 0 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title7}</h2>
          <ul className="list-decimal pl-6">
            {data.codeExplanation.map((item, idx) => (
              <li key={idx}>
                <span className="font-semibold">{item.line}</span>: {item.explanation}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Title 8 - Applications */}
      {data.title8 && data.applications?.length > 0 && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title8}</h2>
          <ul className="list-disc pl-6">
            {data.applications.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Title 9 - Conclusion */}
      {data.title9 && data.conclusion && (
        <section className="mb-6 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-4">{data.title9}</h2>
          <p>{data.conclusion}</p>
        </section>
      )}
    </div>
  );
}
