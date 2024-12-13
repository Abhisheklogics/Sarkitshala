'use client';
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import helo from '../../../public/images/hello.png';
import down from '../../../public/images/down-arrow.png';

const ToggleButton = ({ toggle, setToggle, label }) => (
  <button onClick={() => setToggle(!toggle)} className="  md:py-2 px-1  md:pointer md:w-[310px]  hover:bg-gray-200 text-center mb-6">
   <h1 className="font-bold text-gray-800  md:text-left">{label}</h1> 
    <Image src={down} height={30} width={20} className="absolute left-[300px] mt-[-20px]" />
  </button>
);

const ToggleLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} space-y-4 md:capitalize `}>
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
  const [toggles, setToggles] = useState({
    toggle1: false,
    toggle2: false,
    toggle3: false,
    toggle4: false,
    toggle5: false
  });

  const handleToggle = (toggleKey) => {
    setToggles((prevState) => ({
      ...prevState,
      [toggleKey]: !prevState[toggleKey]
    }));
  };

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
      <button
        className="  md:hidden block bg-blue-500  text-white p-2 rounded-md mt-36 ml-4"
        onClick={() => handleToggle('toggle1')}
      >
        {toggles.toggle1 ? "Hide Experiments" : "Show Experiments"}
      </button>

      <div className={`${toggles.toggle1 ? "block" : "hidden"} md:block relative flex flex-col mt-2 md:mt-36 ml-1 md:ml-10 2xl:ml-24`}>
        <div className="md:w-72 md:h-[600px] h-[700px]  bg-white rounded p-4">
          {experiments.map((experiment, index) => (
            <div key={index}>
              <ToggleButton
                toggle={toggles[experiment.key]}
                setToggle={() => handleToggle(experiment.key)}
                label={experiment.label}
              />
              <ToggleLinks toggle={toggles[experiment.key]} links={experiment.links} />
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block md:w-72 h-[350px] md:absolute md:mt-[-620px] md:ml-[1110px] 2xl:ml-[1230px] bg-white p-4 rounded shadow-sm">
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
      
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
