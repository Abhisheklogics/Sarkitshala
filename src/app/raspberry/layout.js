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
        
       { href: "/raspberry/interfacing-led-raspberrypi", text: "Interfacing LED" },
        { href: "/raspberry/interfacing-laser-sensor-raspberrypi", text: "Interfacing Laser Sensor" },
        { href: "/raspberry/interfacing-joystick-module-raspberrypi", text: "Interfacing Joystick Module" },
        { href: "/raspberry/interfacing-4x4-keypad-raspberrypi", text: "Interfacing 4x4 Keypad" },
        { href: "/raspberry/interfacing-ldr-raspberrypi", text: "Interfacing  LDR (Light Sensor)" },
        { href: "/raspberry/lcd-i2c", text: "Interfacing LCD" },
        { href: "/raspberry/dc-motor-control-l298n", text: "Interfacing DC Motor" },
        { href: "/raspberry/ultrasonic-sensor-raspberrypir", text: "Interfacing Ultrasonic Sensor" },
        { href: "/raspberry/dht11-raspberrypi", text: "Interfacing DHT11 Sensor" },
        { href: "/raspberry/pulse-rate-sensor-raspberrypi", text: "Interfacing Pulse Rate Sensor" },
        { href: "/raspberry/pir-sensor-raspberrypi", text: "Interfacing  PIR  Sensor" },

        { href: "/raspberry/gear-motor", text: "Interfacing Gear Motor" },
        { href: "/raspberry/obstacle-avoidance-sensor", text: "Interfacing Obstacle Avoidance Sensor" },
        { href: "/raspberry/servo-motor", text: "Interfacing Sound Sensor" },
        { href: "/raspberry/oled-display", text: "Interfacing  OLED Display" },
        { href: "/raspberry/home-automation-system-raspberry-pi", text: "Interfacing Home Automation System" },

        { href: "/raspberry/weather-station-raspberry-pi", text: "Interfacing Weather Station" },
        { href: "/raspberry/obstacle-avoidance-sensor", text: "Interfacing Obstacle Avoidance Sensor" },
        { href: "/raspberry/security-camera-system", text: "Interfacing Security Camera System" },
        { href: "/raspberry/controlled-drone", text: "Interfacing Raspberry Pi-Controlled Drone" },
        { href: "/raspberry/drone-delivery-system-raspberry-pi", text: "Interfacing Drone Delivery System " },

        { href: "/raspberry/automated-lighting-system", text: "Interfacing Automated Lighting System" },
        { href: "/raspberry/health-monitoring-system", text: "Interfacing Health Monitoring System" },
        { href: "/raspberry/plant-care-monitoring-system", text: "Interfacing Plant Care and Monitoring System" },
        { href: "/raspberry/buzzer-activation-using-gpio", text: "Interfacing Buzzer Activation using GPIO " },

         { href: "/raspberry/voice-assistant-python", text: "Interfacing Voice Assistant using Python" },
        { href: "/raspberry/gpio-button", text: "Interfacing GPIO Button Control" },
        { href: "/raspberry/barcode-scanner", text: "Interfacing Barcode Scanner System" },
        { href: "/raspberry/rfid-attendance-system-raspberry-pi", text: "Interfacing RFID-based Attendance System " },

        { href: "/raspberry/smart-dustbin-ultrasonic-sensor-raspberry-pi", text: "Interfacing Smart Dustbin " },
        { href: "/raspberry/telegram-bot-controlled-raspberry-pi", text: "Interfacing Telegram Bot Controlled" },
        { href: "/raspberry/python-based-object-detection-with-pi-camera", text: "Interfacing Object Detection " },
        { href: "/raspberry/controlled-robot-car", text: "Interfacing  Controlled Robot Car" },

         { href: "/raspberry/gesture-controlled-media-player", text: "Interfacing Gesture Controlled Media Player " },
        { href: "/raspberry/smart-energy-meter-using-pi-and-current-sensor", text: "Interfacing Smart Energy Meter " },
        { href: "/raspberry/smart-mirror-with-raspberry-pi", text: "Interfacing Smart Mirror" },
        { href: "/raspberry/machine-learning-model-deployment-on-raspberry-pi", text: "Interfacing  Machine Learning Model Deployment" },

         { href: "/raspberry/build-your-own-vpn-server-on-raspberry-pi", text: "Interfacing Build Your Own VPN Server" },
        { href: "/raspberry/smart-traffic-light-system-using-image-processing", text: "Interfacing Smart Traffic Light System using Image Processing " },
        { href: "/raspberry/lora-communication-with-raspberry-pi", text: "Interfacing LoRa Communication" },
        { href: "/raspberry/license-plate-recognition-system", text: "Interfacing License Plate Recognition System" },
         { href: "/raspberry/smart-agriculture-system-raspberry-pi", text: "Interfacing Smart Agriculture System" },
        { href: "/raspberry/industrial-iot-monitoring-system", text: "Interfacing Industrial IoT Monitoring System " },
        { href: "/raspberry/blockchain-node-deployment-on-raspberry-pi", text: "Interfacing Blockchain Node Deployment " },
        { href: "/raspberry/interfacing-servo-raspberrypi", text: "Interfacing Servo Motor with Raspberrypi" },

        
      
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
        className={`${toggles.toggle1 ? "block" : "hidden"}  flex flex-col mt-2 ml-0 md:ml-4 2xl:ml-10 `}>
        <div className="inset-0 md:w-80  md:block md:h-[500px]  2xl:h-[600px]  md:fixed md:overflow-y-scroll md:overflow-x-hidden ml-2 rounded-md p-4  md:ml-4 md:mt-28 2xl:ml-10">
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
