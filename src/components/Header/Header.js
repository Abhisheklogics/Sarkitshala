import Link from 'next/link';
import Search from '../Search/Search';
import Image from 'next/image';

export default function Header() {
  return (
    <>
      <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        {/* Corrected Image Usage */}
        <Image 
          height={150} 
          width={120} 
          className='md:ml-10 md:w-fit md:h-[150px] md:absolute md:rounded-full md:top-[-40px]  ml-2 w-fit h-[80px] absolute rounded-full top-[-10px]' 
          src="/images/Logo.png" // Use string path
          alt="Logo" // Add alt for accessibility
        />
        
        <Search />
        <div className="max-w-screen-xl md:ml-[-870px] flex flex-wrap items-center justify-between mx-auto md:p-4 md:p-2">
          <div className="flex md:order-1 space-x-3 md:space-x-0 rtl:space-x-reverse"></div>

          <div className="md:mt-6 mt-[-5px] ml-4 items-center justify-between w-full text-gray-900 md:w-auto md:order-1" id="navbar-sticky">
            <ul className="flex ml-[-15px] md:relative md:left-24 p-3 md:p-0 rounded-lg md:space-x-8 rtl:space-x-reverse md:mt-2 md:border-0 md:bg-white overflow-x-auto whitespace-nowrap overscroll-x-contain flex-nowrap">
              <li>
                <Link href="/" className="block py-2 px-3 text-gray-900 rounded md:bg-transparent md:p-0">Home</Link>
              </li>
              <li>
                <Link href="/arduino" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Arduino</Link>
              </li>
              <li>
                <Link href="/raspberry" className="block py-2 px-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Raspberry Pi</Link>
              </li>
              <li>
                <Link href="/esp" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Esp32</Link>
              </li>
              <li>
                <Link href="https://codeeditor-five.vercel.app/" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0">Compiler</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
