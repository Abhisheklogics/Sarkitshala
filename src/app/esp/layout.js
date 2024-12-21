'use client'

import Link from 'next/link';
import { useState } from "react";

export default function RootLayout({ children }) {
  let [toggle, setToggle] = useState(false);
  const experiments = [
    "With Dht11 Sensor",
    "With HC-SR04 Ultrasonic Sensor",
    "With Sound Sensor",
    "With HW-040 Potentiometer",
    "With IR Receiver",
    "With Servo Motor",
  ];

  return (
    <>
      <button
        className="md:hidden  mt-32 block bg-blue-500 text-white p-2 rounded-md m-4"
        onClick={() => setToggle(!toggle)}
      >
        {toggle ? "Hide Experiments" : "Show Experiments"}
      </button>

      {/* Dropdown Menu for Mobile */}
      <div
        className={`${
          toggle ? "block" : "hidden"
        } md:block md:relative flex flex-col md:mt-32 ml-1 2xl:ml-0 md:mt-0`}
      >
        <div className="inset-0 md:w-72 md:h-fit bg-white rounded-md p-4 mt-4 ml-6 transition-transform">
          <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
            All Experiments
          </h1>
          <ul className="space-y-4 md:space-y-2">
            {experiments.map((experiment, index) => (
              <li key={index}>
                <Link
                  href={`/esp/${index + 1}`}
                  className="block px-4 py-2 rounded-md text-sm text-blue-950 hover:bg-gray-200"
                >
                  {`esp with ${experiment}`}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4">{children}</div>
    </>
  );
}
