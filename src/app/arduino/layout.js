'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

// Reusable button component for toggling sections
const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    className="md:py-2 py-3 px-1 relative w-full md:w-[310px] h-fit hover:bg-gray-100 text-left mb-6"
  >
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-gray-800">{label}</h1>
      <span
        className={`transform transition-transform ${isOpen ? 'rotate-180' : ''} md:absolute md:right-4 top-1`}
      >
        ▼
      </span>
    </div>
  </button>
);


const ToggleLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} space-y-4`}>
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200">
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  // State for toggling sections dynamically
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    toggle5: false,
  });

  // Function to handle the toggling state
  const handleToggle = (toggleKey) => {
    setToggles((prevState) => ({
      ...prevState,
      [toggleKey]: !prevState[toggleKey],
    }));
  };

  // Experiment categories and their respective links
  const experiments = [
    {
      label: "Experiments",
      key: "toggle1",
      links: [
        { href: `/arduino/${1}`, text: "ARDUINO With Led" },
        { href: `/arduino/${2}`, text: "ARDUINO With 7 Segement Display" },
        { href: `/arduino/${11}`, text: "ARDUINO With OLED" },
        { href: `/arduino/${12}`, text: "ARDUINO With LED and PUSH BUTTON" },
        { href: `/arduino/${14}`, text: "ARDUINO With PUSH BUTTON and OLED" },
      ]
    },
    {
      label: "Sensor Experiments",
      key: "toggle2",
      links: [
        { href: `/arduino/${4}`, text: "ARDUINO With PIR SENSOR" },
        { href: `/arduino/${5}`, text: "ARDUINO With SOIL MOISTURE SENSOR" },
        { href: `/arduino/${13}`, text: "ARDUINO With DHT22" }
      ]
    },
    {
      label: "Motor Experiments",
      key: "toggle3",
      links: [
        { href: `/arduino/${8}`, text: "ARDUINO With DC MOTOR" },
        { href: `/arduino/${9}`, text: "ARDUINO With SERVO MOTOR" },
        { href: `/arduino/${10}`, text: "ARDUINO With GEAR MOTOR" }
      ]
    },
    {
      label: "LCD and Traffic Experiments",
      key: "toggle4",
      links: [
        { href: `/arduino/${3}`, text: "ARDUINO With TRAFFIC LIGHT" },
        { href: `/arduino/${7}`, text: "ARDUINO With LCD" }
      ]
    },
    {
      label: "Ultrasonic with LED Experiments",
      key: "toggle5",
      links: [
        { href: `/arduino/${6}`, text: "ARDUINO With ULTRASONIC and LED" }
      ]
    }
  ];

  return (
    <>
      {/* Button to show/hide experiment section */}
      <button
        className="md:hidden block bg-blue-500 text-white p-2 rounded-md mt-36 ml-4"
        onClick={() => handleToggle('toggle1')}
      >
        {toggles.toggle1 ? "Hide Experiments" : "Show Experiments"}
      </button>

      {/* Sidebar for experiment categories */}
      <div
        className={`${toggles.toggle1 ? "block" : "hidden"} md:block relative flex flex-col mt-2 md:mt-36 ml-1 md:ml-4 2xl:ml-10`}
      >
        <div className="md:w-72 h-[700px] bg-white bg-gray-100 rounded p-4">
          {experiments.map((experiment, index) => (
            <div key={index}>
              <ToggleButton
                label={experiment.label}
                onClick={() => handleToggle(experiment.key)}
                isOpen={toggles[experiment.key]}
              />
              <ToggleLinks toggle={toggles[experiment.key]} links={experiment.links} />
            </div>
          ))}
        </div>
      </div>

      {/* In this Article sidebar (Desktop only) */}
      <div className="hidden md:block md:w-72 h-[350px] md:absolute md:mt-[-720px] md:ml-[1110px] 2xl:ml-[1230px] bg-white p-4 rounded shadow-sm">
        <h1 className="text-2xl text-gray-800">In this Article</h1>
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
      </div>

      {/* Main content */}
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
