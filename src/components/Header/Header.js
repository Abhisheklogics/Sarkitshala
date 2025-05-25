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
    { href: 'https://iotsimulation-tool.vercel.app/', label: 'Simulation' },
    { href: '/hindicompiler', label: 'हिंदी में कोड' },
    { href: 'https://codeeditor-five.vercel.app/', label: 'Compiler' },
  ];

  return (
    <header className="bg-[#0047AB] fixed top-0 left-0 w-full z-50 shadow-lg">
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/Logo.webp"
            alt="Logo"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden text-white flex flex-col gap-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle navigation"
        >
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
          <span className="w-6 h-0.5 bg-white rounded"></span>
        </button>

        {/* Desktop Search */}
        <div className="hidden md:block flex-1 mx-6">
          <Search />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-4 text-white font-medium text-sm lg:text-base">
          {navLinks.map((link) => (
            <Link key={link.label} href={link.href} className="px-3 py-1 rounded hover:bg-orange-500 transition">
              {link.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Horizontal Scroll Pills (Mobile only) */}
      {!isMenuOpen && (
        <div className="md:hidden overflow-x-auto px-3 pb-2 scrollbar-hide">
          <div className="flex gap-2 text-white text-sm font-medium whitespace-nowrap">
            {navLinks.slice(0, 6).map((link) => (
              <Link key={link.label} href={link.href} className="bg-white/10 px-4 py-1 rounded-full hover:bg-orange-400 transition">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden px-4 py-4 bg-[#0047AB] border-t border-white/20">
          <div className="mb-3">
            <Search />
          </div>
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-white py-2 px-4 rounded hover:bg-orange-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
