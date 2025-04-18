import image1 from '../../../public/images/Arduino_SKT.webp'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
  description:
    "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
  alternates: {
    canonical: "https://sarkitshala.com/arduino",
  },
  openGraph: {
    title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
    description:
      "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
    url: "https://sarkitshala.com/arduino",
    images: [
      {
        url: "https://sarkitshala.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arduino Projects, Tutorials & Pin Functions",
      },
    ],
    locale: "en_US",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    site: "@sarkitshala",
    title: "Best Arduino Projects & Tutorials for Beginners - Sarkitshala",
    description:
      "Discover top Arduino projects & tutorials for beginners. Learn digital, analog & PWM pins, IoT applications, sensor projects & more with step-by-step guides!",
    image: "https://sarkitshala.com/opengraph-image.jpg",
  },
  keywords: [
    "What is Arduino ?",
    "Digital Pins of Arduino",
    "Analog Pins of Arduino",
    "Power Pins of Arduino",
    "PWM Pins of Arduino",
    "Communication Pins of Arduino",
    "Arduino Projects",
    "Arduino Tutorials",
    "Arduino for Beginners",
    "DIY Arduino Projects",
    "IoT Projects on Arduino"
  ]
};

const sameClass = `mt-4 max-w-4xl bg-white border border-black p-6 rounded shadow-lg`;
const headingClass = `text-lg md:text-2xl font-bold mb-2`;

