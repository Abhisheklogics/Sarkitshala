export default function ComputerNetwork({data}) {
    console.log(data)
  return (
    <>
      
      <main className='containerClass w-[850px]'>
        <h1 className='headingClass'>{data.title}</h1>

        <section className='sectionHeading '>
          <h2>{data.title1}</h2>
          <p className='paragraphText'>{data.para1}</p>
        </section>

        <section className='sectionHeading '>
          <h2>{data.title2}</h2>
          <p className='paragraphText'>{data.para2}</p>
        </section>

        <section className='sectionHeading '>
          <h2>Working Steps</h2>
          <ol className='paragraphText'>
            {data.workingSteps.map((step, i) => (
              <li key={i} className="list-disc">{step}</li>
            ))}
          </ol>
        </section>

        <section className='sectionHeading '>
          <h2>Components Required</h2>
          <ul className='paragraphText '>
            {data.components.map((item, i) => (
              <li key={i} className="list-disc">{item}</li>
            ))}
          </ul>
        </section>

        <section className='sectionHeading '>
          <h2>Pin Configuration</h2>
          {data.pinConfig.map((pin, i) => (
            <div key={i} className='paragraphText '>
              <strong>{pin.component}:</strong> {pin.pins}
            </div>
          ))}
        </section>

        <section className='sectionHeading '>
          <h2>Note</h2>
          <p className='noteBox '>{data.note}</p>
        </section>

        <section className='sectionHeading '>
          <h2>Wiring & Connections</h2>
          <ul className='paragraphText'>
            {data.wiring.map((w, i) => (
              <li key={i} className="list-disc">
                <strong>{w.connection}</strong> {w.description}
              </li>
            ))}
          </ul>
        </section>

        <section className='sectionHeading '>
          <h2>Source Code</h2>
          <pre className='codeBox'>{data.code}</pre>
        </section>

        <section className='sectionHeading '>
          <h2>Code Explanation</h2>
          <p className='paragraphText'>{data.codeExplanation}</p>
        </section>

        <section className='sectionHeading '>
          <h2>Applications</h2>
          <ul className='paragraphText'>
            {data.applications.map((app, i) => (
              <li key={i} className="list-disc">{app}</li>
            ))}
          </ul>
        </section>

        <section className='sectionHeading '>
          <h2>Conclusion</h2>
          <p className='paragraphText'>{data.conclusion}</p>
        </section>

        <section className='sectionHeading '>
          <h2>FAQs</h2>
          {data.faqs.map((faq, i) => (
            <div key={i} className='paragraphText'>
              <p><strong>Q{i + 1}:</strong> {faq.question}</p>
              <p><strong>Ans:</strong> {faq.answer}</p>
            </div>
          ))}
        </section>
      </main>
    </>
  );
}
