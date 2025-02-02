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
    <>
      <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-gray-900 hover:from-purple-500 hover:to-blue-500 py-12 px-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 hover:text-blue-600">About Us</h1>
          <div className="text-md   ">
            <p className="mb-4">
              Welcome to Sarkitshala! We are a team of passionate developers and educators dedicated to delivering high-quality experiments, projects, and tutorials in the fields of IoT, Embedded Systems, Raspberry Pi, Arduino, ESP, and Drones. 
            </p>
            <p className="mb-4">
              <strong className='hover:text-blue-600'>Amarjeet Singh Chauhan</strong> - A visionary educator and leader, Amarjeet Sir has been pivotal in guiding countless students and professionals. With deep expertise in IoT, Embedded Systems, and Robotics, he has played a key role in shaping the careers of aspiring engineers. His passion for teaching, coupled with his unwavering support, has made him a beacon of inspiration and knowledge within the tech community, empowering students to reach their full potential.
            </p>
            <p className="mb-4">
              <strong className='hover:text-blue-600'>Aman Raj</strong> - A skilled and creative developer who brings a wealth of innovative ideas to every project. His ability to solve complex problems with simple, effective solutions makes him an invaluable part of our team. Aman ensures that every tutorial and project on Sarkitshala is up to date and aligned with the latest industry trends.
            </p>
            <p className="mb-4">
              Our platform is home to a wide range of free tutorials, projects, and experiments on popular topics like:
            </p>
            <ul className="list-disc ml-6 mb-4">
              <li>Raspberry Pi Projects</li>
              <li>Arduino Experiments</li>
              <li>ESP Projects and Tutorials</li>
              <li>Drone Technology and Applications</li>
              <li>Smart Agriculture Solutions</li>
              <li>IoT Applications and Embedded Systems</li>
            </ul>
            <p className="mb-4">
              At Sarkitshala, we believe in empowering the next generation of innovators by providing them with hands-on, practical learning resources. Join us as we explore new technologies and make cutting-edge advancements accessible to all.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
