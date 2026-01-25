"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";


export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileIotOpen, setMobileIotOpen] = useState(false);
  const pathname = usePathname();

  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/ai-tools", label: "AI-Tools" },
    { href: "/jetson", label: "Jetson" },
    { href: "/stm32-microcontroller-setup-guide", label: "STM32" },
  
    { href: "/hindicompiler", label: "हिंदी में कोड" },
    { href: "https://likhocode.netlify.app/", label: "Compilers", external: true },

    
  ];

  const iotLinks = [
    { href: "/arduino", label: "Arduino" },
    { href: "/esp", label: "ESP32" },
    
    { href: "/raspberry", label: "Raspberry Pi" },

    { href: "/iotProtocols", label: "Protocols" },
  ];

  const NavLink = ({ href, label, external = false }) => {
    const isActive = pathname === href;
    const base = "relative px-3 py-2 text-sm font-medium transition-all duration-300";
    const active = isActive
      ? "text-blue-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-full after:h-[2px] after:bg-blue-400 after:rounded"
      : "text-gray-300 hover:text-blue-400 hover:after:w-full hover:after:bg-blue-400 after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-[2px] after:w-0 after:transition-all after:duration-300";

    return (
      <Link
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className={`${base} ${active}`}
        onClick={() => setMobileOpen(false)}
      >
        {label}
      </Link>
    );
  };

  return (
  <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-lg bg-[#0b1120]/80 border-b border-white/10 shadow-md">
  <div className="mx-auto flex max-w-7xl items-center justify-between md:justify-around px-4 py-3 md:px-6 lg:px-8">
    {/* Logo */}
    <Link
      href="/"
      className="  flex items-center text-2xl font-extrabold"
    >
      <span className=" bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent hover:from-purple-500 hover:to-blue-400 transition-colors duration-500">
        Sarkitshala
      </span>
    </Link>

    {/* Desktop Nav */}
    <nav className=" md:ml-[-100px] hidden md:flex items-center space-x-6">
      {/* IoT Dropdown */}
      <div className="relative group">
        <button
          type="button"
          className="flex items-center text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          IOT
          <svg
            className="ml-1 h-4 w-4 group-hover:rotate-180 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        <ul className="absolute left-0 mt-3 w-56 rounded-xl bg-zinc-900/95 border border-gray-700 shadow-2xl opacity-0 scale-95 invisible group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 divide-y divide-gray-700">
          {iotLinks.map((link) => (
            <li
              key={link.href}
              className="px-4 py-2 hover:bg-zinc-800/70 rounded-lg transition-colors duration-300"
            >
              <NavLink {...link} />
            </li>
          ))}
        </ul>
      </div>

      {primaryLinks
        .filter((link) => link.href !== "/")
        .map((link) => (
          <NavLink
            key={link.href}
            {...link}
            className="text-sm font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
          />
        ))}
    </nav>

    {/* Mobile Toggle */}
    <button
      aria-label="Menu"
      onClick={() => setMobileOpen((prev) => !prev)}
      className="flex h-10 w-10 items-center justify-center rounded-xl text-white hover:bg-white/10 md:hidden transition-colors duration-300"
    >
      {mobileOpen ? (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>
      ) : (
        <svg
          className="h-6 w-6"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          fill="none"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      )}
    </button>
  </div>

  {/* Mobile Nav */}
  <div
    className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
      mobileOpen ? "max-h-[600px]" : "max-h-0"
    }`}
  >
    <ul className="space-y-4 px-6 py-4 border-t border-gray-700 bg-[#0b1120]/90 backdrop-blur-lg rounded-b-2xl shadow-lg">
      {/* IoT Accordion */}
      <li>
        <button
          onClick={() => setMobileIotOpen(!mobileIotOpen)}
          className="flex w-full items-center justify-between text-sm font-semibold text-gray-300 hover:text-blue-400 transition-colors duration-300"
        >
          IOT
          <svg
            className={`h-4 w-4 transform transition-transform duration-300 ${
              mobileIotOpen ? "rotate-180" : ""
            }`}
            stroke="currentColor"
            fill="none"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        <ul
          className={`mt-2 pl-4 border-l border-gray-600 text-sm space-y-3 transition-all duration-500 ${
            mobileIotOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          {iotLinks.map((link) => (
            <li key={link.href}>
              <NavLink {...link} className="hover:text-purple-400 transition-colors duration-300" />
            </li>
          ))}
        </ul>
      </li>

      {primaryLinks
        .filter((link) => link.href !== "/")
        .map((link) => (
          <li key={link.href}>
            <NavLink
              {...link}
              className="text-sm font-semibold text-gray-300 hover:text-purple-400 transition-colors duration-300"
            />
          </li>
        ))}
    </ul>
  </div>
</header>
  );
}
