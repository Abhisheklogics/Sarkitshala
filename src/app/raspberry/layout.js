'use client';
import Link from "next/link";
import { useState } from "react";

// Toggle Button Component
const ToggleButton = ({ label, onClick, isOpen }) => (
  <button
    onClick={onClick}
    aria-expanded={isOpen}
    className="w-full md:w-[310px] text-left mb-4 py-3 px-2 md:py-2 relative rounded transition"
  >
    <div className="flex justify-between items-center">
      <h2 className="font-semibold text-gray-800 text-base md:text-lg">{label}</h2>
     
    </div>
  </button>
);

// List of Experiment Links
const ExperimentLinks = ({ toggle, links }) => (
  <ul className={`space-y-3 ${toggle ? 'block' : 'hidden'}`}>
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
  const [toggles, setToggles] = useState({ toggle1: true });

  const handleToggle = (key) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
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
        { href: "/raspberry/interfacing-ldr-raspberrypi", text: "Interfacing LDR (Light Sensor)" },
        { href: "/raspberry/lcd-i2c", text: "Interfacing LCD" },
        { href: "/raspberry/dc-motor-control-l298n", text: "Interfacing DC Motor" },
        { href: "/raspberry/ultrasonic-sensor-raspberrypir", text: "Interfacing Ultrasonic Sensor" },
        { href: "/raspberry/dht11-raspberrypi", text: "Interfacing DHT11 Sensor" },
        { href: "/raspberry/pulse-rate-sensor-raspberrypi", text: "Interfacing Pulse Rate Sensor" },
        { href: "/raspberry/pir-sensor-raspberrypi", text: "Interfacing PIR Sensor" },
        { href: "/raspberry/gear-motor", text: "Interfacing Gear Motor" },
        { href: "/raspberry/obstacle-avoidance-sensor", text: "Interfacing Obstacle Avoidance Sensor" },
        { href: "/raspberry/servo-motor", text: "Interfacing Sound Sensor" },
        { href: "/raspberry/oled-display", text: "Interfacing OLED Display" },
        { href: "/raspberry/home-automation-system-raspberry-pi", text: "Home Automation System" },
        { href: "/raspberry/weather-station-raspberry-pi", text: "Weather Station" },
        { href: "/raspberry/security-camera-system", text: "Security Camera System" },
        { href: "/raspberry/controlled-drone", text: "Raspberry Pi-Controlled Drone" },
        { href: "/raspberry/drone-delivery-system-raspberry-pi", text: "Drone Delivery System" },
        { href: "/raspberry/automated-lighting-system", text: "Automated Lighting System" },
        { href: "/raspberry/health-monitoring-system", text: "Health Monitoring System" },
        { href: "/raspberry/plant-care-monitoring-system", text: "Plant Care and Monitoring System" },
        { href: "/raspberry/buzzer-activation-using-gpio", text: "Buzzer Activation using GPIO" },
        { href: "/raspberry/voice-assistant-python", text: "Voice Assistant using Python" },
        { href: "/raspberry/gpio-button", text: "GPIO Button Control" },
        { href: "/raspberry/barcode-scanner", text: "Barcode Scanner System" },
        { href: "/raspberry/rfid-attendance-system-raspberry-pi", text: "RFID Attendance System" },
        { href: "/raspberry/smart-dustbin-ultrasonic-sensor-raspberry-pi", text: "Smart Dustbin" },
        { href: "/raspberry/telegram-bot-controlled-raspberry-pi", text: "Telegram Bot Controlled System" },
        { href: "/raspberry/python-based-object-detection-with-pi-camera", text: "Object Detection with Pi Camera" },
        { href: "/raspberry/controlled-robot-car", text: "Controlled Robot Car" },
        { href: "/raspberry/gesture-controlled-media-player", text: "Gesture Controlled Media Player" },
        { href: "/raspberry/smart-energy-meter-using-pi-and-current-sensor", text: "Smart Energy Meter" },
        { href: "/raspberry/smart-mirror-with-raspberry-pi", text: "Smart Mirror" },
        { href: "/raspberry/machine-learning-model-deployment-on-raspberry-pi", text: "ML Model Deployment" },
        { href: "/raspberry/build-your-own-vpn-server-on-raspberry-pi", text: "VPN Server on Pi" },
        { href: "/raspberry/smart-traffic-light-system-using-image-processing", text: "Smart Traffic Light System" },
        { href: "/raspberry/lora-communication-with-raspberry-pi", text: "LoRa Communication" },
        { href: "/raspberry/license-plate-recognition-system", text: "License Plate Recognition" },
        { href: "/raspberry/smart-agriculture-system-raspberry-pi", text: "Smart Agriculture System" },
        { href: "/raspberry/industrial-iot-monitoring-system", text: "Industrial IoT Monitoring" },
        { href: "/raspberry/blockchain-node-deployment-on-raspberry-pi", text: "Blockchain Node Deployment" },
        { href: "/raspberry/interfacing-servo-raspberrypi", text: "Servo Motor with Raspberry Pi" },
        { href: "/raspberry/interfacing-dht11-dht22-raspberrypi", text: "DHT11/DHT22 with Raspberry Pi" },
        { href: "/raspberry/interfacing-gpsmodule-raspberrypi", text: "GPS Module with Raspberry Pi" },
        { href: "/raspberry/interfacing-soil-moisture-sensor-raspberrypi", text: "Soil Moisture Sensor" },
        { href: "/raspberry/interfacing-relay-module-raspberrypi", text: "Relay Module with Raspberry Pi" },
        { href: "/raspberry/interfacing-npk-sensor-raspberrypi", text: "NPK Sensor Module" },
        { href: "/raspberry/interfacing-soil-humidity-sensor-raspberrypi", text: "Soil Humidity Sensor" },
      ]
    }
  ];

  return (
    <>
      <header className="md:hidden mt-36 px-4">
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={() => handleToggle("toggle1")}
        >
          Raspberry Pi Experiments
        </button>
      </header>

      <nav className={`mt-2 ${toggles.toggle1 ? 'block' : 'hidden'} md:flex`}>
        <aside className="md:fixed md:w-80 2xl:h-[600px] md:h-[500px] overflow-y-auto p-4 mt-6 md:mt-28 md:ml-4 2xl:ml-10  rounded shadow-sm">
          {experiments.map((exp) => (
            <section key={exp.key} className="mb-6">
              <ToggleButton
                label={exp.label}
                onClick={() => handleToggle(exp.key)}
                isOpen={toggles[exp.key]}
              />
              <ExperimentLinks toggle={toggles[exp.key]} links={exp.links} />
            </section>
          ))}
        </aside>
      </nav>

      <main className="flex-1 p-4 ml-0 md:ml-80">
        {children}
      </main>
    </>
  );
}
