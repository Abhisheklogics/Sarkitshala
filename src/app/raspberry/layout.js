'use client';
import Link from "next/link";
import { useState } from "react";

// Reusable button component for toggling sections
const ToggleButton = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="md:py-2 px-1 relative md:w-[210px] h-fit hover:bg-gray-200 text-center mb-6"
  >
    <h1 className="font-bold text-gray-800 md:text-left">{label}</h1>
  </button>
);


const ExperimentLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} space-y-4`}>
    {links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="block py-2  rounded-md text-sm text-gray-900 hover:bg-gray-200"
        >
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  // State for toggling experiment categories
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
  });

  const handleToggle = (key) => {
    setToggles((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // Experiment data for Raspberry Pi projects
  const experiments = [
    {
      label: "Basic Experiments",
      key: "toggle1",
      links: [
        { href: "/raspberry/1", text: "Raspberry Pi With LED" },
        { href: "/raspberry/2", text: "Raspberry Pi With LCD" },
      ],
    },
    {
      label: "Sensor Experiments",
      key: "toggle2",
      links: [
        { href: "/raspberry/3", text: "Raspberry Pi With DC Motor" },
        { href: "/raspberry/4", text: "Raspberry Pi With Ultrasonic Sensor" },
      ],
    },
    {
      label: "Advanced Experiments",
      key: "toggle3",
      links: [
        { href: "/raspberry/5", text: "Raspberry Pi With DHT11 Sensor" },
        { href: "/raspberry/6", text: "Raspberry Pi With Pulse Rate Sensor" },
      ],
    },
  ];

  return (
    <>
    
      <button
        className="md:hidden block bg-blue-500 text-white p-2 mt-36 rounded-md m-4"
        onClick={() => handleToggle("toggle1")}
      >
        {toggles.toggle1 ? "Hide Experiments" : "Show Experiments"}
      </button>

      {/* Sidebar for experiment categories */}
      <div
        className={`${
          toggles.toggle1 ? "block" : "hidden"
        } md:block relative flex flex-col ml-1 2xl:ml-36`}
      >
        <div className="inset-0 md:w-72 bg-white rounded-md p-4 mt-4 md:ml-12 md:mt-40 2xl:ml-0 transition-transform">
          {experiments.map((experiment) => (
            <div key={experiment.key}>
              <ToggleButton
                label={experiment.label}
                onClick={() => handleToggle(experiment.key)}
              />
              <ExperimentLinks
                toggle={toggles[experiment.key]}
                links={experiment.links}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Article section */}
      <div className="hidden md:block md:absolute md:ml-[1100px] md:mt-[-50px] 2xl:ml-[1240px] md:h-[320px] md:w-72 md:bg-white md:p-1 md:rounded">
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
      </div>

      {/* Main content area */}
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
