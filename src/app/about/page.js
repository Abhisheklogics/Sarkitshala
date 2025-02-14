import React from 'react';

export const metadata = {
  title: {
    default: 'About Us ', 
  },
  description: 'Welcome to Sarkitshala! Explore a variety of experiments and projects in IoT, Embedded Systems, Raspberry Pi, Arduino, ESP, and Drones. Learn from our experts, Sir Amarjeet Singh Chauhan and Aman Raj.',
  robots: {
    index: true,  
    follow: true,  
  },
  openGraph: {
    title: 'Sarkitshala - About Us',
    description: 'Explore a range of experiments, projects, and tutorials related to IoT, Embedded Systems, Raspberry Pi, Arduino, ESP, Drones, and more by our expert team.',
    url: 'https://sarkitshala.com/about',
    images: [
      {
        url: 'https://sarkitshala.com/opengraph-image.jpg', 
        width: 1200,
        height: 630,
        alt: 'Sarkitshala About Us Image',
      },
    ],
    site_name: 'Sarkitshala',
    keywords: 'IoT, Raspberry Pi, Embedded Systems, Arduino, ESP, Drones, Electronics, Smart Agriculture, Tutorials, Projects, Amarjeet Singh Chauhan, Aman Raj',
  },

  twitter: {
    card: 'summary_large_image', 
    site: '@sarkitshala', 
    title: 'Sarkitshala - About Us',
    description: 'Explore our full range of experiments and tutorials in IoT, Embedded Systems, Raspberry Pi, Arduino, ESP, and Drones.',
    image: 'https://sarkitshala.com/opengraph-image.jpg', 
  },
  author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)',
};

const About = () => {
  return (
    <div className="mt-[100px] bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl font-bold text-blue-600">About Us</h1>
        <p className="mt-[50px] text-lg">
          Welcome to <span className="font-semibold">Sarkitshala.com</span>, a dedicated online platform created to support and nurture the next generation of technologists, students, researchers, and faculty members. We are committed to providing free, high-quality tutorials that equip learners with in-depth knowledge and practical skills in technology, circuits, IoT, drones, robotics, and beyond.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-2 text-gray-700">
        In today’s rapidly evolving world, technology plays a crucial role in shaping industries, education, and innovation. At Sarkitshala, we believe that knowledge should be freely accessible to all, regardless of background or financial constraints. That’s why our platform is entirely free and open source, ensuring that students, educators, and researchers have unrestricted access to valuable learning resources.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Bridging the Gap Between Theory and Practice</h2>
        <p className="mt-2 text-gray-700">
        While many educational platforms focus solely on theoretical concepts, Sarkitshala takes a hands-on approach. We go beyond textbooks and lectures, offering practical, real-world applications of technology. Our tutorials are designed to:
        </p><br/>
        <ul>
          <li>✅ <b>Simplify Complex Concepts: </b>Breaking down intricate topics into easy-to-understand explanations.</li>
          <li>✅ <b>Encourage Hands-on Learning: </b>Providing step-by-step guides, projects, and real-world examples.</li>
          <li>✅ <b>Support Innovation and Research: </b>Enabling researchers and faculty members to explore new advancements.</li>
          <li>✅ <b>Enhance Career and Academic Growth: </b>Helping students and professionals develop industry-relevant skills.</li>
        </ul>
        </div>

        {/* Who Can Benefit ? */}
        <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who Can Benefit ?</h2>
        <p className="mt-2 text-gray-700">
        While many educational platforms focus solely on theoretical concepts, Sarkitshala takes a hands-on approach. We go beyond textbooks and lectures, offering practical, real-world applications of technology. Our tutorials are designed to:
        </p><br/>
        <ul>
          <li>✅ <b>Students: </b>Whether you're a beginner or an advanced learner, our tutorials provide structured learning paths to help you master technology and circuit design.</li>
          <li>✅ <b>Researchers: </b>We offer cutting-edge insights into emerging fields like IoT, robotics, and AI, aiding researchers in their experiments and innovations.</li>
          <li>✅ <b>Faculty Members: </b>Our well-researched content serves as a valuable teaching resource, helping educators enhance their curriculum with practical examples and case studies.</li>
          <li>✅ <b>Tech Enthusiasts & Hobbyists: </b>Whether you love experimenting with circuits or building your own tech projects, Sarkitshala provides everything you need to bring your ideas to life.</li>
        </ul>
        </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Join Us</h2>
        <p className="mt-2 text-gray-700">
          🚀 Start exploring today and take your technological skills to the next level!
        </p>
        <a href="https://Sarkitshala.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Visit Sarkitshala
        </a>
      </div>
    </div>
  );
};

export default About;