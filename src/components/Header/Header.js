'use client';
import Link from 'next/link';
import Image from 'next/image';
import Search from '../Search/Search';

export default function Header() {
  return (
    <nav className="bg-[#0047AB] fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-4 py-3 md:py-2 flex-wrap">
       
        <Link href="https://sarkitshala.com/">
          <Image
            src="/images/Logo.webp"
            alt="Logo"
            width={100}
            height={100}
            className="rounded-full  object-cover"
          />
        </Link>

      
        <div className="flex-1 mx-4 md:mx-10">
          <Search />
        </div>

       
        <div className="w-full md:w-auto mt-3 md:mt-0 overflow-x-auto scrollbar-hide">
          <ul className="flex gap-2 md:gap-4 items-center text-white font-semibold text-md md:text-base px-2">
            {[
              { href: '/', label: 'Home' },
              { href: '/arduino', label: 'Arduino' },
              { href: '/raspberry', label: 'Raspberry Pi' },
              { href: '/esp', label: 'ESP32' },
              { href: '/jetson', label: 'Jetson' },
              { href: '/iotProtocols', label: 'IoT' },
              { href: 'https://codeeditor-five.vercel.app/', label: 'Compiler' },
            ].map((link) => (
              <li key={link.label} className="hover:bg-orange-400 px-3 py-1 rounded transition">
                <Link href={link.href} className="block whitespace-nowrap">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
