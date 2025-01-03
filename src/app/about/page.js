import React from 'react';

export const metadata = {
  title: {
    default: 'About Us - Sarkitshala ', 
    
  },
  description: 'Welcome to Sarkitshala! Explore a variety of experiments and projects in IoT, Embedded Systems, and more by our team including Sir Amarjeet Singh Chauhan, Aman Raj, and Abhishek Kumar.', // Updated description for SEO
  robots: {
    index: true,  
    follow: true,  
  },
  openGraph: {
    title: 'Sarkitshala - HomePage', 
    description: 'Explore a range of experiments, projects, and tutorials related to IoT, Embedded Systems, and Smart Agriculture by our expert team.',
    url: 'https://sarkitshala.site', 
    images: [
      {
        url: 'https://sarkitshala.site/', 
        width: 1200,
        height: 630,
        alt: 'Sarkitshala Homepage Image',
      },
    ],
    site_name: 'Sarkitshala', 
    keywords: 'IoT, Raspberry Pi, Embedded Systems, Electronics, Smart Agriculture, Tutorials, Projects, Amarjeet Singh Chauhan, Aman Raj, Abhishek Kumar',
  },
  twitter: {
    card: 'summary_large_image', 
    site: '@sarkitshala', 
    title: 'Sarkitshala - HomePage', 
    description: 'Explore experiments in Embedded Systems and IoT by our team of experts.',
    image: 'https://sarkitshala.site/', 
  },
  author: 'Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj, Abhishek Kumar)'
};

const About = () => {
  return (
    <>
     
      <div className="min-h-screen mt-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-gray-900 hover:from-purple-500 hover:to-blue-500 py-12 px-6">
        <div className="max-w-4xl w-full bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">About Us</h1>
          <div className="text-lg text-gray-700">
            <p className="mb-4">
              Welcome to our About page! We are a team of passionate developers who are dedicated to delivering high-quality web applications.
            </p>
            <p className="mb-4">
              <strong>Amarjeet Singh Chauhan</strong> - A passionate developer who always strives for excellence in every project. Sir has been a constant source of support, not only to me but to all his students, providing valuable technical insights and encouragement. His exceptional expertise in technology and dedication to guiding students toward achieving their goals have been instrumental in fostering growth and confidence among everyone he mentors. His unwavering support inspires all of us to aim higher and achieve excellence.
            </p>
            <p className="mb-4">
              <strong>Aman Raj</strong> - An innovative and skilled developer who brings new ideas and solutions to the team, ensuring that we stay ahead in the industry. He has a keen eye for detail and always comes up with creative solutions for complex problems.
            </p>
            <p className="mb-4">
              <strong>Abhishek Kumar</strong> - Full Stack Developer: With experience in both front-end and back-end technologies, I strive to create seamless and intuitive user experiences. I have expertise in building scalable applications using Next.js, React, and Node.js.
            </p>

          
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
