import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white w-full mt-10">
      <div className="max-w-7xl mx-auto px-4 py-8 flex flex-col md:flex-row md:justify-between gap-8">

        <div className="text-center md:text-left">
          <h1 className="text-2xl font-bold hover:bg-orange-400 inline-block px-2 py-1 rounded-lg">
            Sarkitshala
          </h1>
          <p className="text-sm font-semibold mt-3">
            Learn Arduino, IoT, and Embedded Systems <br />
            with projects, tutorials, <br />
            and real-world applications. <br />
            Guided by experts in the field.
          </p>
        </div>

       
        <div className="flex flex-col items-center md:items-start justify-center space-y-3 font-semibold">
          <Link
            href="/about"
            className="hover:bg-orange-400 rounded-lg px-3 py-1 transition"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="hover:bg-orange-400 rounded-lg px-3 py-1 transition"
          >
            Contact
          </Link>
        </div>

        <div className="text-center md:text-left">
          
          <p className="text-sm font-semibold mt-4 hover:bg-orange-400 inline-block px-2 py-1 rounded-lg">
            Sarkitshala Presents
          </p>
        </div>
      </div>

      <div className="bg-gradient-to-r from-indigo-400 to-black text-center text-sm text-gray-300 py-2">
        © {new Date().getFullYear()} Sarkitshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
