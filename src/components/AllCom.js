import Image from "next/image"

export default function AllCom({data})
{
    return(
        <>
         <div className="h-fit w-full p-5 bg-gray-100 bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
 <h1 className="text-3xl font-bold mb-6 text-center">
        {data.ExperimentName}
      </h1>

      {/* Experiment Image */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={data.image1}
          alt={`${data.ExperimentName} - Experiment Image`}
         
          width={500}
          height={500}
          className="rounded-xl md:ml-28"
        />
      </div>

      {/* Experiment Intro */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.Experiment}</h2>
        <p className="mb-3 text-justify">{data.ExperimentIntro1}</p>
        <p className="text-justify">{data.ExperimentIntro2}</p>
      </section>

      {/* Experiment Details */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.Experiment}</h2>
        <p className="text-justify">{data.Experimentval}</p>
      </section>

      {/* How It Works */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">
          How does a {data.Experiment} Work?
        </h2>
        <p className="text-justify">{data.ExperimentWork}</p>
      </section>

      {/* Experiment Type */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.ExperimentType}</h2>
        <p className="mb-1">{data.ExperimentTypeCathVal1}</p>
        <p className="mb-1">{data.ExperimentTypeCathVal2}</p>
        <p>{data.ExperimentTypeCathVal3}</p>
      </section>

      {/* Common Aspects */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.ExperimentCommonA}</h2>
        <p className="mb-1">{data.ExperimentCommonA1}</p>
        <p className="mb-1">{data.ExperimentCommonA2}</p>
        <p>{data.ExperimentCommonA3}</p>
      </section>

      {/* Experiment Steps */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.ExperimentStep1}</h2>
        <p className="mb-1">{data.ExperimentStepVal1}</p>
        <p className="mb-1">{data.ExperimentStepVal2}</p>
        <p className="mb-1">{data.ExperimentStepVal3}</p>
        <p>{data.ExperimentStepVal4}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.ExperimentStep2}</h2>
        <p className="mb-1">{data.ExperimentStepVal5}</p>
        <p>{data.ExperimentStepVal6}</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-3">{data.ExperimentStep3}</h2>
        <p>{data.ExperimentStep3}</p>
      </section>
    </div>
        </>
    )
}