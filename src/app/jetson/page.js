
import getData from '../apiCall'
import Image1 from '../../../public/images/jetson_Sarkitshala.webp'
import Image from 'next/image'
export default async function Page(){
  let res = [];
  try {
    res = await getData('https://sarkitshala.com/api/experiments/jetson');
  } catch (error) {
    console.error("Failed to fetch data:", error);
  }

return(

    <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] 2xl:w-[820px] font-serif md:ml-[330px]  2xl:ml-[430px] md:p-5 md:bg-[#FFF0E5]
 md:bg-cover md:rounded md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
    <h1 className="text-4xl mt-24 md:mb-[50px] text-center">{res[0].Tname}</h1>
  <Image src={Image1} height={500} width={730}  className='ml-2' alt='jetson Image'/>
    <div className="mt-16  max-w-4xl bg-white p-6 rounded shadow-lg border border-black"> 
    <p className="text-lg    ">{res[0].Disc1} </p>
   <p className="text-lg mt-2  ">{res[0].Disc2}</p>

    </div>
  
   {/* Components Requirement */}
    <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
    <h2 className="font-semibold text-2xl mb-2">Components Required</h2>
    <ol className="list-decimal pl-5">
    {res[0].Compreq &&
      res[0].Compreq.map((item, index) => (
        <li key={index} className="">{item.comp}</li>
      ))}
  </ol>
</div>

{/* KeyFeatures[0] */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].ST1}</h2>
<p className=""><span className='font-semibold'>1.</span> {res[0].D1}</p>
<p><span className='font-semibold'>2.</span> {res[0].D2}</p>
<p><span className='font-semibold'>3.</span> {res[0].D3}</p>
<p><span className='font-semibold'>4.</span> {res[0].D4}</p>
<p><span className='font-semibold'>5.</span> {res[0].D5}</p>
<p><span className='font-semibold'>6.</span> {res[0].D6}</p>
<p><span className='font-semibold'>7.</span> {res[0].D7}</p>
</div>

{/*"ST2": "Technical Specifications",*/}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST2}</h2>
</div>

{/* "ST3": "Jetson Nano Developer Kit Components", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST3}</h2>
  <h3>{res[0].Disc}</h3>
  <ol className="list-decimal pl-5">
  {res[0].JNDkit &&
    res[0].JNDkit.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
</div>


{/* "ST4": "JetPack SDK - The Software Powerhouse" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST4}</h2>
  <ol className="list-decimal pl-5">
  {res[0].J_SDK &&
    res[0].J_SDK.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D2}</li>
    ))}
</ol>
  </div>


  {/* "ST5": "Power Supply Options", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST5}</h2>
  <ol className="list-decimal pl-5">
  {res[0].PS_Options &&
    res[0].PS_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D3}</li>
    ))}
</ol>
  </div>
 
  {/* "ST6": "Camera Support", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST6}</h2>
  <ol className="list-decimal pl-5">
  {res[0].CS_Options &&
    res[0].CS_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D4}</li>
    ))}
</ol>
  </div>

  {/* "ST7": "Connectivity & Expansion", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST7}</h2>
  <ol className="list-decimal pl-5">
  {res[0].CE_Options &&
    res[0].CE_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D5}</li>
    ))}
</ol>
  </div>

  {/* "ST8": "Performance & AI Capabilities", */}
 <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST8}</h2>
  </div>

  {/* "ST9": "Applications", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST9}</h2>
  <ol className="list-decimal pl-5">
  {res[0].App_Options &&
    res[0].App_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D6}</li>
    ))}
</ol>
  </div>

  {/* "ST10": "Jetson Nano vs. Raspberry Pi 4", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST10}</h2>
  <p>{res[0].EndV}</p></div>


  {/* "ST11": "Getting Started", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST11}</h2>
  <ol className="list-decimal pl-5">
  {res[0].GS_Steps &&
    res[0].GS_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D7}</li>
    ))}
</ol>
  </div>

  {/* "ST12": "In Details", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST12}</h2>
  </div>

  {/* "ST13": "microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST13}</h2>
  <ol className="list-decimal pl-5">
  {res[0].SDdisc &&
    res[0].SDdisc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.Disc1}</li>
    ))}
</ol>
  </div>

  {/* "ST14": "Micro-USB Power Supply", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST14}</h2>
  <ol className="list-decimal pl-5">
  {res[0].MusbDisc &&
    res[0].MusbDisc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.Disc1}</li>
    ))}
</ol>
  </div>


  {/* "ST15": "Note", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST15}</h2>
  <ol className="list-decimal pl-5">
  {res[0].Note &&
    res[0].Note.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
  </div>

  {/* "ST16": "Write Image to the microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST16}</h2>
  <p className=" text-lg mb-2">{res[0].Mdata}</p>
  <ol className="list-decimal pl-5">
  {res[0].SDsteps &&
    res[0].SDsteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.W2}</li>
    ))}
</ol>
  </div>

  {/* "ST17A": "Instructions for Windows", Also, "Write_Image" */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res[0].ST17A}</h2>
  <p className="">{res[0].Formatsdcard}</p>
  <ol className="list-decimal pl-5">
  {res[0].FSteps &&
    res[0].FSteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
<p className='font-semibold text-lg text-blue-600 mt-2 ml-2 mb-2'>{res[0].Write_Image}</p>
<ol className="list-decimal pl-5">
  {res[0].Write_Steps &&
    res[0].Write_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.W1}</li>
    ))}
