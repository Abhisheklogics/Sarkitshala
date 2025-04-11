'use client';
import Link from 'next/link';
import { useState } from 'react';



let protocols=[
  
  {
    slug: "amqp",
    text: "AMQP Communication",
  },
  {
    slug: "bluetooth",
    text: "Bluetooth Communication",
  },
  {
    slug: "gsm",
    text: "GSM Communication",
  },
  {
    slug: "coap",
    text: "CoAP Communication",
  },
  {
    slug:"dds",
    text:"Data Distribution Service Communication"
  },
  {
    slug: "lorawan",
    text: "LoRaWAN Communication",
  },
  {
    slug:"lwm2m",
    text:"LWM2M communication"
  },
  {
    slug: "mqtt",
    text: "MQTT Communication",
  },
{
  slug:"wifi",
  text:"Wi-Fi Implementation"
},


  {
    slug: "xmpp",
    text: "XMPP Communication",
  },

];

export default function RootLayout({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-white">
      {/* Mobile Toggle Button */}
      <header className="md:hidden p-4 bg-white shadow-md z-10">
        <button
          onClick={handleToggle}
          className="bg-blue-600 text-white px-4 py-2 rounded-md w-full"
        >
          {isOpen ? 'Hide IoT Protocols' : 'Show IoT Protocols'}
        </button>
      </header>

      {/* Sidebar */}
      <aside
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:block md:w-72 bg-gray-50 p-4 md:border-r`}
      >
        <div className="mb-4 mt-20">
          <div className="w-full py-3 px-4 bg-gray-100 rounded-md shadow-sm">
            <h1 className="font-semibold text-gray-800">IoT Protocols</h1>
          </div>
        </div>

        {/* Sidebar Links */}
        <ul className="space-y-3">
          {protocols.map((link, index) => (
            <li key={index}>
              <Link
                href={`/iotProtocols/${link.slug}`}
                className="block bg-white border border-gray-300 rounded-md px-4 py-2 text-gray-800 hover:text-orange-500 hover:shadow-lg transition-all duration-200"
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
}
