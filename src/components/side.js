import Link from "next/link";

export default function Side()
{
    return(
        <div className="md:block hidden  p-4 shadow-md rounded-md md:fixed md:right-1 2xl:right-2 md:top-28 md:w-fit  max-w-xs mx-auto mt-4">
        <p className="font-semibold text-lg">In This Article</p>
        <div className="flex flex-col gap-2 mt-3 text-center text-sm md:text-md ">
          <Link href="#introduction" className=" max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Introduction</Link>
          <Link href="#Overview" className=" max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Overview of Experiment</Link>
          <Link href="#Pin-Diagram" className="max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Pin Diagram</Link>
          <Link href="#Circuit-Diagram" className="max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Circuit Diagram</Link>
          <Link href="#Steps" className="max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Steps</Link>
          <Link href="#Code" className="max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Code</Link>
  
          <Link href="#Conclusion" className="max-w-4xl bg-white p-2 rounded shadow hover:text-blue-600">Conclusion</Link>
          
        </div>
      </div> 
    )
}