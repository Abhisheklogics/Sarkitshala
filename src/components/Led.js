import Image from "next/image";
 
const LEDArduino = ({data}) => {

  return (
   <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-[-700px] 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap  md:bg-fixed">
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
      
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
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
      
      <section className="mb-6 mt-10 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
        <h2 className="text-2xl font-semibold">3. Semiconductor Materials and LED Colors</h2>
        <p>The color of an LED depends on the bandgap energy of the semiconductor material used.
        Different materials produce different wavelengths of light:</p>
        <table className="table-auto border-collapse border border-gray-500">
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
      <Image src={data.image4} width={300} height={200} alt="LED" />
      <section className="mb-6">
        <h2 className="text-2xl font-semibold">16. Troubleshooting Common Issues</h2>
        <table className="table-auto border-collapse border border-gray-500">
          <thead>
            <tr>
              <th className="border border-gray-500 px-4 py-2">Issue</th>
              <th className="border border-gray-500 px-4 py-2">Possible Causes</th>
              <th className="border border-gray-500 px-4 py-2">Solution</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-500 px-4 py-2">LED does not turn ON</td>
              <td className="border border-gray-500 px-4 py-2">Loose connections, incorrect polarity</td>
              <td className="border border-gray-500 px-4 py-2">Check wiring, ensure LED is in the correct orientation</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default LEDArduino;
