// File: app/raspberry/page.tsx or pages/raspberry.tsx (depending on Next version)
import Image from 'next/image';
import image1 from '../../../public/images/Pi_Sarkitshala.webp';

export const metadata = {
  title: "Raspberry Pi Projects & Tutorials for IoT & Robotics - Sarkitshala",
  description: "Explore 50+ Raspberry Pi Projects for IoT, Robotics, and Home Automation. Learn step-by-step with tutorials, programming guides, and expert insights from Sarkitshala.",
  robots: "index, follow",
  openGraph: {
    title: "Best Raspberry Pi Projects, Tutorials & IoT for Beginners - Sarkitshala",
    description: "Explore 50+ hands-on Raspberry Pi tutorials for IoT, Robotics, and DIY Electronics. Get step-by-step guidance from expert instructors.",
    url: "https://sarkitshala.com/raspberry",
    images: [
      {
        url: "https://sarkitshala.com/images/public/images/Pi_Sarkitshala.png",
        width: 1200,
        height: 630,
        alt: "Sarkitshala - Raspberry Pi Projects and Tutorials",
      },
    ],
    site_name: "Sarkitshala",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sarkitshala",
    title: "Explore Raspberry Pi Projects | Sarkitshala",
    description: "Discover hands-on Raspberry Pi projects and tutorials for IoT, Robotics, and DIY Electronics. Expert guidance for all levels.",
    image: "https://sarkitshala.com/images/public/images/RP.png",
  },
  canonical: "https://sarkitshala.com/raspberry",
  keywords: "Raspberry Pi Projects, IoT with Raspberry Pi, Robotics, Raspberry Pi tutorials for beginners, Home Automation",
  author: "Sarkitshala Team (Amarjeet Singh Chauhan, Aman Raj)",
};

export default function RaspberryPiPage() {
  return (
    <main className="max-w-3xl mx-auto p-4 mt-6 md:mt-24 bg-white rounded-xl shadow-md text-justify">
      <header className="text-center">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-700 mb-4">
          All About Raspberry Pi
        </h1>
        <Image
          src={image1}
          alt="Raspberry Pi Sarkitshala"
          width={800}
          height={900}
          className="mx-auto rounded"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
        />
        <p className="text-sm mt-2 font-medium">Written by: Upendra Prawal</p>
      </header>

      {/* Sections */}
      <ArticleSection
        title="What is Raspberry Pi?"
        content={
          <>
            <p>
              The Raspberry Pi is a small, affordable, single-board computer developed by the Raspberry Pi Foundation to promote the teaching of basic computer science in schools and developing countries. It is used for programming, robotics, and DIY electronics.
            </p>
            <p>
              It features a Broadcom ARM-based CPU, RAM, GPIO pins, HDMI, USB, and Ethernet. It runs Linux-based OSs, primarily Raspberry Pi OS.
            </p>
            <p>
              Small yet powerful, it supports peripherals like cameras, sensors, displays, making it ideal for IoT, robotics, and home automation.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Key Features of Raspberry Pi:"
        content={
          <ul className="list-disc list-inside space-y-2">
            <li>Broadcom ARM-based quad-core processor</li>
            <li>RAM options: 1GB to 8GB</li>
            <li>Multiple USB ports</li>
            <li>HDMI output</li>
            <li>GPIO pins for sensors and motors</li>
            <li>Wi-Fi and Bluetooth support</li>
            <li>MicroSD for OS and storage</li>
            <li>Supports Python, C, Java, and more</li>
          </ul>
        }
      />

      <ArticleSection
        title="Common Uses of Raspberry Pi:"
        content={
          <ul className="list-disc list-inside space-y-2">
            <li>Learning programming (Python, Scratch)</li>
            <li>Home automation systems</li>
            <li>Personal servers or media centers (Plex/Kodi)</li>
            <li>Robotics and IoT development</li>
            <li>DIY security camera systems</li>
            <li>STEM education and training</li>
          </ul>
        }
      />

      <ArticleSection
        title="How Raspberry Pi Changed Computing"
        content={
          <>
            <p>
              Raspberry Pi democratized computing by providing low-cost hardware for education and hobbyists. It's used globally in schools and by makers to prototype and build real-world projects affordably.
            </p>
            <p>
              Its huge online community, tutorials, and ecosystem have fueled innovation in DIY electronics and robotics.
            </p>
          </>
        }
      />

      <ArticleSection
        title="Raspberry Pi Models"
        content={
          <>
            <p>Popular Raspberry Pi versions include:</p>
            <ul className="list-disc list-inside space-y-2 mt-2">
              <li><strong>Raspberry Pi 1:</strong> 700MHz single-core, 256MB RAM</li>
              <li><strong>Raspberry Pi 4:</strong> Up to 8GB RAM, dual 4K monitors</li>
              <li><strong>Raspberry Pi Zero:</strong> Ultra-compact and cost-effective model</li>
            </ul>
          </>
        }
      />

      <ArticleSection
        title="Conclusion"
        content={
          <>
            <p>
              Raspberry Pi is a transformative tool that enables affordable computing and hands-on learning. From classrooms to industry labs, it empowers users to innovate in electronics, programming, and IoT.
            </p>
            <p>
              Whether you are a student, hobbyist, or engineer — Raspberry Pi opens the door to endless project opportunities.
            </p>
          </>
        }
      />
    </main>
  );
}


function ArticleSection({ title, content }) {
  return (
    <section className="mt-8 border border-gray-300 p-4 rounded-md">
      <h2 className="text-xl md:text-2xl font-bold text-blue-600 mb-4">{title}</h2>
      <div className="space-y-4 text-gray-800">{content}</div>
    </section>
  );
}
