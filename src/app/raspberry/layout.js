'use client';
import Link from "next/link";
import { useState } from "react";


const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    className="md:py-2 py-3 px-1 relative w-full md:w-[310px] h-fit md:ml-2 text-left mb-4"
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
          className="max-w-4xl font-bold  bg-white p-4 rounded border border-black shadow block px-4  text-sm   hover:text-orange-400"
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
        { href: "/raspberry/led", text: "Interfacing LED" },
        { href: "/raspberry/lcd", text: "Interfacing LCD" },
        { href: "/raspberry/dc-motor", text: "Interfacing DC Motor" },
        { href: "/raspberry/ultrasonic-sensor", text: "Interfacing Ultrasonic Sensor" },
        { href: "/raspberry/dht11", text: "Interfacing DHT11 Sensor" },
        { href: "/raspberry/pulse-rate-sensor", text: "Interfacing Pulse Rate Sensor" },
        { href: "/raspberry/pir-sensor", text: "Interfacing  PIR  Sensor" }
      ],
    },
   
   
  ];

  return (
    <>
      <header >
      <button
        className="md:hidden block bg-blue-500 text-white p-2 rounded-md mt-36 ml-4"
        onClick={() => handleToggle("toggle1")}
      >
        {toggles.toggle1 ? "Raspberry Pi Experiments" : "Raspberry Pi Experiments"}
      </button>

      </header>
      <nav
        className={`${toggles.toggle1 ? "block" : "hidden"} md:block relative flex flex-col mt-2 ml-0 md:ml-4 2xl:ml-10 `}>
        <div className="inset-0 md:w-[330px] md:absolute ml-2 rounded-md p-4  md:ml-4 md:mt-28 2xl:ml-10">
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

    

      
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
