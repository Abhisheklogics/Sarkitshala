

 

  'use client';
import Link from "next/link";
import { useState } from "react";

const experiments = [
  {
    label: "Basic Experiments",
    key: "basic",
    links: [
      { href: `/arduino/interfacing-led`, text: "Interfacing LED" },
        { href: `/arduino/interfacing-rgb-led`, text: "Interfacing RGB LED" },
        { href: `/arduino/interfacing-seven-segment-display`, text: "Interfacing 7-Segment Display" },
        { href: `/arduino/interfacing-ir-sensor`, text: "Interfacing IR Sensor" },
        { href: `/arduino/interfacing-ldr`, text: "Interfacing LDR Sensor" },
        { href: `/arduino/interfacing-dtmf-module`, text: "Interfacing DTMF Module" },
        { href: `/arduino/interfacing-keypad`, text: "Interfacing Keypad" },
        { href: `/arduino/interfacing-oled-display-module`, text: "Interfacing OLED Display" },
        { href: `/arduino/interfacing-pir-sensor`, text: "Interfacing PIR Sensor" },
        { href: `/arduino/interfacing-soil-moisture`, text: "Interfacing Soil Moisture" },
        { href: `/arduino/interfacing-dc-motor`, text: "Interfacing DC Motor" },
        { href: `/arduino/interfacing-servo-motor`, text: "Interfacing Servo Motor" },
        { href: `/arduino/interfacing-gear-motor`, text: "Interfacing Gear Motor" },
        { href: `/arduino/interfacing-traffic-light-system`, text: "Traffic Light System" },
        { href: `/arduino/interfacing-lcd`, text: "Interfacing LCD" },
        { href: `/arduino/interfacing-ultrasonic-sensor-with-led`, text: "Ultrasonic & LED" },
        { href: `/arduino/interfacing-oled-with-push-button`, text: "Push Button & OLED" },
        { href: `/arduino/interfacing-dht22`, text: "Interfacing DHT22" },
        { href: `/arduino/interfacing-led-with-push-button`, text: "LED & Push Button" },
        { href: `/arduino/interfacing-joystick-module`, text: "Joystick Module" },
        { href: `/arduino/interfacing-laser-sensor`, text: "Laser Sensor" },
        { href: `/arduino/${'interfacing-obstacle-avoidance-sensor'}`, text: "Interfacing Obstacle Avoidance Sensor" },
        { href: `/arduino/${'interfacing-finger-detecting-heartbeat'}`, text: "Interfacing Finger Detecting Heartbeat" },
        { href: `/arduino/${'interfacing-sound-sensor'}`, text: "Interfacing Sound Sensor Module" },
        { href: `/arduino/${'interfacing-metal-touch-sensor'}`, text: "Interfacing Metal Touch Sensor Module" },
        { href: `/arduino/${'interfacing-line-sensor-module'}`, text: "Interfacing Line Sensor Module" },
        { href: `/arduino/${'interfacing-linear-magnetic-hall-sensor'}`, text: "Interfacing Liner Magnetic Hall Sensor Module" },
        { href: `/arduino/${'interfacing-thermostat-switch'}`, text: "Interfacing Digital Microcomputer Thermostat switch" },

    ],
  },
  {
    label: "Intermediate Experiments",
    key: "intermediate",
    links: [
     { href: `/arduino/${'interfacing-humidity-controller'}`, text: "Interfacing Humidity Controller Module" },
        { href: `/arduino/${'interfacing-stainless-steel-probe-temperature-sensor'}`, text: "Interfacing Stainless Steel Probe Temperature Sensor" },
        { href: `/arduino/${'interfacing-thermocouple-sensor'}`, text: "Interfacing Thermocouple Sensor Module" },
        { href: `/arduino/${'interfacing-ir-temperature-sensor'}`, text: "Interfacing Non-contact IR Temperature Sensor Module" },
        { href: `/arduino/${'interfacing-analog-temperature-sensor'}`, text: "Interfacing Analog Temperature Sensor Module" },
        { href: `/arduino/${'interfacing-voice-recognition-module'}`, text: "Interfacing Voice Recognition Module" },
        { href: `/arduino/${'interfacing-sound-detection-sensor'}`, text: "Interfacing Sound Detection Sensor Module" },
     
        { href: `/arduino/${'interfacing-analog-sound-sensor'}`, text: "Interfacing Analog Sound Sensor Module" },
        { href: `/arduino/${'interfacing-ambient-light-sensor'}`, text: "Interfacing Ambient Light Sensor Module" },
        { href: `/arduino/${'interfacing-light-intensity-sensor'}`, text: "Interfacing Light Intensity Sensor Module" },
        { href: `/arduino/${'interfacing-color-recognition-sensor'}`, text: "Interfacing Color Recognition Sensor Module" },
        { href: `/arduino/${'interfacing-flex-sensor'}`, text: "Interfacing Flex Sensor Module" },
        { href: `/arduino/${'interfacing-rain-sensor'}`, text: "Interfacing Rain Sensor Module" },
        { href: `/arduino/${'interfacing-hall-sensor'}`, text: "Interfacing Hall Sensor Module" },
        { href: `/arduino/${'interfacing-accelerometer-sensor'}`, text: "Interfacing Accelerometer Sensor Module" },
        { href: `/arduino/${'interfacing-broken-light-sensor'}`, text: "Interfacing Broken Light Sensor Module" },
        { href: `/arduino/${'interfacing-barometric-sensor-module'}`, text: "Interfacing Barometric Sensor Module" },
        { href: `/arduino/${'interfacing-magnetometer-sensor'}`, text: "Interfacing Magnetometer Sensor Module" },
        { href: `/arduino/${'interfacing-compass-magnetic-field-sensor'}`, text: "Interfacing Compass Magnetic Field Sensor Module" },
        { href: `/arduino/${'interfacing-imu-sensor-module'}`, text: "Interfacing IMU Sensor Module" },
        { href: `/arduino/${'interfacing-rfid-sensor-module'}`, text: "Interfacing RFID Sensor Module" },
        { href: `/arduino/${'interfacing-nfc-module'}`, text: "Interfacing NFC Module" },
        { href: `/arduino/${'interfacing-proximity-sensor'}`, text: "Interfacing Proximity Sensor Module" },
        { href: `/arduino/${'interfacing-speed-measuring-sensor'}`, text: "Interfacing Speed Measuring Sensor Module" },
        { href: `/arduino/${'interfacing-count-slot-sensor'}`, text: "Interfacing Count Slot Sensor Module" },
        { href: `/arduino/${'interfacing-rotation-sensor-module'}`, text: "Interfacing Rotation Sensor Module" },
        { href: `/arduino/${'interfacing-mq135-gas-sensor'}`, text: "Interfacing MQ135 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq2-gas-sensor'}`, text: "Interfacing MQ2 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq7-carbon-monoxide-sensor'}`, text: "Interfacing MQ7 Carbon Monoxide Sensor Module" },
        { href: `/arduino/${'interfacing-mq3-sensor-module'}`, text: "Interfacing MQ3 Sensor Module" },
        { href: `/arduino/${'interfacing-dust-sensor-gp2y1010au0f'}`, text: "Interfacing Dust Sensor Module" },
        { href: `/arduino/${'interfacing-mq5-gas-sensor-module'}`, text: "Interfacing MQ5 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq6-gas-sensor'}`, text: "interfacing MQ6 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq9-gas-sensor'}`, text: "Interfacing MQ9 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq4-gas-sensor'}`, text: "Interfacing MQ4 Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq8-hydrogen-gas-sensor'}`, text: "Interfacing MQ8 Hydrogen Gas Sensor Module" },
        { href: `/arduino/${'interfacing-mq5-lpg-sensor'}`, text: "Interfacing MQ5 LPG Sensor Module" },
        { href: `/arduino/${'interfacing-mh-z19-co2-sensor'}`, text: "Interfacing MHZ19 CO2 Sensor Module" },
        { href: `/arduino/${'interfacing-shock-sensor-module'}`, text: "Interfacing Shock Sensor Module" },
        { href: `/arduino/${'interfacing-flame-sensor'}`, text: "Interfacing Flame Sensor Module" },
        { href: `/arduino/${'interfacing-light-cup-sensor'}`, text: "Interfacing Light Cup Sensor Module" },
        { href: `/arduino/${'interfacing-1-channel-relay'}`, text: "Interfacing 1 Channel Relay Module" },
        { href: `/arduino/${'interfacing-2-channel-relay'}`, text: "Interfacing 2 Channel Relay Module" },
        { href: `/arduino/${'interfacing-4-channel-relay'}`, text: "Interfacing 4 Channel Relay Module" },
        { href: `/arduino/${'interfacing-8-channel-relay'}`, text: "Interfacing 8 Channel Relay Module" },
        { href: `/arduino/${'interfacing-solid-state-relay'}`, text: "Interfacing Solid State Relay Module" },
        { href: `/arduino/${'interfacing-smd-rgb-with-arduino'}`, text: "Interfacing SMD RGB Module" },
    ],
  },
  {
    label: "Advanced Experiments",
    key: "advanced",
    links: [
      { href: `/arduino/${'interfacing-two-color-led-arduino'}`, text: "Interfacing two color LED Module" },
        { href: `/arduino/${'interfacing-seven-color-flash'}`, text: "Interfacing seven color flash Module" },
        { href: `/arduino/${'interfacing-tilt-switch'}`, text: "Interfacing Tilt Switch Module" },
        { href: `/arduino/${'interfacing-toggle-switch-arduino'}`, text: "Interfacing Toggle Switch Module" },
        { href: `/arduino/${'interfacing-rotary-switch'}`, text: "Interfacing Rotary Switch Module" },
        { href: `/arduino/${'interfacing-rotary-encoder-switch'}`, text: "Interfacing Rotary Encoder Switch Module" },
        { href: `/arduino/${'interfacing-slide-switch'}`, text: "Interfacing Slide Switch Module" },
        { href: `/arduino/${'interfacing-reed-switch'}`, text: "Interfacing Reed Switch Module" },
        { href: `/arduino/${'interfacing-momentary-switch'}`, text: "Interfacing Momentary Switch Module" },
        { href: `/arduino/${'interfacing-mercury-switch'}`, text: "Interfacing Mercury Switch Module" },
        { href: `/arduino/${'interfacing-membrane-switch'}`, text: "Interfacing Membrane Switch Module" },
        { href: `/arduino/${'interfacing-matrix-switch'}`, text: "Interfacing Matrix Switch Module" },
        { href: `/arduino/${'interfacing-linear-hall-sensor'}`, text: "Interfacing Linear Hall Sensor Module" },
        { href: `/arduino/${'interfacing-limit-switch'}`, text: "Interfacing Limit Switch Module" },
        { href: `/arduino/${'interfacing-hall-effect-switch'}`, text: "Interfacing Hall Effect Switch Module" },
        { href: `/arduino/${'interfacing-foot-switch-arduino'}`, text: "Interfacing Foot Switch Module" },
        { href: `/arduino/${'interfacing-dip-switch-arduino'}`, text: "Interfacing DIP Switch Module" },
        { href: `/arduino/${'interfacing-ball-switch'}`, text: "Interfacing Ball Switch Module" },
        { href: `/arduino/${'interfacing-capacitive-touch-switch'}`, text: "Interfacing Capacitive Touch Switch Module" },
        { href: `/arduino/${'interfacing-16x2-lcd-hd44780'}`, text: "Interfacing 16x2 LCD hd44780 Module" },
        { href: `/arduino/${'interfacing-20x4-lcd-arduino'}`, text: "Interfacing 20x4 LCD Module" },
        { href: `/arduino/${'interfacing-tft-display-arduino'}`, text: "Interfacing TFT Display Module" },
        { href: `/arduino/${'interfacing-led-matrix-with-arduino'}`, text: "Interfacing LED Matrix Module" },
        { href: `/arduino/${'interfacing-nokia-5110-lcd'}`, text: "Interfacing NOKIA 5110 LCD Module" },
        { href: `/arduino/${'interfacing-nextion-display'}`, text: "Interfacing Nextion Display Module" },
        { href: `/arduino/${'interfacing-e-ink-display'}`, text: "Interfacing E-ink Display Module" },
        { href: `/arduino/${'interfacing-128x64-graphic-lcd'}`, text: "Interfacing 128x64 Graphic LCD" },
        { href: `/arduino/${'interfacing-rgb-led-matrix-panel'}`, text: "Interfacing RGB LED Matrix Panel" },
        { href: `/arduino/${'interfacing-touch-screen-tft'}`, text: "Interfacing Touch Screen TFT Module" },
        { href: `/arduino/${'interfacing-neopixel'}`, text: "Interfacing Neopixel" },
        { href: `/arduino/${'interfacing-dotstar-leds'}`, text: "Interfacing Dotstar LEDs" },
        { href: `/arduino/${'interfacing-smd-leds-arduino'}`, text: "Interfacing SMD LEDs" },
        { href: `/arduino/${'interfacing-infrared-led-arduino'}`, text: "Interfacing Infrared LED" },
        { href: `/arduino/${'interfacing-bi-color-led'}`, text: "Interfacing Bi-color LED" },
        { href: `/arduino/${'interfacing-tri-color-led'}`, text: "Interfacing Tri-color LED" },
        { href: `/arduino/${'interfacing-led-strip-analog'}`, text: "Interfacing LED Strip (Analog)" },
        { href: `/arduino/${'interfacing-led-strip-digital-addressable'}`, text: "Interfacing LED Strip (Digital/Addressable)" },
        { href: `/arduino/${'interfacing-high-power-led-arduino'}`, text: "Interfacing High Power LED (1W, 3W, etc.)" },
        { href: `/arduino/${'interfacing-indicator-led-modules'}`, text: "Interfacing Indicator LED Module" },
        { href: `/arduino/${'interfacing-pulse-sensor-arduino'}`, text: "Interfacing Pulse Sensor Module" },
        { href: `/arduino/${'interfacing-fingerprint-sensor-module'}`, text: "Interfacing Fingerprint Sensor Module" },
        { href: `/arduino/${'interfacing-gas-flow-sensor-arduino'}`, text: "Interfacing Gas Flow Sensor Module" },
        { href: `/arduino/${'interfacing-water-flow-sensor-yf-s201'}`, text: "Interfacing Water Flow Sensor Module" },
      
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



