
import Link from 'next/link';



const Footer = () => {
  
  return (
    <footer className=" bg-gray-800 text-white mt-10 w-full">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row flex-wrap justify-between">
        
     
        <div className="mb-4 md:mb-0 text-center">
          <h1 className="text-2xl text-white  font-bold mt-[-20px] hover:text-blue-500 ">Sarkitshala</h1>
          <p className="text-sm  font-bold mt-2 hover:text-blue-500 ">
            Learn Arduino, IoT, and Embedded Systems <br/>
            with projects, tutorials,  <br/>
            and real-world applications.  <br/>
            Guided by experts in the field.  <br/>
          </p>
          
        </div>

        
        <nav className="flexflex-wrap  justify-center md:justify-start mt-4 font-bold md:mt-0">
          <Link href="/" className="  text-md text-white hover:text-blue-500 px-2 py-1 ">Home</Link>
          <Link href="/about" className="text-md ml-10 text-white hover:text-blue-500 px-2 py-1">About</Link>
         
          <Link href="/contact" className="text-md   ml-10 text-white hover:text-blue-500  mt-4  px-2 py-1 ">Contact</Link>
        </nav>

        
        <div className="mt-4 md:mt-0 text-center md:text-left">
        <h1 className="text-2xl text-white  font-bold mt-[-0px] hover:text-blue-500 ">Contact Us</h1>
          <p className="text-sm text-white  mt-4  font-bold hover:text-blue-500 ">Sarkitshala Presents</p>
        </div>
      </div>

      
      <div className="bg-gradient-to-r from-indigo-400 to-black">
        <div className="max-w-7xl mx-auto px-4 py-2 text-sm text-gray-300 text-center md:text-left">
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;
