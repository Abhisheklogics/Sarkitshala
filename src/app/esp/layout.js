  'use client';
import Link from "next/link";
import { useState } from "react";
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
  const [toggles, setToggles] = useState(true);

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
       {isSidebarOpen == true ? <p className='mobile-menu-btn'>✖ Close</p> :<p className='mobile-menu-btn'> ☰ Menu</p>}
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



