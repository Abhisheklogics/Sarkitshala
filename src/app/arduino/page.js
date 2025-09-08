import image1 from '../../../public/images/Arduino_SKT.webp';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
  description:
    "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
  alternates: {
    canonical: "https://sarkitshala.com/arduino",
  },
  twitter: {
    card: "summary_large_image"
    },
  jsonLd: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
    description:
      "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
    url: "https://sarkitshala.com/arduino",
    publisher: {
      "@type": "Organization",
      name: "Sarkitshala",
      logo: {
        "@type": "ImageObject",
        url: "https://sarkitshala.com/logo.webp",
      },
    },
    mainEntityOfPage: "https://sarkitshala.com/arduino",
   
    mainEntity: [
  {
    "@type": "Question",
    "name": "What is Arduino used for?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Arduino is widely used for DIY electronics, IoT projects, robotics, and STEM education. It helps you interact with the physical world using sensors and actuators."
    }
  },
  {
    "@type": "Question",
    "name": "Is Arduino good for beginners?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Yes! Arduino has a simple interface, a large supportive community, and plenty of tutorials. It’s ideal for beginners who want to learn electronics and coding."
    }
  },
  {
    "@type": "Question",
    "name": "Which Arduino board is best to start with?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The Arduino Uno is the most recommended board for beginners due to its reliability, community support, and simplicity."
    }
  }
]

  },
};




export default function Page() {
 


  return (
    <div className="articleContainer mt-20 md:w-[70%] md:ml-[200px]">
      <main className='' >
        <div>
          <h1 id="Arduino" >
            Best Arduino Projects, Pin Guides & Step-by-Step Tutorials for Beginners
          </h1>
 <Image
          src={image1}
          alt="Arduino Microcontroller Setup and Projects"
          width={700}
          height={400}
          className="rounded-lg mx-auto"
          
        />

          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2 id="Overview-of-Arduino" >
              What is Arduino? Understand its Features, Boards & Benefits
            </h2>
            <p>
              Arduino is an open-source electronics platform based on easy-to-use hardware and software.
              It allows users to read data from sensors and control actuators like motors, LEDs, and displays.
              It is widely used in DIY projects, IoT systems, robotics, and educational kits.
            </p>
          </section>

          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2 id="Arduino-Pins" >
              How to Use Digital, Analog, and PWM Pins
            </h2>
            <p >
              Understanding the types of pins is crucial to building Arduino projects:
            </p>
          </section>

          {[
            {
              id: "Digital-Pins",
              title: "1. Digital Pins",
              desc:
                "These are used to read/write HIGH or LOW signals. You can connect LEDs, switches, relays, etc. Use `pinMode()`, `digitalWrite()`, and `digitalRead()` functions.",
            },
            {
              id: "Analog-Pins",
              title: "2. Analog Pins",
              desc:
                "Analog pins (A0-A5) are used with analog sensors like LDR, temperature sensors, etc. They use `analogRead()` to measure voltages.",
            },
            {
              id: "Power-Pins",
              title: "3. Power Pins",
              desc:
                "These provide 3.3V or 5V power and GND to components like sensors and modules. Vin is used for supplying power from external sources.",
            },
            {
              id: "PWM-Pins",
              title: "4. PWM Pins",
              desc:
                "Pins marked with `~` can output PWM signals. Used in applications like dimming LEDs, controlling speed of DC motors and angle of servos.",
            },
            {
              id: "Communication-Pins",
              title: "5. Communication Pins",
              desc:
                "For communication between boards or modules:\n- TX/RX: Serial\n- SDA/SCL: I2C\n- MOSI/MISO/SCK: SPI",
            },
          ].map((item) => (
            <section key={item.id} className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
              <h3 id={item.id} >{item.title}</h3>
              <p  style={{ whiteSpace: "pre-line" }}>
                {item.desc}
              </p>
            </section>
          ))}

          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2 id="Steps-to-Get-Started-with-Arduino" >
              Steps to Get Started with Arduino
            </h2>
            <ol className={`list-decimal list-inside `}>
              <li>Download and install Arduino IDE.</li>
              <li>Connect your Arduino board using USB cable.</li>
              <li>Select your board and COM port from Tools menu.</li>
              <li>Write a simple sketch like Blink.</li>
              <li>Click Upload button to flash code.</li>
              <li>Observe output (like LED blinking).</li>
            </ol>
          </section>

          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h3 id="Conclusion" >Conclusion</h3>
            <p>
              Arduino makes learning electronics fun and accessible. With just a few components and a USB cable,
              you can start building real-world projects and gain valuable hardware and programming skills.
            </p>
          </section>

          <section className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h2 >Frequently Asked Questions about Arduino</h2>
            <div className="mt-4 space-y-4">
              <div>
                <h3 className="font-semibold">1. What is Arduino used for?</h3>
                <p >
                  Arduino is widely used for DIY electronics, IoT projects, robotics, and STEM education. It helps you interact with the physical world using sensors and actuators.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">2. Is Arduino good for beginners?</h3>
                <p >
                  Yes! Arduino has a simple interface, a large supportive community, and plenty of tutorials. It's ideal for beginners who want to learn electronics and coding.
                </p>
              </div>
              <div>
                <h3 className="font-semibold">3. Which Arduino board is best to start with?</h3>
                <p >
                  The Arduino Uno is the most recommended board for beginners due to its reliability, community support, and simplicity.
                </p>
              </div>
            </div>
          </section>

          <div className="mb-3 p-4 rounded-lg border border-gray-300 shadow-sm">
            <h3 >
              More Arduino Experiments 
            </h3>
            <div >
              {[
                { slug: 'interfacing-pir-sensor', text: 'Interfacing Arduino with PIR Sensor' },
                { slug: 'interfacing-rgb-led', text: 'Interfacing RGB LED' },
                { slug: 'interfacing-seven-segment-display', text: 'Interfacing 7-Segment Display' },
                { slug: 'interfacing-ir-sensor', text: 'Interfacing IR Sensor' },
              ].map((item, idx) => (
                <Link
                  key={idx}
                  href={`/arduino/${item.slug}`}
                  className={"block text-gray-400 bg-gray-800 border border-gray-400 hover:border-blue-500 rounded p-4 shadow hover:shadow-md transition"}
                >
                  {item.text}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