</ol></div>

  {/* "ST17B": "Instructions for MacOS", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].ST17B}</h2>
<p>{res[0].Mac}</p>
</div>

{/* "Etcherinfo": */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].Etcherinfo}</h2>
<ol className="list-decimal pl-5">
  {res[0].EtcherSteps &&
    res[0].EtcherSteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.E1}</li>
    ))}
</ol>
</div>

{/* "CLI": "Command Line Instructions", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].CLI}</h2>
<ol className="list-decimal pl-5">
  {res[0].CLIS &&
    res[0].CLIS.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol></div>

{/* "ST17C": "Instructions for Linux", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].ST17C}</h2>
<ul className="">
  {res[0].LinuxM &&
    res[0].LinuxM.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.L1}</li>
    ))}
</ul>
</div>

{/* "ELI": "Etcher Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].ELI}</h2>
<ol className="list-decimal pl-5">
  {res[0].EL_S &&
    res[0].EL_S.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "CLI_Linus": "Command Line Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].CLI_Linus}</h2>
<ol className="list-decimal pl-5">
  {res[0].CLI_S &&
    res[0].CLI_S.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "Setup1stboot": "Setup and First Boot" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].Setup1stboot}</h2>
<p>{res[0].SetupDesc}</p>
<p className="font-semibold">{res[0].SetupOptions[0].S1}</p>
<p className="font-semibold">{res[0].SetupOptions[1].S1}</p>
<p>{res[0].SetupOptions[2].S1}</p>
<p>{res[0].SetupOptions[3].S1}</p>
</div>

{/* Setup_Steps */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Setup Steps</h2>
<ol className="list-decimal pl-5">
  {res[0].Setup_Steps &&
    res[0].Setup_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "FBoot": "First Boot", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].FBoot}</h2>
<p>{res[0].FB_Desc}</p>
<ol className="list-decimal pl-5">
  {res[0].Initial_Setup &&
    res[0].Initial_Setup.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "ST": "After Logging In" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl ">{res[0].ST}</h2>
<p>{res[0].ST_Desc}</p>
<h2 className="mt-4 font-semibold text-2xl mb-2">{res[0].InitialSHM}</h2>
<ol className="list-decimal pl-5">
  {res[0].Desc &&
    res[0].Desc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
</div>

{/* "S_Steps": "Setup Steps" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].S_Steps}</h2>
<ol className="list-decimal pl-5">
  {res[0].Steps &&
    res[0].Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res[0].ST18}</h2>
<ol className="list-decimal pl-5">
  {res[0].Conc_Bpoint &&
    res[0].Conc_Bpoint.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.P1}</li>
    ))}
</ol>
</div>








 </div>
  
    
    


    )
}