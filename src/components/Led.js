import dynamic from "next/dynamic";
import Image from "next/image";
 import Side from "./side";
const LEDArduino = ({data}) => {

  return (
    <>   <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-24 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
      <h1 className="text-3xl font-bold mb-6 text-center">Interfacing of LED with Arduino</h1>
      <Image src={data.image1} height={400} width={500} className="md:ml-28" />
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">1. LED (Light Emitting Diode)</h2>
        <p>It is a semiconductor device that emits light when an electric current passes through it. It is a
special type of diode that converts electrical energy directly into light energy through a
process called electroluminescence. LEDs are widely used in various applications, including
display panels, indicator lights, lighting systems, and communication devices due to their
high efficiency, low power consumption, and long lifespan.</p>
      </section>
      
      <section className="mb-6  mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">2. How Does an LED Work?</h2>
        <h3 className="text-xl font-medium">2.1. Structure of an LED</h3>
        <ul className="list-disc pl-6">
        An LED is made of a p-n junction semiconductor, similar to a regular diode. It consists of:
          <li>P-type semiconductor (positive side) – Contains excess holes (positive charge carriers).</li>
          <li>N-type semiconductor (negative side) – Contains excess electrons (negative charge carriers).</li>
        </ul>
        <p>  When voltage is applied in the forward direction, electrons and holes recombine at the
        junction, releasing energy in the form of light (photons).</p>
      
        <h3 className="text-xl font-medium">2.2. Working Principle of LED (Electroluminescence)</h3>
        <ol className="list-decimal pl-6">
          <li>Forward Bias Application: A voltage is applied across the LED terminals.</li>
          <li>Electron-Hole Recombination: Electrons and holes recombine at the junction, emitting photons (light).</li>
          <li>Emission of Light: The wavelength (color) depends on the bandgap of the semiconductor material.</li>
          <li>Fast Switching – Turns on and off instantly without warm-up time.</li>
          <li>Compact Size – Available in small sizes suitable for various applications.</li>
          <li>Durability – Resistant to shock and vibration compared to traditional bulbs.</li>
          <li>Eco-Friendly – LEDs do not contain harmful substances like mercury.</li>
        </ol>
      </section>
      
      <section className="mb-6 w-fit mt-10 max-w-4xl bg-white p-4 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">Semiconductor Materials and LED Colors</h2>
        <p>The color of an LED depends on the bandgap energy of the semiconductor material used.
        Different materials produce different wavelengths of light:</p>
        <table className=" table-auto border-collapse border border-gray-500 w-full">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">LED Color</th>
              <th className="border border-gray-500 px-4 py-2">Semiconductor Material</th>
              <th className="border border-gray-500 px-4 py-2">Wavelength (nm)</th>
              
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Infrared (IR)</td>
              <td className="border border-gray-500 px-4 py-2">GaAs (Gallium Arsenide)</td>
              <td className="border border-gray-500 px-4 py-2">850 - 940 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">RED</td>
              <td className="border border-gray-500 px-4 py-2">GaAsP (Gallium Arsenide

Phosphide)</td>
              <td className="border border-gray-500 px-4 py-2">620 - 750 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Orange</td>
              <td className="border border-gray-500 px-4 py-2">GaAsP, GaP (Gallium Phosphide)</td>
              <td className="border border-gray-500 px-4 py-2">590 - 620 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Yellow</td>
              <td className="border border-gray-500 px-4 py-2">GaAsP, GaP</td>
              <td className="border border-gray-500 px-4 py-2">570 - 590 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Green</td>
              <td className="border border-gray-500 px-4 py-2">GaP, InGaN (Indium Gallium Nitride)</td>
              <td className="border border-gray-500 px-4 py-2">495 - 570 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Blue</td>
              <td className="border border-gray-500 px-4 py-2">InGaN, SiC (Silicon Carbide)</td>
              <td className="border border-gray-500 px-4 py-2">450 - 495 nm</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">White</td>
              <td className="border border-gray-500 px-4 py-2">Blue LED + Phosphor Coating</td>
              <td className="border border-gray-500 px-4 py-2">Mixed spectrum</td>
              
            </tr>
            <tr>
              <td className="border border-gray-500 px-4 py-2">Ultraviolet (UV)</td>
              <td className="border border-gray-500 px-4 py-2">GaN (Gallium Nitride)</td>
              <td className="border border-gray-500 px-4 py-2">10 - 400 nm</td>
              
            </tr>
          </tbody>
        </table>
      </section>
      <section className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h2 className="text-2xl font-semibold">Characteristics of LEDs</h2>
      <ol className="list-decimal pl-6">
          <li>Low Power Consumption – LEDs consume very little energy, making them highly
          efficient.</li>
          <li>High Brightness – Modern LEDs provide bright illumination.</li>
          <li>Long Lifespan – Can last 50,000 hours or more.</li>
          <li>Fast Switching – Turns on and off instantly without warm-up time.</li>
          <li>Compact Size – Available in small sizes suitable for various applications.</li>
          <li>Durability – Resistant to shock and vibration compared to traditional bulbs.</li>
          <li>Eco-Friendly – LEDs do not contain harmful substances like mercury.</li>
        </ol>
        </section>
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">8. Requirements</h2>
        <h3 className="text-xl font-medium">8.1 Hardware Components</h3>
        <ul className="list-disc pl-6">
          <li>Arduino Board</li>
          <li>LED (5mm)</li>
          <li>Resistor (220Ω – 330Ω)</li>
          <li>Breadboard</li>
          <li>Jumper Wires</li>
          <li>USB Cable</li>
        </ul>
        <h3 className="text-xl font-medium">8.2 Software Requirements</h3>
        <ul className="list-disc pl-6">
          <li>Arduino IDE</li>
          <li>USB Drivers</li>
          <li>Arduino Board Support Package</li>
        </ul>
      </section>

      <section className="mb-6">
        
       
      </section>
      <section className="mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h2 className="text-2xl font-semibold">Types of LEDs</h2>
<p>There are different types of LEDs, categorized based on their applications and construction:</p>
<h2 className="text-2xl font-semibold">Based on Construction:</h2>
<ul className="list-disc pl-6">
          <li>Through-Hole LEDs: Standard 3mm, 5mm, 10mm LEDs used in circuits.</li>
          <li>Surface Mount Device (SMD) LEDs: Used in compact electronics (e.g., mobile
            phones, TVs).</li>
          <li>Chip-on-Board (COB) LEDs: High-power LEDs with multiple chips for bright light
          output.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Based on Color &amp; Functionality:</h2>
        <ul className="list-disc pl-6">
          <li>Single-color LEDs: Emit one specific color (red, blue, green, etc.).</li>
          <li>RGB LEDs: Can produce multiple colors by mixing Red, Green, and Blue.</li>
          <li>Infrared (IR) LEDs: Used in remote controls and night vision cameras.</li>
          <li>Ultraviolet (UV) LEDs: Used in sterilization, counterfeit detection, and curing
          applications.</li>
        </ul>
        <h2 className="text-2xl font-semibold">Based on Power Rating:</h2>
        <ul className="list-disc pl-6">
          <li>Low-power LEDs: Used in indicators and displays.</li>
          <li>High-power LEDs: Used in lighting applications like streetlights and automotive
          headlights.</li>
        
        </ul>
        <h2 className="text-2xl font-semibold">Applications of LEDs</h2>
        <ul className="list-disc pl-6">
          <li>Indicator Lights: Used in electronic devices (power indicators, alarms).</li>
          <li>Displays and Signage: Used in LED screens, billboards, and TVs.</li>
          <li>Automotive Lighting: Used in headlights, tail-lights, and dashboard indicators.</li>
          <li>Home and Office Lighting: Energy-efficient LED bulbs and tube lights.</li>
          <li>Streetlights &amp; Industrial Lighting: Used for outdoor and commercial lighting.</li>
          <li>Medical Applications: Used in phototherapy, pulse oximeters, and endoscopy.</li>
          <li>Communication Systems: Used in optical fiber communication and remote controls.</li>
        
        </ul>
      </section>

      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h2 className="text-2xl font-semibold"> Advantages of LEDs Over Traditional Lighting</h2>
      <table className="mt-4 table-auto w-fit border-collapse border border-gray-500  text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">Feature</th>
            <th className="border border-gray-500 px-4 py-2">LED</th>
            <th className="border border-gray-500 px-4 py-2">Incandescent Bulb</th>
            <th className="border border-gray-500 px-4 py-2">CFL (Compact Fluorescent Lamp)</th>
          </tr>
        </thead>
        <tbody>
          {[
            { feature: "Power Consumption", led: "Low (1W – 10W)", incandescent: "High (40W – 100W)", cfl: "Moderate (5W – 25W)" },
            { feature: "Lifespan", led: "50,000+ hours", incandescent: "1,000 hours", cfl: "8,000 hours" },
            { feature: "Heat Emission", led: "Very low", incandescent: "High", cfl: "Moderate" },
            { feature: "Eco-Friendly", led: "Yes (no toxic materials)", incandescent: "No (filament waste)", cfl: "No (contains mercury)" },
            { feature: "Switching Time", led: "Instant", incandescent: "Slow", cfl: "Moderate" }
          ].map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{item.feature}</td>
              <td className="border border-gray-500 px-4 py-2">{item.led}</td>
              <td className="border border-gray-500 px-4 py-2">{item.incandescent}</td>
              <td className="border border-gray-500 px-4 py-2">{item.cfl}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold"> Hardware Components</h2>
      <table className=" mt-4 table-auto w-fit border-collapse border border-gray-500  text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">Component</th>
            <th className="border border-gray-500 px-4 py-2">Quantity</th>
            <th className="border border-gray-500 px-4 py-2">Description</th>
          
          </tr>
        </thead>
        <tbody>
          {[
            { Component: "Arduino Board", Quantity: "1", Description: "Any model (Arduino Uno, Mega, Nano, etc.)"},
            { Component: "LED (5mm)", Quantity: "1", Description: "Any color (Red, Green, Blue, etc.)" },
            { Component: "Resistor (220Ω –330Ω)", Quantity: "1", Description: "To limit current and protect the LED" },
            { Component: "Breadboard", Quantity: "1", Description: "For making easy connections" },
            { Component: "Jumper Wires", Quantity: "1", Description: "Male-to-Male wires for connections" },
            { Component: "USB Cable", Quantity: "1", Description: "To connect Arduino to a PC" },
          
          ].map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{item.Component}</td>
              <td className="border border-gray-500 px-4 py-2">{item.Quantity}</td>
              <td className="border border-gray-500 px-4 py-2">{item.Description}</td>

            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold"> Software Requirements</h2>
      <table className=" mt-4 table-auto w-fit border-collapse border border-gray-500  text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">Software</th>
            <th className="border border-gray-500 px-4 py-2">Purpose</th>
            
          
          </tr>
        </thead>
        <tbody>
          {[
            { Software: "Arduino Board", Purpose: "Writing and uploading code to Arduino", },
            { Software: "USB Drivers", Purpose: "Required for Arduino communication with PC",  },
            { Software: "Arduino Board Support Package", Purpose: "Libraries and tools for programming the Arduino",  },
         
          
          ].map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{item.Software}</td>
              <td className="border border-gray-500 px-4 py-2">{item.Purpose}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
      </section>
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h2 className="text-2xl font-semibold mt-0"> Circuit Diagram</h2>
      <h2 className="text-2xl font-semibold ml-4"> LED Connection with Arduino</h2>
      <Image src={data.image4} width={600} height={400} alt="Arduino LED" className="ml-10" />
      </section>
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h2 className="text-2xl font-semibold mt-0"> Connection Details</h2>
      
      <table className=" mt-4 table-auto w-fit border-collapse border border-gray-500  text-sm md:text-base">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-500 px-4 py-2">Component</th>
            <th className="border border-gray-500 px-4 py-2">Arduino Pin</th>
            <th className="border border-gray-500 px-4 py-2">Description</th>
          
          </tr>
        </thead>
        <tbody>
          {[
            { Component: "LED Anode (+)", ArduinoPin: "Digital Pin 9", Description: "ASupplies voltage to the LED"},
            { Component: "LED Cathode (-)", ArduinoPin: "GND (Ground)", Description: "Completes the circuit" },
            { Component: "Resistor (220Ω –330Ω)", Quantity: "In series with LED", Description: "Limits current to prevent LED damage" },
           
          
          ].map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{item.Component}</td>
              <td className="border border-gray-500 px-4 py-2">{item.ArduinoPin}</td>
              <td className="border border-gray-500 px-4 py-2">{item.Description}</td>

            </tr>
          ))}
        </tbody>
      </table>
      </section> 
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">    
          <h2 className="text-xl font-bold mb-4">Algorithm</h2>
      <ol className="list-decimal list-inside mb-6">
        <li>Start</li>
        <li>Initialize Arduino and define LED pin</li>
        <li>Set LED pin as OUTPUT in setup() function</li>
        <li>Turn LED ON</li>
        <li>Wait for 1 second (1000ms delay)</li>
        <li>Turn LED OFF</li>
        <li>Wait for 1 second (1000ms delay)</li>
        <li>Repeat steps 4–7 in a loop</li>
      </ol>
      
      <h2 className="text-xl font-bold mb-4">Arduino Code: Basic LED Blinking</h2>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm md:text-base mb-6">
        {`// Define LED pin
const int ledPin = 9; // LED is connected to digital pin 9
void setup() {
  pinMode(ledPin, OUTPUT); // Set LED pin as an output
}
void loop() {
  digitalWrite(ledPin, HIGH); // Turn LED ON
  delay(1000); // Wait for 1 second
  digitalWrite(ledPin, LOW); // Turn LED OFF
  delay(1000); // Wait for 1 second
}`}
      </pre>
      
      <h2 className="text-xl font-bold mb-4">Explanation of the Code</h2>
      <ul className="list-disc list-inside mb-6">
        <li><strong>Defining the LED Pin:</strong> <code>const int ledPin = 9;</code> assigns pin 9 to control the LED.</li>
        <li><strong>Configuring the LED as Output:</strong> <code>pinMode(ledPin, OUTPUT);</code> sets pin 9 as an output.</li>
        <li><strong>Turning the LED ON and OFF in a Loop:</strong></li>
      </ul>
      
      <h2 className="text-xl font-bold mb-4">Modifying LED Behavior</h2>
      <h3 className="text-lg font-semibold mb-2">Adjusting Blink Speed</h3>
      <p>Modify the <code>delay()</code> value:</p>
      <ul className="list-disc list-inside mb-6">
        <li>For faster blinking (0.5 seconds ON/OFF): <code>delay(500);</code></li>
        <li>For slower blinking (2 seconds ON/OFF): <code>delay(2000);</code></li>
      </ul>
      
      <h3 className="text-lg font-semibold mb-2">LED Brightness Control (PWM – Pulse Width Modulation)</h3>
      <pre className="bg-gray-100 p-4 rounded-md overflow-auto text-sm md:text-base mb-6">
        {`const int ledPin = 9; // LED connected to digital pin 9
void setup() {
  pinMode(ledPin, OUTPUT);
}
void loop() {
  for (int brightness = 0; brightness <= 255; brightness += 5) {
    analogWrite(ledPin, brightness); // Increase brightness
    delay(30);
  }
  for (int brightness = 255; brightness >= 0; brightness -= 5) {
    analogWrite(ledPin, brightness); // Decrease brightness
    delay(30);
  }
}`}
      </pre>
      
      <h2 className="text-xl font-bold mb-4">Applications of LED Interfacing with Arduino</h2>
      <ul className="list-disc list-inside">
        <li>Status Indicator: Shows device status (ON/OFF).</li>
        <li>Traffic Light System: Simulates red, yellow, and green lights.</li>
        <li>Smart Lighting: Can be controlled using sensors or IoT.</li>
        <li>Notification Systems: Used in alarm systems.</li>
        <li>Pulse & Heartbeat Indicators: Medical applications.</li>
        <li>Automated Signaling: In smart cities and automation.</li>
      </ul>
   
      </section>

      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">16. Troubleshooting Common Issues</h2>
        <table className="mt-4 table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Issue</th>
              <th className="border border-gray-500 px-4 py-2">Possible Causes</th>
              <th className="border border-gray-500 px-4 py-2">Solution</th>
            </tr>
          </thead>
          <tbody>
          {[
            { Issue: "LED does not turn ON", PossibleCauses: "Loose connections,incorrect polarity",Solution:"Check wiring, ensure LED is in the correct orientation" },
            { Issue: "LED is too dim", PossibleCauses: "Resistor value too high",Solution:"Use a lower resistor (220Ω)" },
            { Issue: "LED is not blinking", PossibleCauses: "Code issue, wrong pin",Solution:"Check code and ensure correct pin is assigned" },
            { Issue: "LED turns ON but doesn’t turn OFF", PossibleCauses: "Pin not set as OUTPUT",Solution:"Ensure pinMode(ledPin, OUTPUT); is present in setup()" },
          ].map((item, index) => (
            <tr key={index} className="odd:bg-white even:bg-gray-100">
              <td className="border border-gray-500 px-4 py-2">{item.Issue}</td>
              <td className="border border-gray-500 px-4 py-2">{item.PossibleCauses}</td>
              <td className="border border-gray-500 px-4 py-2">{item.Solution}</td>
              
            </tr>
          ))}
        </tbody>
        </table>
      </section>
      <section className="mt-10 md:w-full w-[350px] max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold ">Conclusion</h2>
        <p>Interfacing an LED with Arduino is a great way to learn digital output control. By
controlling the LED using digitalWrite() and analogWrite(), we can create blinking effects,
brightness control, and automated lighting systems.</p>
      </section>
    </div>
    <Side/>
    </>

  );
};

export default LEDArduino;
