'use client'

import Link from 'next/link';
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
          className="block font-bold max-w-4xl bg-white text-sm p-3 rounded text-gray-900 hover:shadow-2xl hover:text-orange-400 border border-black"
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
      label: "ESP Experiments",
      key: "toggle1",
      links: [
        { href: "/esp/dht11", text: "Interfacing DHT11 Sensor" },
        { href: "/esp/ultrasonic-sensor", text:" Interfacing Ultrasonic Sensor" },
        { href: "/esp/flame-sensor", text: "Interfacing Flame Sensor" },
        { href: "/esp/sound-sensor", text: "Interfacing Sound Sensor" },
        { href: "/esp/potentiometer", text: "Interfacing Potentiometer" },
        { href: "/esp/ir-sensor", text: "Interfacing IR Sensor" },
        { href: "/esp/servo-motor", text: "Interfacing Servo Motor" },
         { href: "/esp/cam-wireless-camera", text: "Interfacing Cam Wireless" },
        { href: "/esp/dc-motor", text: "Interfacing DC Motor" },
        { href: "/esp/interfacing-shock-sensor", text: "Interfacing Shock Sensor" },
        { href: "/esp/interfacing-color-recognition-sensor", text: "Interfacing Color Recognition Sensor" },
          { href: "/esp/interfacing-ultrasonic-sensor", text: "Interfacing Ultrasonic Sensor" },

        { href: "/esp/rfid-access-control", text: "Interfacing RFID Moduler" },
        { href: "/esp/lora32-sx1276-oled", text: "TTGO LoRa32 SX1276 OLED" },
         { href: "/esp/keypad-access-control", text: "Interfacing Keypad" },
        { href: "/esp/solenoid-lock", text: "Interfacing Solenoid Lock" },
        { href: "/esp/16x2-lcd-i2c", text: "Interfacing 16x2 LCD" },
        { href: "/esp/soil-moisture-sensor", text: "Interfacing Soil Moisture" },
          { href: "/esp/mq7-gas-sensor", text: "Interfacing MQ-7 Gas Sensor" },
        
      ],
    },
   
  ];
  

  return (
    <>
     <header>
     <button
        className="md:hidden block bg-blue-500 text-white ml-4 p-2 mt-36 rounded-md md:ml-8"
        onClick={() => handleToggle("toggle1")}
      >
        {toggles.toggle1 ? "Esp Experiments" : "Esp Experiments"}
      </button>
      </header>
    
      <div
        className={`${
          toggles.toggle1 ? "block" : "hidden"
        } md:block relative flex flex-col ml-1  transition-transform `}
      >
        <div className="inset-0 md:w-72 md:absolute rounded-md p-4  md:ml-4 md:mt-28 2xl:ml-10">
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
      </div>
     


      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
