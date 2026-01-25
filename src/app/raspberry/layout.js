'use client';
import Link from "next/link";
import { useState } from "react";


  const experiments = [
    {
       label: "Basic Experiments",
    key: "basic",
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
        
      ]
    },

        { 
          label: "Intermediate Experiments",
    key: "intermediate",
      links: [
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


const ToggleButton = ({ label, onClick, isOpen }) => (
  <button onClick={onClick} aria-expanded={isOpen} className='toggle-btn'>
    <span className='toggle-btn-text'>{label}</span>
   
  </button>
);

const ToggleLinks = ({ toggle, links }) => (
  <ul className={`toggle-links-list ${toggle ? "block" : "hidden"}`} aria-hidden={!toggle}>
    {links.map((link, index) => (
      <li key={index}>
        <Link href={link.href} className='toggle-link-item'>
          {link.text}
        </Link>
      </li>
    ))}
  </ul>
);

export default function RootLayout({ children }) {
  const [toggles, setToggles] = useState({
    basic: true,
    intermediate: false,
    advanced: false,
  });

  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const handleToggle = (toggleKey) => {
    setToggles((prevState) => ({
      ...prevState,
      [toggleKey]: !prevState[toggleKey],
    }));
  };

  return (
    <div className='layout-wrapper'>
      {/* Mobile Menu Button */}
      <button  onClick={() => setSidebarOpen((prev)=>!prev)}>
       {isSidebarOpen == true ? <p className='mobile-menu-btn'>✖ Close</p> :<p className='mobile-menu-btn'> ☰ More Experiments</p>}
      </button>

      {/* Sidebar */}
      <aside className={`sidebar-wrapper ${isSidebarOpen ? "open" : ""}`}>
       

        {experiments.map((experiment, index) => (
          <div key={index} className="mb-6">
            <ToggleButton
              label={experiment.label}
              onClick={() => handleToggle(experiment.key)}
              isOpen={toggles[experiment.key]}
            />
            <ToggleLinks toggle={toggles[experiment.key]} links={experiment.links} />
          </div>
        ))}
      </aside>

      {/* Main Content */}
      <main className='main-content'>{children}</main>
    </div>
  );
}


