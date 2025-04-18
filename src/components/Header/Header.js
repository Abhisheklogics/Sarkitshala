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
            className="rounded-full h-[60px] w-[60px] md:h-[70px] md:w-[70px] object-cover"
          />
        </Link>

      
        <div className="flex-1 mx-4 md:mx-10">
          <Search />
        </div>

       
        <div className="w-full md:w-auto mt-3 md:mt-0">
          <ul className="flex gap-4  ml-60 md:ml-0 justify-center md:justify-end items-center text-white font-semibold text-sm md:text-base overflow-x whitespace-nowrap">
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
                <Link href={link.href} className="block">
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
