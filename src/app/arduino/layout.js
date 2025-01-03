'use client';
import Link from "next/link";
import { useState } from "react";

const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    aria-expanded={isOpen}
    className="md:py-2 py-3 px-1 relative w-full md:w-[310px] h-fit md:ml-2 text-left mb-4"
  >
    <div className="flex justify-between items-center">
      <h2 className="font-bold text-gray-800">{label}</h2>
      <span
        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} md:absolute md:right-4 top-2`}
      >
        ▼
      </span>
    </div>
  </button>
);

const ToggleLinks = ({ toggle, links }) => (
  <ul
    className={`${toggle ? "block" : "hidden"} space-y-4`}
    aria-hidden={!toggle}
  >
    {links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="block px-2 p-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  const [toggles, setToggles] = useState({
    toggle1: true,
  });

  const handleToggle = (toggleKey) => {
    setToggles((prevState) => ({
      ...prevState,
      [toggleKey]: !prevState[toggleKey],
    }));
  };

  const experiments = [
    {
      label: "Arduino Experiments",
      key: "toggle1",
      links: [
        { href: `/arduino/${'led'}`, text: "Interfacing Led" },
        { href: `/arduino/${'7-segment-display'}`, text: "Interfacing 7 Segement Display" },
        { href: `/arduino/${'oled'}`, text: "Interfacing Oled" },
        { href: `/arduino/${'led-push-button'}`, text: "Interfacing Led with Push Button" },
        { href: `/arduino/${'oled-push-button'}`, text: "Interfacing Push Button with Oled" },
        { href: `/arduino/${'pir-sensor'}`, text: "Interfacing Pir Sensor" },
        { href: `/arduino/${'soil-moisture'}`, text: "Interfacing Soil Moisture Sensor" },
        { href: `/arduino/${'dht22'}`, text: "Interfacing Dht22" },
        { href: `/arduino/${'dc-motor'}`, text: "Interfacing Dc Motor" },
        { href: `/arduino/${'servo-motor'}`, text: "Interfacing Servo Motor" },
        { href: `/arduino/${'gear-motor'}`, text: "Interfacing Gear Motor" },
        { href: `/arduino/${'traffic-light'}`, text: "Interfacing Traffic Light" },
        { href: `/arduino/${'lcd'}`, text: "Interfacing Lcd" },
        { href: `/arduino/${'ultrasonic-sensor-led'}`, text: "Interfacing Ultrasonic with Led" }
       ],
    },
  ];

  return (
    <>
      <header className="">
        <button
          className="md:hidden block bg-blue-500 text-white p-2 rounded-md mt-36 ml-4"
          onClick={() => handleToggle('toggle1')}
        >
          Arduino Experiments
        </button>
      </header>

      <nav
        className={`${toggles.toggle1 ? "block" : "hidden"} md:block  relative flex flex-col mt-2 md:mt-36 ml-0 md:ml-4 2xl:ml-10`}
        aria-label="Sidebar Navigation"
      >
        <div className="md:w-72 h-fit md:h-[700px] bg-white bg-gray-100 rounded p-4">
          {experiments.map((experiment, index) => (
            <section key={index}>
              <ToggleButton
                label={experiment.label}
                onClick={() => handleToggle(experiment.key)}
                isOpen={toggles[experiment.key]}
              />
              <ToggleLinks toggle={toggles[experiment.key]} links={experiment.links} />
            </section>
          ))}
        </div>
      </nav>

      <aside
        className="hidden md:block md:w-fit h-[350px] md:absolute md:mt-[-710px] md:ml-[1110px] 2xl:ml-[1230px] bg-white p-4 rounded shadow-sm"
        aria-label="Table of Contents"
      >
        <h2 className="text-2xl text-gray-800">In this Article</h2>
        <ul className="mt-4 space-y-2 text-sm">
          <li>Introduction</li>
          <li>Overview</li>
          <li>Specifications</li>
          <li>Pin Diagram</li>
          <li>Circuit Diagram</li>
          <li>Steps</li>
          <li>Code</li>
          <li>Result</li>
        </ul>
      </aside>

      <main className="flex-1 p-4">{children}</main>
    </>
  );
}
