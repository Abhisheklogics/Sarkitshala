import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0047AB] text-white w-full mt-16 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row md:justify-between gap-10">
        {/* Branding & Description */}
        <div className="text-center md:text-left max-w-sm">
          <h1 className="text-3xl font-extrabold mb-3 cursor-pointer inline-block hover:text-orange-400 transition-colors duration-300">
            Sarkitshala
          </h1>
          <p className="text-gray-200 text-sm leading-relaxed font-medium">
            Learn Arduino, IoT, and Embedded Systems <br />
            with projects, tutorials, <br />
            and real-world applications. <br />
            Guided by experts in the field.
          </p>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center md:items-start justify-center space-y-4 font-semibold text-lg">
          <Link
            href="/about"
            className="px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition duration-300"
          >
            Contact
          </Link>
          <Link
            href="/privacy-policy"
            className="px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition duration-300"
          >
            Privacy Policy
          </Link>
        </nav>

        {/* Footer Tagline */}
        <div className="text-center md:text-left flex flex-col justify-center">
          <p className="text-gray-300 text-base font-semibold px-4 py-2 rounded-lg hover:bg-orange-400 hover:text-white transition duration-300 cursor-default">
            Sarkitshala Presents
          </p>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-gradient-to-r from-indigo-400 to-black text-center text-gray-300 text-sm py-3 select-none">
        © {new Date().getFullYear()} Sarkitshala. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
