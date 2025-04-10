import dynamic from 'next/dynamic';
import allData from '@/components/data';

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

function ProtocolsCom({ data }) {
  return (
    <div className=" mt-20 px-4 py-8 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">{data.title}</h1>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Objective</h2>
        <p className="text-gray-700">{data.objective}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Methodology</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.methodology.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-4">Implementation Steps</h2>
        {data.steps.map((step, idx) => (
          <div key={idx} className="mb-6 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h3 className="text-lg font-bold mb-2">{step.title}</h3>
            {step.description && <p className="mb-3 text-gray-700">{step.description}</p>}

            {step.commands && (
              <CodeBox code={step.commands.join('\n')} language="bash" />
            )}

            {step.code && (
              <CodeBox code={step.code} language="python" />
            )}
          </div>
        ))}
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Applications</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.applications.map((app, idx) => (
            <li key={idx}>{app}</li>
          ))}
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Future Research Concepts</h2>
        <ul className="list-disc list-inside text-gray-700">
          {data.futureResearchConcepts.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default async function Page({ params }) {
  const { Experiments } = await params;

  if (Experiments === 'amqp') {
    return <ProtocolsCom data={allData[0]} />;
  }

  if (Experiments === 'bluetooth') {
    return <ProtocolsCom data={allData[1]} />;
  }
  if (Experiments === 'gsm') {
    return <ProtocolsCom data={allData[2]} />;
  }
  if (Experiments === 'coap') {
    return <ProtocolsCom data={allData[3]} />;
  }
  if (Experiments === 'dds') {
    return <ProtocolsCom data={allData[4]} />;
  }
  return <div className="text-center py-10">Experiment not found.</div>;
}
