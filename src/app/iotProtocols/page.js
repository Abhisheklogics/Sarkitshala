export default function Page() {
    return (
      <>
        <div className="h-fit w-full p-6 bg-gradient-to-br from-slate-100 to-white rounded-xl leading-8 md:w-[770px] md:ml-[30px] md:mt-[100px] mt-[-20px] shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-blue-700">Welcome to IoT Protocols</h1>
  
          <p className="mb-4 text-gray-700">
            Internet of Things (IoT) devices rely on communication protocols to transmit data across networks. These protocols enable efficient, secure, and real-time communication between sensors, devices, and cloud servers.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">🔌 1. MQTT (Message Queuing Telemetry Transport)</h2>
          <p className="mb-4">
            A lightweight, publish-subscribe protocol ideal for low-bandwidth and high-latency networks. Perfect for real-time communication between IoT devices and cloud platforms like AWS, Azure, and ThingsBoard.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">📶 2. CoAP (Constrained Application Protocol)</h2>
          <p className="mb-4">
            Designed for resource-constrained devices. Works over UDP and supports RESTful interaction similar to HTTP. Useful for low-power applications like smart homes and healthcare wearables.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">🌐 3. HTTP/HTTPS</h2>
          <p className="mb-4">
            The most common web protocol, often used for sending data to cloud services or APIs. Though heavier than MQTT, it's useful for interoperability with existing web infrastructure.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">📡 4. AMQP (Advanced Message Queuing Protocol)</h2>
          <p className="mb-2">
            A robust protocol that supports queuing, routing, and reliability. Frequently used in industrial IoT where guaranteed message delivery is essential.
          </p>
  
          <h3 className="font-semibold text-gray-700 mt-4">🔧 Implementation on Raspberry Pi</h3>
          <p className="mb-2">
            <strong>Objective:</strong> Establish a message queuing system using AMQP with RabbitMQ on a Raspberry Pi. The Raspberry Pi acts as a publisher, sending sensor data, while another device acts as the subscriber.
          </p>
  
          <p className="mb-2 font-medium">Methodology:</p>
          <ul className="list-disc list-inside mb-2 text-gray-700">
            <li>Install RabbitMQ as the message broker on Raspberry Pi</li>
            <li>Use Python and the Pika library to publish/consume messages</li>
            <li>Simulate sensor data using a Python script</li>
          </ul>
  
          <p className="mb-2 font-medium">Steps to Implement:</p>
  
          <p className="font-semibold">Step 1: Install RabbitMQ</p>
          <pre className="bg-gray-100 p-3 rounded mb-2 text-sm whitespace-pre-wrap">
  sudo apt update
  sudo apt install rabbitmq-server -y
  sudo systemctl enable rabbitmq-server
  sudo systemctl start rabbitmq-server
          </pre>
  
          <p className="font-semibold">Step 2: Install Pika</p>
          <pre className="bg-gray-100 p-3 rounded mb-2 text-sm">pip install pika</pre>
  
          <p className="font-semibold">Step 3: Publisher Script</p>
          <pre className="bg-gray-100 p-3 rounded mb-4 overflow-x-auto text-sm whitespace-pre">
  {`import pika
  import random
  import time
  
  connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
  channel = connection.channel()
  channel.queue_declare(queue='sensor_data')
  
  while True:
      temp = random.uniform(20.0, 35.0)
      message = f"Temperature: {temp:.2f}°C"
      channel.basic_publish(exchange='', routing_key='sensor_data', body=message)
      print(f"Sent: {message}")
      time.sleep(5)
  `}
          </pre>
  
          <p className="font-semibold">Step 4: Subscriber Script</p>
          <pre className="bg-gray-100 p-3 rounded mb-4 overflow-x-auto text-sm whitespace-pre">
  {`import pika
  
  connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
  channel = connection.channel()
  channel.queue_declare(queue='sensor_data')
  
  def callback(ch, method, properties, body):
      print(f"Received: {body.decode()}")
  
  channel.basic_consume(queue='sensor_data', on_message_callback=callback, auto_ack=True)
  print("Waiting for messages. Press CTRL+C to exit.")
  channel.start_consuming()
  `}
          </pre>
  
          <p className="mb-2 font-medium">Applications:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Smart Agriculture: Real-time sensor data monitoring</li>
            <li>Industrial IoT: Reliable inter-node communication</li>
            <li>Home Automation: Messaging between smart devices</li>
          </ul>
  
          <p className="mb-2 font-medium">Future Research Concepts:</p>
          <ul className="list-disc list-inside mb-4 text-gray-700">
            <li>Integrating AMQP over WebSockets for real-time web dashboards</li>
            <li>Using AMQP with AI models for predictive IoT analytics</li>
            <li>Combining AMQP with Blockchain for secure data exchange</li>
          </ul>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">🔐 5. BLE & Zigbee</h2>
          <p className="mb-4">
            These are wireless communication protocols often used for short-range device-to-device communication. BLE is used in wearables, while Zigbee is popular in smart lighting and automation.
          </p>
  
          <h2 className="text-xl font-semibold mt-6 mb-2 text-gray-800">💡 Conclusion</h2>
          <p className="text-gray-700">
            Choosing the right protocol depends on your use case: MQTT for cloud communication, CoAP for constrained devices, AMQP for enterprise systems, and BLE/Zigbee for short-range mesh networks. A good IoT system often combines multiple protocols for optimal performance.
          </p>
        </div>
      </>
    );
  }
  