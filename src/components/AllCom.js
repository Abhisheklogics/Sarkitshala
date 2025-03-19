import Image from "next/image";
import Side from "./side";
export default function AllCom({ data }) {
  return (
    <>
      <div className="h-fit w-full p-5 bg-cover rounded-xl leading-8 text-justify break-words 
          md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:bg-fixed">

        {/* Meta Information */}
        <title>{data.title}</title>
        <meta name="description" content={data.metaDescription} />

        {/* Main Title */}
        <h1 className="text-3xl font-bold mb-6 text-center">{data.mainTitle}</h1>

        {/* RGB LED Introduction */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title1}</h2>
          <p>{data.para1}</p>
        </section>

        {/* Working Principle */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title2}</h2>
          <p>{data.para2}</p>
        </section>

        {/* RGB LED Arrangement (If ExperimentId = 15) */}
        {data.ExperimentId === "15" && (
          <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
            <h2 className="text-xl font-bold mb-6">Arrangement</h2>
            <pre className="whitespace-pre-wrap">{data.arrangement}</pre>
          </section>
        )}

        {/* Types of RGB LEDs */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title3}</h2>
          {data.types.map((type, index) => (
            <div key={index} className="mb-6">
              <h3 className="text-lg font-semibold">{type.name}</h3>
              <p>{type.description}</p>
              <ul className="list-disc pl-6">
                
              </ul>
            </div>
          ))}
        </section>

        {/* Pin Configuration */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title4}</h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Pin</th>
                <th className="border border-gray-400 p-2">Function</th>
              </tr>
            </thead>
            <tbody>
              {data.table1.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2">{row.pin}</td>
                  <td className="border border-gray-400 p-2">{row.function}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Key Differences */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title6}</h2>
          <table className="w-full border-collapse border border-gray-400">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 p-2">Feature</th>
                <th className="border border-gray-400 p-2">Common Anode</th>
                <th className="border border-gray-400 p-2">Common Cathode</th>
              </tr>
            </thead>
            <tbody>
              {data.table2.map((row, index) => (
                <tr key={index}>
                  <td className="border border-gray-400 p-2">{row.feature}</td>
                  <td className="border border-gray-400 p-2">{row.ca}</td>
                  <td className="border border-gray-400 p-2">{row.cc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Applications */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">{data.title9}</h2>
          <ul className="list-disc pl-6">
            {data.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </section>

        {/* Algorithm */}
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
          <h2 className="text-xl font-bold mb-6">Algorithm</h2>
          <ol className="list-decimal pl-6">
            {data.algorithm.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
        </section>

        {/* Conclusion */}
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
