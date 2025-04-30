export default function Page() {
  return (
    <div className="mt-20 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
      <h1 className="text-3xl font-bold mb-4 text-blue-700 text-center">Welcome to IoT Protocols</h1>

      <p className="mb-4 text-gray-700">
        IoT (Internet of Things) devices need robust and efficient communication protocols to exchange data across networks. These protocols determine how devices communicate, how data is structured, and how reliable or secure that communication is. Below is an in-depth look at the most widely used IoT communication protocols.
      </p>

      {/* MQTT */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">1. MQTT (Message Queuing Telemetry Transport)</h2>
      <p className="mb-4 text-gray-700">
        MQTT is a lightweight, low-overhead publish-subscribe messaging protocol ideal for constrained environments. It operates over TCP/IP and allows IoT devices to publish data to a broker, which then distributes the messages to subscribers. Its minimal packet size makes it highly suitable for bandwidth-limited scenarios such as remote sensing, telemetry, and industrial monitoring. It supports Quality of Service (QoS) levels and persistent sessions, which ensures reliable delivery in unstable networks.
      </p>

      {/* CoAP */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">2. CoAP (Constrained Application Protocol)</h2>
      <p className="mb-4 text-gray-700">
        CoAP is designed for devices with limited processing power and memory. Built on UDP, CoAP uses a request/response model similar to HTTP but with a smaller footprint. It supports features like multicast, low header overhead, and asynchronous communication. It’s often used in resource-constrained environments such as smart agriculture and smart lighting, where responsiveness and energy efficiency are key.
      </p>

      {/* HTTP/HTTPS */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">3. HTTP/HTTPS</h2>
      <p className="mb-4 text-gray-700">
        HTTP and HTTPS are ubiquitous in web development and are also used in IoT when interoperability with web services is needed. Devices send data as RESTful API requests to cloud platforms. HTTPS ensures encrypted communication. Though it’s not as efficient as MQTT or CoAP for constrained devices, its simplicity and compatibility with existing web infrastructure make it useful in prototyping and integration-heavy IoT systems.
      </p>

      {/* AMQP */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">4. AMQP (Advanced Message Queuing Protocol)</h2>
      <p className="mb-4 text-gray-700">
        AMQP is a robust message-oriented middleware protocol designed for enterprise applications. It features message queuing, routing (including point-to-point and publish-subscribe), and guaranteed delivery using acknowledgments and message persistence. AMQP is often used in financial services, SCADA systems, and critical industrial automation applications where reliability and traceability of data are essential.
      </p>

      {/* BLE */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">5. BLE (Bluetooth Low Energy)</h2>
      <p className="mb-4 text-gray-700">
        BLE is a short-range wireless protocol optimized for low power consumption. It supports device discovery and data exchange using the GATT (Generic Attribute Profile). BLE is ideal for personal area networks such as wearables, fitness trackers, medical monitors, and smart home gadgets where energy efficiency is a priority. Devices can sleep and wake quickly, conserving battery life over months or even years.
      </p>

      {/* Zigbee */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">6. Zigbee</h2>
      <p className="mb-4 text-gray-700">
        Zigbee is a low-power mesh networking protocol built on IEEE 802.15.4. It enables many devices to connect and relay messages across long distances using intermediate nodes. Zigbee is highly scalable and supports thousands of devices in a single network. Commonly used in home automation, building management, and smart lighting systems, Zigbee provides reliable and efficient communication at short range with low energy use.
      </p>

      {/* LoRaWAN */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">7. LoRaWAN (Long Range Wide Area Network)</h2>
      <p className="mb-4 text-gray-700">
        LoRaWAN is a long-range, low-power protocol operating in unlicensed spectrum bands. It uses a star-of-stars topology with gateways relaying messages between end devices and a central server. LoRaWAN is best suited for applications where data transmission is infrequent, such as environmental monitoring, smart farming, and asset tracking. Its ability to transmit over 10 km in rural areas makes it ideal for wide-area networks.
      </p>

      {/* NB-IoT */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">8. NB-IoT (Narrowband IoT)</h2>
      <p className="mb-4 text-gray-700">
        NB-IoT is a cellular IoT technology standardized by 3GPP. It uses existing LTE infrastructure to provide deep indoor coverage and support for massive numbers of low-throughput devices. It's suitable for smart city solutions like smart meters, parking sensors, and remote monitoring. NB-IoT offers secure and reliable communication with long battery life (up to 10 years).
      </p>

      {/* Z-Wave */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">9. Z-Wave</h2>
      <p className="mb-4 text-gray-700">
        Z-Wave is a proprietary low-power wireless mesh protocol that operates in the sub-1 GHz band, reducing interference with Wi-Fi. It’s widely used in smart homes for security systems, lights, locks, and thermostats. Z-Wave is known for its strong interoperability, standardized command classes, and robust developer ecosystem.
      </p>

      {/* Conclusion */}
      <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800"> Conclusion</h2>
      <p className="text-gray-700">
        Each IoT protocol has unique strengths:
        <ul className="list-disc list-inside mt-2 text-gray-700">
          <li><strong>MQTT</strong>: Best for lightweight, real-time cloud communication</li>
          <li><strong>CoAP</strong>: Optimized for energy-efficient and constrained devices</li>
          <li><strong>HTTP/HTTPS</strong>: Ideal for cloud API communication and web integration</li>
          <li><strong>AMQP</strong>: Enterprise-grade messaging with guaranteed delivery</li>
          <li><strong>BLE & Zigbee</strong>: Great for personal and home device networks</li>
          <li><strong>LoRaWAN & NB-IoT</strong>: Designed for long-range, low-power deployments</li>
          <li><strong>Z-Wave</strong>: Reliable mesh network for smart home automation</li>
        </ul>
        For robust IoT applications, it’s common to use a hybrid approach combining multiple protocols based on the hardware, range, and latency requirements.
      </p>
    </div>
  );
}
