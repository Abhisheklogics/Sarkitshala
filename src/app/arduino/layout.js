
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
          
        { href: `/arduino/${'interfacing-led' }`, text: "Interfacing LED" },
        { href: `/arduino/${'interfacing-rgb-led'}`, text: "Interfacing an RGB LED " },
    
        { href: `/arduino/${'interfacing-seven-segment-display'}`, text: "Interfacing 7-Segement Display" },
        { href: `/arduino/${'interfacing-ir-sensor'}`, text: "Interfacing IR Sensor" },
        { href: `/arduino/${'interfacing-rfid'}`, text: "Interfacing RFID" },
        { href: `/arduino/${'interfacing-ldr'}`, text: "Interfacing LDR" },
        { href: `/arduino/${'interfacing-dtmf-module'}`, text: "Interfacing DTMF MODULE" },
        { href: `/arduino/${'interfacing-keypad'}`, text: "Interfacing Keypad" },
        { href: `/arduino/${'interfacing-oled'}`, text: "Interfacing OLED" },
        { href: `/arduino/${'interfacing-pir-sensor'}`, text: "Interfacing PIR Sensor" },
        { href: `/arduino/${'interfacing-soil-moisture'}`, text: "Interfacing Soil Moisture Sensor" },
        { href: `/arduino/${'interfacing-dc-motor'}`, text: "Interfacing DC Motor" },
        { href: `/arduino/${'interfacing-servo-motor'}`, text: "Interfacing Servo Motor" },
        { href: `/arduino/${'interfacing-gear-motor'}`, text: "Interfacing Gear Motor" },
        { href: `/arduino/${'interfacing-traffic-light-system'}`, text: "Interfacing LED's for Traffic Light" },
        { href: `/arduino/${'interfacing-lcd'}`, text: "Interfacing LCD" },
        { href: `/arduino/${'interfacing-ultrasonic-sensor-with-led'}`, text: "Interfacing Ultrasonic & LED" },
        { href: `/arduino/${'interfacing-oled-with-push-button'}`, text: "Interfacing Push Button & OLED" },
        { href: `/arduino/${'interfacing-dht22'}`, text: "Interfacing DHT22" },
        { href: `/arduino/${'interfacing-led-with-push-button'}`, text: "Interfacing LED & Push Button" },
        { href: `/arduino/${'interfacing-joystick-module'}`, text: "Interfacing Joystick Module" },
        { href: `/arduino/${'interfacing-laser-sensor'}`, text: "Interfacing Laser Sensor" },
        { href: `/arduino/${'interfacing-obstacle-avoidance-sensor'}`, text: "Interfacing Obstacle Avoidance Sensor" },
        { href: `/arduino/${'interfacing-finger-detecting-heartbeat'}`, text: "Interfacing Finger Detecting Heartbeat" },
        { href: `/arduino/${'interfacing-sound-sensor'}`, text: "Interfacing Sound Sensor Module" },
        { href: `/arduino/${'interfacing-metal-touch-sensor'}`, text: "Interfacing Metal Touch Sensor Module" },
        { href: `/arduino/${'interfacing-line-sensor-module'}`, text: "Interfacing Line Sensor Module" },
        { href: `/arduino/${'interfacing-linear-magnetic-hall-sensor'}`, text: "Interfacing Liner Magnetic Hall Sensor Module" },
        { href: `/arduino/${'interfacing-thermostat-switch'}`, text: "Interfacing Digital Microcomputer Thermostat switch" },
        { href: `/arduino/${'interfacing-humidity-controller'}`, text: "Interfacing Humidity Controller Module" },
        { href: `/arduino/${'interfacing-stainless-steel-probe-temperature-sensor'}`, text: "Interfacing Stainless Steel Probe Temperature Sensor" },
        { href: `/arduino/${'interfacing-thermocouple-sensor'}`, text: "Interfacing Thermocouple Sensor Module" },

        
      
      ] 
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
        className={`${toggles.toggle1 ? "block" : "hidden"} md:block relative flex flex-col mt-2 md:mt-28 ml-0 md:ml-4 2xl:ml-10`}
        aria-label="Sidebar Navigation"
      >
        <div className="md:w-[330px] h-fit md:h-[700px]  rounded p-4">
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

     

      <main className="flex-1 p-4">{children}</main>
    </>
  );
}
