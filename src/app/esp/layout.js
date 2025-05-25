'use client'

import Link from 'next/link';
import { useState } from "react";
const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    className="w-full md:w-[310px] text-left mb-4 py-3 px-2 md:py-2 relative rounded  transition"
  >
    <div className="flex justify-between items-center">
      <h1 className="font-bold text-gray-800">{label}</h1>
     
    </div>
  </button>
);

const ExperimentLinks = ({ toggle, links }) => (
  <ul className={`${toggle ? "block" : "hidden"} space-y-4`}>
    {links.map((link, index) => (
      <li key={index}>
        <Link
          href={link.href}
          className="block text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded px-4 py-2 hover:text-orange-500 hover:border-orange-400 transition"
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
          { href: "/esp/led-blink-button-control", text: "LED Blink with Button " },
        { href: "/esp/motion-detection-alarm-system", text: "Motion Detection Alarm System" },
        { href: "/esp/simple-rgb-led-controller", text: "Simple RGB LED Controller" },
        { href: "/esp/blinking-led-websocket-control", text: "Blinking LED with WebSocket Control" },
        { href: "/esp/pwm-led-brightness", text: "Control LED Brightness using PWM" },
        { href: "/esp/html-css-web-page", text: " Web Page with HTML and CSS on ESP32" },
        { href: "/esp/multiple-leds-web-control", text: "Control Multiple LEDs" },
        { href: "/esp/bluetooth-serial-communication", text: "ESP32 with Bluetooth Serial Communication" },
          { href: "/esp/eeprom-storage", text: "EEPROM with ESP32" },
        { href: "/esp/push-button", text: "ESP32 Push Button Input: Reading Digital States" },
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
          

        { href: "/esp/rfid-access-control", text: "Interfacing RFID Module" },
        { href: "/esp/lora32-sx1276-oled", text: "TTGO LoRa32 SX1276 OLED" },
         { href: "/esp/keypad-access-control", text: "Interfacing Keypad" },
        { href: "/esp/solenoid-lock", text: "Interfacing Solenoid Lock" },
        { href: "/esp/16x2-lcd-i2c", text: "Interfacing 16x2 LCD" },
        { href: "/esp/soil-moisture-sensor", text: "Interfacing Soil Moisture" },
          { href: "/esp/mq7-gas-sensor", text: "Interfacing MQ-7 Gas Sensor" },
        
         { href: "/esp/light-sleep-mode", text: "Interfacing Light Sleep Mode" },
        { href: "/esp/smart-light-control-bluetooth", text: "Interfacing Smart Light Control" },
        { href: "/esp/iot-weather-station", text: "Interfacing (IoT) Weather Station" },
        { href: "/esp/web-server-temperature-display", text: "Interfacing Web Server for Temperature Data Display" },
          { href: "/esp/home-automation-relay-control", text: "Interfacing Home Automation System with Relay Control" },

         { href: "/esp/iot-smart-garden-esp32", text: "Interfacing  IoT Smart Garden" },
        { href: "/esp/face-recognition-door-unlock", text: "Face Recognition-Based Door Unlock System" },
        { href: "/esp/wifi-jammer", text: "Interfacing Wi-Fi Jammer Detector" },
        { href: "/esp/health-band-with-pulse", text: "Interfacing Health Band with Pulse" },
          { href: "/esp/sound-level-logger-classrooms", text: "Interfacing Sound Level Logger for Classrooms" },

         { href: "/esp/night-vision-surveillance-camera", text: "Night Vision Surveillance Camera" },
        { href: "/esp/solar-panel-monitoring", text: "Solar Panel Monitoring System" },
        { href: "/esp/smart-farming-robot-crop-surveillance", text: "Smart Farming Robot for Crop Surveillance" },
        { href: "/esp/smart-water-quality-monitoring", text: "Smart Water Quality Monitoring System" },
          { href: "/esp/industrial-iot-gateway-real-time-monitoring", text: "Industrial IoT Gateway for Real-Time Monitoring" },
        { href: "/esp/smart-agriculture-system-drone-control", text: "Agriculture System with Automated Drone Control" }

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
        <div className="md:fixed md:w-80 2xl:h-[600px] md:h-[500px] overflow-y-auto p-4 mt-6 md:mt-28 md:ml-4 2xl:ml-10  rounded shadow-sm">
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
