import Image from "next/image";
import Side from "./side";
import dynamic from "next/dynamic";
const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});
export default function AllCom({ data }) {
  // let codeARr=[
  //   {``},
  //   {``},
  //   {``},
  //   {``},
  //   {``},
  //   {``},
  //   {``}

  // ]
  return (
    <>
      <div className="h-fit w-full p-5 bg-cover rounded-xl leading-8 text-justify break-words 
          md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:bg-fixed">

        {/* Meta Information */}
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />

        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">{data.mainTitle}</h1>

        {/* Introduction */}
        {data.title1 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title1}</h2>
            <p>{data.para1}</p>
          </section>
        )}

        {/* Working Principle */}
       

        {/* Arrangement (Only if ExperimentId is 15) */}
        {data.ExperimentId === "15" && data.arrangement && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">Arrangement</h2>
            <pre className="whitespace-pre-wrap">{data.arrangement}</pre>
          </section>
        )}

        {/* Types of Components */}
        {data.title3 && data.types && data.types.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title3}</h2>
            {data.types.map((type, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold">{type.name}</h3>
                {type.description && <p>{type.description}</p>}
                {type.operation && (
                  <ul className="list-disc pl-6">
                    {type.operation.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Pin Configuration */}
   

       
        {/* Applications */}
        {data.title9 && data.applications && data.applications.length > 0 && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">{data.title9}</h2>
            <ul className="list-disc pl-6">
              {data.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </section>
        )}
 <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">Algorithm</h2>
          <ol className="list-decimal pl-6">
            {data.algorithms.map((algo, index) => (
              <li key={index} className="mb-4">
                <h3 className="text-lg font-semibold">
                  {algo[`step${index + 1}`]}
                </h3>
                <ul className="list-disc pl-6">
                  {algo.operation.map((op, i) => (
                    <li key={i}>{op}</li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>
<CodeBox/>
        {/* Code Explanation */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title11}</h2>
          <p>{data.para3}</p>
        </section>

        {/* Applications Section */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title8}</h2>
          <ul className="list-disc pl-6">
            {data.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </section>

        {/* Conclusion Section */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">Conclusion</h2>
          <p>{data.conclusion}</p>
        </section>
      </div>

      
  

      {/* Sidebar Component */}
      <Side />
    </>
  );
}
