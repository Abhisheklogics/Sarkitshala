
import dynamic from "next/dynamic";

const CodeBox=dynamic(()=>import('@/components/code/code'))

export default function Res({ data }) {
    return (
       <div className="h-screen overflow-y-auto  w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
      md:h-fit md:w-[790px] 2xl:w-[820px] font-serif md:ml-[330px] md:mt-20 2xl:ml-[430px] md:p-5 bg-[#FFF0E5]
   md:bg-cover md:rounded md:leading-8 md:text-justify md:break-words md:text-wrap ">
   
        <h1 className="text-3xl font-bold mb-4 text-center">{data.title}</h1>
       
       
        <section className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black">
        <p>{data.description}</p>
        </section>
       
        {data.sections.map((section, index) => (
  <section
    key={index}
    className="mb-6 mt-10 bg-white p-6 rounded shadow-lg border border-black"
  >
    <h2 className="text-xl font-bold mb-4 ">{section.heading}</h2>
    {section.content && <p>{section.content}</p>}

    {section.points && (
      <ul>
        {section.points.map((point, i) => (
          <li key={i}>{point}</li>
        ))}
      </ul>
    )}

    {section.subsections &&
      section.subsections.map((sub, i) => (
        <div key={i} className="ml-5 mt-2">
          {sub.subheading && <h4 className="text-xl font-bold mb-4 ">{sub.subheading}</h4>}

          {sub.points && (
            <ul>
              {sub.points.map((point, j) => (
                <li key={j}>{point}</li>
              ))}
            </ul>
          )}

          {sub.items && (
            <ul>
              {sub.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}

          {sub.steps && (
            <ol>
              {sub.steps.map((step, j) => (
                <li key={j}>{step}</li>
              ))}
            </ol>
          )}

{sub.commands && (
  <pre className="bg-gray-200 p-4 overflow-x-auto rounded font-mono text-sm border">
    {sub.commands.map((cmd, j) => (
      <code key={j} className="block">{cmd}</code>
    ))}
  </pre>
)}

          {sub.content && <p>{sub.content}</p>}

          {sub.code && (
  <pre className="bg-gray-200 p-4 overflow-x-auto rounded font-mono text-sm border">
    {sub.code.map((line, j) => (
      <code key={j} className="block">{line}</code>
    ))}
  </pre>
)}

          {sub.note && <p><strong>Note:</strong> {sub.note}</p>}
        </div>
      ))}

    {section.steps && (
      <ol>
        {section.steps.map((step, i) => (
          <li key={i}>{step}</li>
        ))}
      </ol>
    )}

{section.code && (
  <pre className="bg-gray-200 p-4 overflow-x-auto rounded font-mono text-sm border">
    {section.code.map((line, i) => (
      <code key={i} className="block">{line}</code>
    ))}
  </pre>
)}

    {section.run_command && (
      <p>
        <strong>Run Command:</strong> <code>{section.run_command}</code>
      </p>
    )}

    {section.output && <p dangerouslySetInnerHTML={{ __html: section.output }} />}

    {section.items && (
      <ul>
        {section.items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    )}

    {section.faqs && (
      <div className="mt-4">
        {section.faqs.map((faq, i) => (
          <div key={i}>
            <p><strong>Q:</strong> {faq.question}</p>
            <p><strong>A:</strong> {faq.answer}</p>
          </div>
        ))}
      </div>
    )}

    {section.links && (
      <ul>
        {section.links.map((link, i) => (
          <li key={i}>
            <a href={link} target="_blank" rel="noopener noreferrer">{link}</a>
          </li>
        ))}
      </ul>
    )}
  </section>
))}

      </div>
    );
  }
  
