
import Link from 'next/link';


const Footer = () => {
  
  return (
    <footer className="bg-green-600  text-black mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row flex-wrap justify-between">
        
     
        <div className="mb-4 md:mb-0">
          <h1 className="text-2xl mt-[-10px] font-bold">Your Logo</h1>
          <p className="text-sm text-white">Sarkitshala</p>
        </div>

        
        <nav className="flex flex-wrap justify-center md:justify-start mt-4 md:mt-0">
          <Link href="/" className="text-sm text-black hover:text-white px-2 py-1 md:px-4">Home</Link>
          <Link href="/about" className="text-sm text-black hover:text-white px-2 py-1 md:px-4">About</Link>
         
          <Link href="/contact" className="text-sm text-black hover:text-white px-2 py-1 md:px-4">Contact</Link>
        </nav>

        
        <div className="mt-4 md:mt-0 text-center md:text-left">
       
          <p className="text-sm text-gray-300">Dayalbagh Education Institute , Agra</p>
        </div>
      </div>

      
      <div className="bg-green-900">
        <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-300 text-center md:text-left">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
