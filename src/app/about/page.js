"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const contributors = [
  {
    name: "Dr. Amarjeet Singh Chauhan",
    role: "Lecturer | Dept. Physics & Computer Science | Dayalbagh Education Institute",
    description:
      "A dedicated Lecturer at Dayalbagh Educational Institute, Agra, Amarjeet holds an M.Tech and Ph.D. in Computer Science. Before joining academia, he worked as a Systems Engineer at TCS. He brings a unique blend of industry and teaching experience to the field.",
  },
  {
    name: "Abhishek Kumar",
    role: "Developer | Arduino & IoT Specialist | Student at Dayalbagh Education Institute",
    description:
      "Abhishek is a core developer at Sarkitshala, specializing in Arduino simulations, React-based applications, and IoT integrations. He is instrumental in developing innovative tools like a web-based Arduino IDE and interactive circuit simulators.",
  },
  {
    name: "Aman Raj",
    role: "Founder | IoT & Electronics Innovator | Student at Dayalbagh Education Institute",
    description:
      "The visionary behind Sarkitshala, Aman is dedicated to simplifying electronics and IoT education. Through hands-on projects with Arduino, ESP32, and Raspberry Pi, he empowers students and tech enthusiasts to turn ideas into reality.",
  },
];

const AboutPage = () => {
  const [selected, setSelected] = useState(null);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-600">Empowering Minds, Advancing Technology</h1>
        <p className="text-lg">
          Welcome to <span className="font-semibold">Sarkitshala.com</span>, a dedicated online platform created to support and nurture the next generation of technologists, students, researchers, and faculty members.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Meet the Minds Behind Sarkitshala</h2>
        <p className="mt-2 text-gray-600 text-center">Click on a name to learn more about their contributions!</p>

        <div className="mt-6 space-y-4">
          {contributors.map((contributor, index) => (
            <motion.div
              key={index}
              className="p-4 bg-gray-100 rounded-lg cursor-pointer hover:bg-blue-50 transition-all"
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelected(selected === index ? null : index)}
            >
              <h3 className="text-lg font-bold text-blue-700">{contributor.name}</h3>
              <p className="text-gray-500">{contributor.role}</p>

              {selected === index && (
                <motion.p
                  className="mt-2 text-gray-700"
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {contributor.description}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Join Us in Shaping the Future</h2>
        <p className="mt-2 text-gray-700">🚀 Start exploring today and take your technological skills to the next level!</p>
        <a href="https://Sarkitshala.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Visit Sarkitshala
        </a>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who Can Benefit ?</h2>
        <ul className="mt-2 list-none text-gray-700"></ul>
        <li>✅Students</li>
        <li>✅Teachers</li>
        <li>✅Researchers</li>
        <li>✅Faculty Members</li>
        <li>✅IOT Enthusiast</li>
        <li>✅Tech Enthusiasts & Hobbyists</li>
      </div>

    </div>


  );
};

export default AboutPage;
