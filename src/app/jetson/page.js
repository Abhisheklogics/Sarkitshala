
import getData from '../apiCall'

export default async function page(){
const data = await getData('http://localhost:3000/api/experiments/jetson')

let res=data[0]


return(

    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] 2xl:w-[820px] font-serif md:ml-[330px]  2xl:ml-[430px] md:p-5 md:bg-[#FFF0E5]
 md:bg-cover md:rounded md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
    <h1 className="text-4xl mt-24 md:mb-[50px] text-center">{res.Tname}</h1>
  
    <div className="max-w-4xl bg-white p-6 rounded shadow-lg border border-black"> 
    <p className="text-lg   ">{res.Disc1} </p>
   <p className="text-lg mt-2  ">{res.Disc2}</p>

    </div>
  
   {/* Components Requirement */}
    <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
    <h2 className="font-semibold text-2xl mb-2">Components Required</h2>
    <ol className="list-decimal pl-5">
    {res.Compreq &&
      res.Compreq.map((item, index) => (
        <li key={index} className="">{item.comp}</li>
      ))}
  </ol>
</div>

{/* KeyFeatures */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.ST1}</h2>
<p className=""><span className='font-semibold'>1.</span> {res.D1}</p>
<p><span className='font-semibold'>2.</span> {res.D2}</p>
<p><span className='font-semibold'>3.</span> {res.D3}</p>
<p><span className='font-semibold'>4.</span> {res.D4}</p>
<p><span className='font-semibold'>5.</span> {res.D5}</p>
<p><span className='font-semibold'>6.</span> {res.D6}</p>
<p><span className='font-semibold'>7.</span> {res.D7}</p>
</div>

{/*"ST2": "Technical Specifications",*/}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST2}</h2>
</div>

{/* "ST3": "Jetson Nano Developer Kit Components", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST3}</h2>
  <h3>{res.Disc}</h3>
  <ol className="list-decimal pl-5">
  {res.JNDkit &&
    res.JNDkit.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
</div>


{/* "ST4": "JetPack SDK - The Software Powerhouse" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST4}</h2>
  <ol className="list-decimal pl-5">
  {res.J_SDK &&
    res.J_SDK.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D2}</li>
    ))}
</ol>
  </div>


  {/* "ST5": "Power Supply Options", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST5}</h2>
  <ol className="list-decimal pl-5">
  {res.PS_Options &&
    res.PS_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D3}</li>
    ))}
</ol>
  </div>
 
  {/* "ST6": "Camera Support", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST6}</h2>
  <ol className="list-decimal pl-5">
  {res.CS_Options &&
    res.CS_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D4}</li>
    ))}
</ol>
  </div>

  {/* "ST7": "Connectivity & Expansion", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST7}</h2>
  <ol className="list-decimal pl-5">
  {res.CE_Options &&
    res.CE_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D5}</li>
    ))}
</ol>
  </div>

  {/* "ST8": "Performance & AI Capabilities", */}
 <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST8}</h2>
  </div>

  {/* "ST9": "Applications", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST9}</h2>
  <ol className="list-decimal pl-5">
  {res.App_Options &&
    res.App_Options.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D6}</li>
    ))}
</ol>
  </div>

  {/* "ST10": "Jetson Nano vs. Raspberry Pi 4", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST10}</h2>
  <p>{res.EndV}</p></div>


  {/* "ST11": "Getting Started", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST11}</h2>
  <ol className="list-decimal pl-5">
  {res.GS_Steps &&
    res.GS_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D7}</li>
    ))}
</ol>
  </div>

  {/* "ST12": "In Details", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST12}</h2>
  </div>

  {/* "ST13": "microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST13}</h2>
  <ol className="list-decimal pl-5">
  {res.SDdisc &&
    res.SDdisc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.Disc1}</li>
    ))}
</ol>
  </div>

  {/* "ST14": "Micro-USB Power Supply", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST14}</h2>
  <ol className="list-decimal pl-5">
  {res.MusbDisc &&
    res.MusbDisc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.Disc1}</li>
    ))}
</ol>
  </div>


  {/* "ST15": "Note", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST15}</h2>
  <ol className="list-decimal pl-5">
  {res.Note &&
    res.Note.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
  </div>

  {/* "ST16": "Write Image to the microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST16}</h2>
  <p className=" text-lg mb-2">{res.Mdata}</p>
  <ol className="list-decimal pl-5">
  {res.SDsteps &&
    res.SDsteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.W2}</li>
    ))}
</ol>
  </div>

  {/* "ST17A": "Instructions for Windows", Also, "Write_Image" */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">{res.ST17A}</h2>
  <p className="">{res.Formatsdcard}</p>
  <ol className="list-decimal pl-5">
  {res.FSteps &&
    res.FSteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
<p className='font-semibold text-lg text-blue-600 mt-2 ml-2 mb-2'>{res.Write_Image}</p>
<ol className="list-decimal pl-5">
  {res.Write_Steps &&
    res.Write_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.W1}</li>
    ))}
