'use client';
import Link from "next/link";
import { useState } from "react";


const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    className="md:py-2 py-3 px-1 relative w-full md:w-[310px] h-fit  text-left mb-6"
  >
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-gray-800">{label}</h1>
      <span
        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} md:absolute md:right-4 top-2`}
      >
        ▼
      </span>
    </div>
  </button>
);


const ExperimentLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} space-y-4`}>
    {links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="block  p-2 rounded-md text-sm text-gray-900  ml-2  hover:bg-gray-200"
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

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };


  const experiments = [
    {
      label: "Raspberry Pi Experiments",
      key: "toggle1",
      links: [
        { href: "/raspberry/led", text: "Interfacing Led" },
        { href: "/raspberry/lcd", text: "Interfacing Lcd" },
        { href: "/raspberry/dc-motor", text: "Interfacing Dc Motor" },
        { href: "/raspberry/ultrasonic-sensor", text: "Interfacing Ultrasonic Sensor" },
        { href: "/raspberry/dht11", text: "Interfacing Dht11 Sensor" },
        { href: "/raspberry/pulse-rate-sensor", text: "Interfacing Pulse Rate Sensor" },
        { href: "/raspberry/pir-sensor", text: "Interfacing  Pir  Sensor" }
      ],
    },
   
   
  ];

  return (
    <>
      <header >
      <button
        className="md:hidden block bg-blue-500 text-white p-2 mt-36 rounded-md m-4"
        onClick={() => handleToggle("toggle1")}
      >
        {toggles.toggle1 ? "Raspberry Pi" : "Raspberry Pi"}
      </button>

      </header>
      <nav
        className={`${
          toggles.toggle1 ? "block" : "hidden"
        } md:block relative flex flex-col ml-1 2xl:ml-10 transition-transform bg-white`}
      >
        <div className="inset-0 md:w-72 md:bg-white md:absolute ml-2 rounded-md p-4 mt-4 md:ml-4 md:mt-36 2xl:ml-10">
          {experiments.map((experiment) => (
            <div key={experiment.key}>
              <ToggleButton
                label={experiment.label}
                onClick={() => handleToggle(experiment.key)}
                isOpen={toggles[experiment.key]}
              />
              <ExperimentLinks
                toggle={toggles[experiment.key]}
                links={experiment.links}
              />
            </div>
          ))}
        </div>
      </nav>

      <aside className="hidden md:block md:absolute md:ml-[1100px] md:mt-[150px] 2xl:ml-[1250px] md:h-[320px] md:w-60 md:bg-white md:p-1 md:rounded">
        <h1 className="md:mt-2 md:text-2xl md:ml-4">In this Article</h1>
        <ul className="md:ml-4 md:mt-4 md:grid md:gap-2 md:text-sm">
          <li>Introduction</li>
          <li>Overview</li>
          <li>Hardware Components</li>
          <li>Specifications</li>
          <li>Pin Diagram</li>
          <li>Circuit Diagram</li>
          <li>Steps</li>
          <li>Code</li>
          <li>Result</li>
        </ul>
      </aside>

      
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
