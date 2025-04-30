'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Search from '../Search/Search';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/arduino', label: 'Arduino' },
    { href: '/raspberry', label: 'Raspberry Pi' },
    { href: '/esp', label: 'ESP32' },
    { href: '/jetson', label: 'Jetson' },
    { href: '/iotProtocols', label: 'IoT' },
    { href: '/hindicompiler', label: 'हिंदी में कोड' },
    { href: 'https://codeeditor-five.vercel.app/', label: 'Compiler' },
  ];

  return (
    <nav className="bg-[#0047AB] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-[1300px] mx-auto px-4 md:py-4 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="https://sarkitshala.com/">
          <Image
            src="/images/Logo.webp"
            alt="Logo"
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
        </Link>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            className="text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-1 bg-white mb-1 rounded"></div>
            <div className="w-6 h-1 bg-white mb-1 rounded"></div>
            <div className="w-6 h-1 bg-white rounded"></div>
          </button>
        </div>

        {/* Search - Desktop */}
        <div className="hidden md:block md:flex-1 md:mx-8">
          <Search />
        </div>

        {/* Nav Links - Desktop */}
        <ul className="hidden md:flex gap-4 text-white font-medium text-sm md:text-base">
          {navLinks.map((link) => (
            <li key={link.label} className="hover:bg-orange-400 px-3 py-1 rounded transition">
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Small screen horizontal scroll nav pills (collapsed menu look rich) */}
      {!isMenuOpen && (
        <div className="md:hidden overflow-x-auto scrollbar-hide bg-[#0047AB] pb-2 px-2">
          <ul className="flex gap-2 text-white font-medium text-sm whitespace-nowrap">
            {navLinks.slice(0, 5).map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="px-3 py-1 bg-white/10 rounded-full hover:bg-orange-400 transition block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mobile Full Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-[#0047AB] border-t border-white/10 mt-1">
          <div className="mb-3 bg-white rounded-full p-1">
            <Search />
          </div>

          <ul className="flex flex-col gap-1 text-white font-medium text-sm">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="block px-4 py-2 rounded hover:bg-orange-400 transition text-left"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
