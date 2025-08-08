import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#020617] w-full mt-16 border-t border-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-10 text-gray-800">
        
        {/* Branding & Description */}
        <div>
          <h1 className="text-2xl text-white font-extrabold mb-3 text-blue-700">
            Sarkitshala
          </h1>
          <p className="text-sm leading-relaxed text-white">
            Learn Arduino, IoT, and Embedded Systems with hands-on tutorials,
            real-world projects, and expert guidance. Ideal for students,
            hobbyists, and professionals.
          </p>
        </div>

        {/* Useful Links */}
        <div className='sm:ml-24 text-white'>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-blue-600 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 transition">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/privacy-policy" className="hover:text-blue-600 transition">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms-conditions" className="hover:text-blue-600 transition">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link href="/disclaimer" className="hover:text-blue-600 transition">
                Disclaimer
              </Link>
            </li>
          </ul>
        </div>

        {/* Tagline or Newsletter Placeholder */}
        <div>
          <h2 className="text-lg font-semibold mb-4 text-white">Sarkitshala Updates</h2>
          <p className="text-sm text-white">
            Stay connected for the latest updates in embedded systems, IoT, and electronics education.
          </p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className=" text-white text-center text-xs py-3">
        &copy; {new Date().getFullYear()} Sarkitshala. All Rights Reserved. | Empowering Embedded Innovation
      </div>
    </footer>
  );
};

export default Footer;