export default function Page() {
  return (
    <>
     
      <div className="hidden md:block p-2 shadow-md rounded-md text-center md:fixed md:right-1 md:top-20 md:w-[200px] 2xl:w-fit max-w-xs mx-auto mt-4">
        <p className="font-semibold border text-lg p-2">Arduino Guide</p>
        <div className="flex flex-col gap-2 mt-2 text-sm md:text-md">
          {[
            { href: '#Arduino', label: 'Arduino' },
            { href: '#Overview-of-Arduino', label: 'Overview of Arduino' },
            { href: '#Arduino-Pins', label: 'Understanding Arduino Pins' },
            { href: '#Digital-Pins', label: 'Digital Pins' },
            { href: '#Analog-Pins', label: 'Analog Pins' },
            { href: '#Power-Pins', label: 'Power Pins' },
            { href: '#PWM-Pins', label: 'PWM Pins' },
            { href: '#Communication-Pins', label: 'Communication Pins' },
            { href: '#Steps-to-Get-Started-with-Arduino', label: 'Steps to Get Started' },
            { href: '#Conclusion', label: 'Conclusion' },
          ].map((item, idx) => (
            <Link
              key={idx}
              href={item.href}
              className="bg-white p-2 border border-black rounded shadow hover:text-blue-600 transition-all"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

     
      <div className="w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words font-serif h-fit overflow-y-auto md:w-[790px] md:ml-[330px] md:mt-20 md:p-5 md:bg-[#FFF0E5] 2xl:w-[820px] 2xl:ml-[430px]">
        <h1 id="Arduino" className="hover:text-blue-500 text-2xl mb-11 text-center md:text-3xl font-bold">
          Top Arduino Projects & Beginner Tutorials – Learn, Build & Innovate
        </h1>

        <Image src={image1} alt="Arduino development board overview" height={500} width={800} className="rounded mt-6" />

        <p className={sameClass}>
          Arduino was developed by a group of developers from Italy in 2005, led by Massimo Banzi.
        </p>

        <section className={sameClass}>
          <h2 id="Overview-of-Arduino" className={headingClass}>What is Arduino? A Beginner’s Overview</h2>
          <p>
            Arduino is an open-source electronics platform based on simple software and hardware. It's designed to make it easy for anyone to create interactive electronic projects.
            <br /><br />
            The platform consists of a microcontroller and development environment to write code and upload it to the board.
            Arduino can be used for a variety of purposes—from creating simple devices like blinking LEDs to complex robots and home automation systems.
          </p>
        </section>

        <section className={sameClass}>
          <h2 id="Arduino-Pins" className={headingClass}>How to Use Digital, Analog, and PWM Pins</h2>
          <p>An Arduino board typically has a range of input and output pins that allow it to interact with the external world. Below is a detailed explanation:</p>
        </section>

        <section className={sameClass}>
          <h3 id="Digital-Pins" className={headingClass}>1. Digital Pins</h3>
          <p>
            Arduino boards come with a set of digital pins (usually numbered from 0 to 13) that can be used for digital input and output.
            <br />
            - <strong>Input Mode</strong>: Detects high or low signals (1 or 0).<br />
            - <strong>Output Mode</strong>: Sends high (5V) or low (0V) signals to connected components.
          </p>
        </section>

        <section className={sameClass}>
          <h3 id="Analog-Pins" className={headingClass}>2. Analog Pins</h3>
          <p>
            Analog pins (A0 to A5) are used to read varying voltage levels from analog sensors.
            <br />
            - <strong>Analog Input</strong>: Reads values between 0–1023 (0V to 5V).<br />
            - <strong>Analog Output</strong>: Simulated using PWM for dimming LEDs or controlling motors.
          </p>
        </section>

        <section className={sameClass}>
          <h3 id="Power-Pins" className={headingClass}>3. Power Pins</h3>
          <p>
            - <strong>Vin</strong>: Input voltage from an external source.<br />
            - <strong>5V</strong>: Regulated 5V output.<br />
            - <strong>3.3V</strong>: Regulated 3.3V output.<br />
            - <strong>GND</strong>: Ground connection for circuits.
          </p>
        </section>

        <section className={sameClass}>
          <h3 id="PWM-Pins" className={headingClass}>4. PWM Pins</h3>
          <p>
            Pins marked with a tilde (~) symbol support Pulse Width Modulation. Useful for dimming LEDs, controlling servos or motors, etc.
          </p>
        </section>

        <section className={sameClass}>
          <h3 id="Communication-Pins" className={headingClass}>5. Communication Pins</h3>
          <p>
            - <strong>TX/RX</strong>: For Serial Communication<br />
            - <strong>I2C</strong>: SDA, SCL pins for multiple sensors<br />
            - <strong>SPI</strong>: MISO, MOSI, SCK for devices like SD cards and displays.
          </p>
        </section>

        <section className={sameClass}>
          <h2 id="Steps-to-Get-Started-with-Arduino" className={headingClass}>Steps to Get Started with Arduino</h2>
          <ol className="list-decimal list-inside">
            <li>Install the Arduino IDE.</li>
            <li>Connect your board via USB.</li>
            <li>Select the board and port.</li>
            <li>Write your code (e.g., blink LED).</li>
            <li>Upload it to the board.</li>
            <li>Observe results (LED blinks).</li>
          </ol>
        </section>

        <section className={sameClass}>
          <h3 id="Conclusion" className={headingClass}>Conclusion</h3>
          <p>
            After uploading the code, the LED will blink every second—showcasing the core functionality and simplicity of Arduino boards.
          </p>
        </section>

        
        <div className="mt-6 max-w-6xl mx-auto bg-white p-6 border border-black rounded shadow-lg">
          <h3 className="text-xl font-semibold mb-6 text-center text-gray-800">More Experiments of Arduino</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { slug: 'interfacing-led', text: 'Control an LED with Arduino (Step-by-Step Guide)' },
              { slug: 'interfacing-rgb-led', text: 'Interfacing RGB LED' },
              { slug: 'interfacing-7-segment-display', text: 'Interfacing 7-Segment Display' },
              { slug: 'interfacing-oled', text: 'Interfacing OLED' },
              { slug: 'interfacing-pir-sensor', text: 'Interfacing PIR Sensor' },
              { slug: 'interfacing-soil-moisture', text: 'Interfacing Soil Moisture Sensor' },
              { slug: 'interfacing-traffic-light-system', text: "Interfacing LED's For Traffic Light" },
              { slug: 'interfacing-ultrasonic-sensor-with-led', text: 'Interfacing Ultrasonic with LED' },
              { slug: 'interfacing-dc-motor', text: 'Interfacing DC Motor' },

              
            
            ].map((exp, i) => (
              <Link key={i} href={`/arduino/${exp.slug}`} className="block p-3 bg-[#FFF0E5] rounded border border-black hover:shadow-lg transition">
                {exp.text}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
