import Image from "next/image";
import CodeBox from './code.jsx';

export default function AllCom({ data }) {
  return (
    <>
      <div className="articleContainer mt-12 md:mt-2 ml-[10px] md:ml-0">
        {/* Main Title */}
        {data.mainTitle && <h1 className="text-3xl font-bold mb-4">{data.mainTitle}</h1>}

        {/* Image */}
        {data.image1 && (
          <Image
            src={data.image1}
            height={800}
            width={740}
            className="md:ml-1 md:mt-4 mb-6"
            alt={data.mainTitle}
          />
        )}

        {/* Sections with paragraphs */}
        {data.title1 && <Section title={data.title1} content={data.para1} />}
        {data.title2 && <Section title={data.title2} content={data.para2} />}
        {data.title5 && <Section title={data.title5} content={data.para2} />}
        {data.title11 && <Section title={data.title11} content={data.para3} />}
        {data.title8 && <Section title={data.title8} content={data.para4} />}

        {/* Arrangement */}
        {data.arrangement && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>Arrangement</h2>
            <pre>{data.arrangement}</pre>
          </section>
        )}

        {/* Types / List sections */}
        {data.title3 && data.types?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>{data.title3}</h2>
            {data.types.map((type, idx) => (
              <div key={idx} className="mb-4">
                <h3 className="text-lg font-semibold">{type.name}</h3>
                <ul className="list-disc pl-6">
                  {type.operation.map((op, i) => (
                    <li key={i}>{op}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>
        )}

        {/* Pin Configurations */}
        {data.title4 && data.configurations?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>{data.title4}</h2>
            {data.configurations.map((config, idx) => (
              <div key={idx} className="mb-4">
                {config.name && <h3 className="text-md font-medium">{config.name}</h3>}
                {config.operation?.length > 0 && (
                  <ul className="list-disc pl-6">
                    {config.operation.map((op, i) => (
                      <li key={i}>{op}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
  {data.image2 && (
          <Image
            src={data.image2}
            height={500}
            width={540}
            className="md:ml-1 md:mt-4 mb-6"
            alt={data.mainTitle}
          />
        )}
        {/* Components Required */}
        {data.title9 && data.Components?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>{data.title9}</h2>
            <ul className="list-disc pl-6">
              {data.Components.map((comp, idx) => (
                <li key={idx}>{comp}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Circuit Connections */}
        {data.title10 && data.CircuitConnections?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>{data.title10}</h2>
            {data.CircuitConnections.map((circuit, idx) => (
              <div key={idx} className="mb-4">
                {circuit.name && <h3 className="text-md font-medium">{circuit.name}</h3>}
                {circuit.operation?.length > 0 && (
                  <ul className="list-disc pl-6">
                    {circuit.operation.map((step, i) => (
                      <li key={i}>{step}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </section>
        )}
  {data.image3 && (
          <Image
            src={data.image3}
            height={600}
            width={740}
            className="md:ml-1 md:mt-4 mb-6"
            alt={data.mainTitle}
          />
        )}
        {/* Algorithm Steps */}
        {data.algorithms?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>Algorithm</h2>
            <ol className="list-decimal pl-6">
              {data.algorithms.map((algo, idx) => {
                const stepKey = `step${idx + 1}`;
                return (
                  <li key={idx} className="mb-4">
                    {algo[stepKey] && <h3>{algo[stepKey]}</h3>}
                    {algo.operation?.length > 0 && (
                      <ul className="list-disc pl-6">
                        {algo.operation.map((op, i) => (
                          <li key={i}>{op}</li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ol>
          </section>
        )}

        {/* Arduino Code */}
        {data.code && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h3 id="Code">Arduino Code</h3>
            <CodeBox code={data.code.replace(/\\n/g, "\n")} language="cpp" />
          </section>
        )}

        {/* Applications */}
        {data.applications?.length > 0 && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>Applications</h2>
            <ul className="list-disc pl-6">
              {data.applications.map((app, idx) => (
                <li key={idx}>{app}</li>
              ))}
            </ul>
          </section>
        )}

        {/* Conclusion */}
        {data.conclusion && (
          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2>Conclusion</h2>
            <p>{data.conclusion}</p>
          </section>
        )}
      </div>
    </>
  );
}

// Helper Component for simple title + paragraph
function Section({ title, content }) {
  return (
    <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
      <h2>{title}</h2>
      <p>{content}</p>
    </section>
  );
}