</ol></div>

  {/* "ST17B": "Instructions for MacOS", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.ST17B}</h2>
<p>{res.Mac}</p>
</div>

{/* "Etcherinfo": */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.Etcherinfo}</h2>
<ol className="list-decimal pl-5">
  {res.EtcherSteps &&
    res.EtcherSteps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.E1}</li>
    ))}
</ol>
</div>

{/* "CLI": "Command Line Instructions", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.CLI}</h2>
<ol className="list-decimal pl-5">
  {res.CLIS &&
    res.CLIS.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol></div>

{/* "ST17C": "Instructions for Linux", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.ST17C}</h2>
<ul className="">
  {res.LinuxM &&
    res.LinuxM.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.L1}</li>
    ))}
</ul>
</div>

{/* "ELI": "Etcher Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.ELI}</h2>
<ol className="list-decimal pl-5">
  {res.EL_S &&
    res.EL_S.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "CLI_Linus": "Command Line Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.CLI_Linus}</h2>
<ol className="list-decimal pl-5">
  {res.CLI_S &&
    res.CLI_S.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "Setup1stboot": "Setup and First Boot" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.Setup1stboot}</h2>
<p>{res.SetupDesc}</p>
<p className="font-semibold">{res.SetupOptions[0].S1}</p>
<p className="font-semibold">{res.SetupOptions[1].S1}</p>
<p>{res.SetupOptions[2].S1}</p>
<p>{res.SetupOptions[3].S1}</p>
</div>

{/* Setup_Steps */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Setup Steps</h2>
<ol className="list-decimal pl-5">
  {res.Setup_Steps &&
    res.Setup_Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "FBoot": "First Boot", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.FBoot}</h2>
<p>{res.FB_Desc}</p>
<ol className="list-decimal pl-5">
  {res.Initial_Setup &&
    res.Initial_Setup.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

{/* "ST": "After Logging In" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl ">{res.ST}</h2>
<p>{res.ST_Desc}</p>
<h2 className="mt-4 font-semibold text-2xl mb-2">{res.InitialSHM}</h2>
<ol className="list-decimal pl-5">
  {res.Desc &&
    res.Desc.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.D1}</li>
    ))}
</ol>
</div>

{/* "S_Steps": "Setup Steps" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.S_Steps}</h2>
<ol className="list-decimal pl-5">
  {res.Steps &&
    res.Steps.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.S1}</li>
    ))}
</ol>
</div>

<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">{res.ST18}</h2>
<ol className="list-decimal pl-5">
  {res.Conc_Bpoint &&
    res.Conc_Bpoint.map((item, index) => (
      <li key={index} className="marker:font-bold">{item.P1}</li>
    ))}
</ol>
</div>








 </div>
  
    
    


    )
}