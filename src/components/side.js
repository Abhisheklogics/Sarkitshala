import Link from "next/link";

export default function Side() {
  return (
    <aside className="hidden md:block p-4 shadow-md rounded-md md:fixed md:right-2 2xl:right-10 md:top-28 md:w-52 max-w-xs mt-4 bg-white z-10">
      <p className="font-semibold text-lg text-center md:text-left">In This Article</p>
      <nav className="flex flex-col gap-2 mt-3 text-sm">
        <Link href="#introduction" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Introduction</Link>
        <Link href="#Overview" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Overview of Experiment</Link>
        <Link href="#Pin-Diagram" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Pin Diagram</Link>
        <Link href="#Circuit-Diagram" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Circuit Diagram</Link>
        <Link href="#Steps" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Steps</Link>
        <Link href="#Code" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Code</Link>
        <Link href="#Conclusion" className="bg-gray-50 p-2 rounded hover:text-blue-600 hover:bg-blue-50 transition">Conclusion</Link>
      </nav>
    </aside>
  );
}
