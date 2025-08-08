'use client';
import Link from 'next/link';
import { useState } from 'react';



const experiments = [
{
   
  label: "IOT Protocols",
    key: "basic",
   
  links:[
    {
    href: "/iotProtocols/amqp",
    text: "AMQP Communication",
  },
  {
    href: "/iotProtocols/bluetooth",
    text: "Bluetooth Communication",
  },
  {
    href: "/iotProtocols/gsm",
    text: "GSM Communication",
  },
  {
    href: "/iotProtocols/coap",
    text: "CoAP Communication",
  },
  {
    href:"/iotProtocols/dds",
    text:"Data Distribution Service Communication"
  },
  {
    href: "/iotProtocols/lorawan",
    text: "LoRaWAN Communication",
  },
  {
    href:"/iotProtocols/lwm2m",
    text:"LWM2M communication"
  },
  {
    href: "/iotProtocols/mqtt",
    text: "MQTT Communication",
  },
{
  href:"/iotProtocols/wifi",
  text:"Wi-Fi Implementation"
},


  {
   href: "xmpp",
    text: "XMPP Communication",
  },

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



