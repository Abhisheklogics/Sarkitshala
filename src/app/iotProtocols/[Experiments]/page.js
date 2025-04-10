import dynamic from 'next/dynamic';

const CodeBox = dynamic(() => import('@/components/code/code'), {
  ssr: false
});

function P1() {
  return (
    <div className="h-fit w-full p-5 bg-gray-100 md:bg-[#FFF0E5] bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[330px] md:mt-24 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap md:bg-fixed max-w-full overflow-x-auto">

      <h1 className="text-3xl font-bold mb-2 sm:text-2xl">Implementation of AMQP on Raspberry Pi</h1>
      <p className="text-gray-700 mb-6 sm:text-sm">
        To establish a message queuing system using AMQP with RabbitMQ on a Raspberry Pi. The Raspberry Pi will act as a publisher, sending sensor data, while a client device will act as a subscriber.
      </p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 sm:text-lg">Methodology</h2>
        <ul className="list-disc list-inside space-y-1">
          <li className="text-gray-800 sm:text-sm">Install RabbitMQ as the message broker on Raspberry Pi.</li>
          <li className="text-gray-800 sm:text-sm">Use Python and Pika library to publish and consume messages.</li>
          <li className="text-gray-800 sm:text-sm">Simulate sensor data using a Python script.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 sm:text-lg">Steps to Implement</h2>
        <ol className="list-decimal list-inside space-y-4">
          <li>
            <h3 className="font-semibold sm:text-sm">Step 1: Install RabbitMQ on Raspberry Pi</h3>
            <ul className="bg-gray-100 p-2 rounded-md text-sm text-gray-800 mt-1 space-y-1 sm:text-xs">
              <li>sudo apt update</li>
              <li>sudo apt install rabbitmq-server -y</li>
              <li>sudo systemctl enable rabbitmq-server</li>
              <li>sudo systemctl start rabbitmq-server</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold sm:text-sm">Step 2: Install Pika Library for Python</h3>
            <ul className="bg-gray-100 p-2 rounded-md text-sm text-gray-800 mt-1 space-y-1 sm:text-xs">
              <li>pip install pika</li>
            </ul>
          </li>
          <li>
            <h3 className="font-semibold sm:text-sm">Step 3: Create a Publisher Script on Raspberry Pi</h3>
            <p className="text-gray-700 mb-2 sm:text-xs">This script sends random temperature values as messages.</p>
            <div className="bg-gray-900 text-white p-4 rounded-md text-sm sm:text-xs">
              <CodeBox code={`import pika
  import random
  import time

  # Connection to RabbitMQ
  connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
  channel = connection.channel()

  # Declare a queue
  channel.queue_declare(queue='sensor_data')

  while True:
      temp = random.uniform(20.0, 35.0)  # Simulated temperature data
      message = f"Temperature: {temp:.2f}°C"
      
      # Publish message to queue
      channel.basic_publish(exchange='',
                            routing_key='sensor_data',
                            body=message)
      
      print(f"Sent: {message}")
      time.sleep(5)  # Send data every 5 seconds`
} language={'python'}/>
               
             
            </div>
          </li>
          <li>
            <h3 className="font-semibold sm:text-sm">Step 4: Create a Subscriber Script to Read Data</h3>
            <p className="text-gray-700 mb-2 sm:text-xs">This script will run on another device (or the same Raspberry Pi) to receive and process messages.</p>
            <div className="bg-gray-900 text-white p-4 rounded-md text-sm sm:text-xs">
              <CodeBox code={`import pika

# Connection to RabbitMQ
connection = pika.BlockingConnection(pika.ConnectionParameters('localhost'))
channel = connection.channel()

# Declare a queue
channel.queue_declare(queue='sensor_data')

# Callback function to process received messages
def callback(ch, method, properties, body):
    print(f"Received: {body.decode()}")

# Consume messages from the queue
channel.basic_consume(queue='sensor_data',
                      on_message_callback=callback,
                      auto_ack=True)

print("Waiting for messages. Press CTRL+C to exit.")
channel.start_consuming()`} 
  language={'python'}/>
                         
            </div>
          </li>
        </ol>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2 sm:text-lg">Applications</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800 sm:text-sm">
          <li>Smart Agriculture: Send real-time sensor data to the cloud.</li>
          <li>Industrial IoT: Ensure reliable communication between IoT nodes.</li>
          <li>Home Automation: Control smart home devices via message queues.</li>
        </ul>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2 sm:text-lg">Future Research</h2>
        <ul className="list-disc list-inside space-y-1 text-gray-800 sm:text-sm">
          <li>Integrating AMQP over WebSockets for real-time browser-based monitoring.</li>
          <li>Using AMQP with AI models for predictive analytics in IoT.</li>
          <li>Combining AMQP with Blockchain for secure IoT data transmission.</li>
        </ul>
      </section>
    </div>
  );
}


  function P2() {
   
    return (
      <div className="h-fit w-full p-5 bg-gray-100 md:bg-[#FFF0E5] bg-cover rounded-xl leading-8 text-justify break-words 
      md:h-fit md:w-[790px] md:ml-[330px] md:mt-24 2xl:ml-[430px] md:p-auto md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap md:bg-fixed max-w-full overflow-x-auto">
  
        <h1 className="text-3xl font-bold mb-2">Implementation of Bluetooth & BLE on ESP32</h1>
        <p className="text-gray-700 mb-6">
          To establish Bluetooth Low Energy (BLE) communication using ESP32, where ESP32 acts as a BLE server broadcasting sensor data, and a smartphone or another ESP32 acts as a BLE client.
        </p>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Objective</h2>
          <p className="text-gray-800">
            To establish Bluetooth Low Energy (BLE) communication using ESP32, where ESP32 acts as a BLE server broadcasting sensor data, and a smartphone or another ESP32 acts as a BLE client.
          </p>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Methodology</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Set up ESP32 as a BLE server to advertise sensor data.</li>
            <li>Connect a smartphone or another ESP32 as a BLE client to receive the data.</li>
            <li>Use Arduino IDE with the ESP32 BLE library for implementation.</li>
          </ul>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Steps to Implement</h2>
          <ol className="list-decimal list-inside space-y-4">
            <li>
              <h3 className="font-semibold">Step 1: Install ESP32 Board in Arduino IDE</h3>
              <ul className="bg-gray-100 p-2 rounded-md text-sm text-gray-800 mt-1 space-y-1">
                <li>Open Arduino IDE.</li>
                <li>Go to File → Preferences, and add the ESP32 board URL: https://raw.githubusercontent.com/espressif/arduino-esp32/gh-pages/package_esp32_index.json</li>
                <li>Install the ESP32 board from Boards Manager.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Step 2: Install the Required BLE Library</h3>
              <ul className="bg-gray-100 p-2 rounded-md text-sm text-gray-800 mt-1 space-y-1">
                <li>Go to Sketch → Include Library → Manage Libraries, and install: "ESP32 BLE Arduino" by Neil Kolban.</li>
              </ul>
            </li>
            <li>
              <h3 className="font-semibold">Step 3: Write Code for ESP32 BLE Server</h3>
              <p className="text-gray-700 mb-2">This ESP32 BLE server continuously advertises temperature sensor data.</p>
              <div className="bg-gray-900 text-white p-4 rounded-md text-sm">
                <CodeBox  code= {`#include <BLEDevice.h>
  #include <BLEUtils.h>
  #include <BLEServer.h>
  
  #define SERVICE_UUID "12345678-1234-5678-1234-56789abcdef0"
  #define CHARACTERISTIC_UUID "87654321-4321-6789-4321-abcdef012345"
  
  BLEServer* pServer = NULL;
  BLECharacteristic* pCharacteristic = NULL;
  
  void setup() {
      Serial.begin(115200);
      BLEDevice::init("ESP32_BLE_Sensor");
  
      pServer = BLEDevice::createServer();
      BLEService *pService = pServer->createService(SERVICE_UUID);
      
      pCharacteristic = pService->createCharacteristic(
                          CHARACTERISTIC_UUID,
                          BLECharacteristic::PROPERTY_READ | 
                          BLECharacteristic::PROPERTY_NOTIFY
                        );
  
      pCharacteristic->setValue("Temperature: 25°C");
      pService->start();
  
      BLEAdvertising *pAdvertising = BLEDevice::getAdvertising();
      pAdvertising->addServiceUUID(SERVICE_UUID);
      pAdvertising->setScanResponse(true);
      BLEDevice::startAdvertising();
      
      Serial.println("BLE Server is running...");
  }
  
  void loop() {
      int temp = random(20, 35);  // Simulate temperature data
      String tempValue = "Temperature: " + String(temp) + "°C";
      pCharacteristic->setValue(tempValue.c_str());
      pCharacteristic->notify();
      Serial.println(tempValue);
      delay(5000);  // Update every 5 seconds`}
                language={'python'}/>
                
              </div>
            </li>
            <li>
              <h3 className="font-semibold">Step 4: Write Code for ESP32 BLE Client</h3>
              <p className="text-gray-700 mb-2">This ESP32 BLE client scans for BLE devices and receives temperature data.</p>
              <div className="bg-gray-900 text-white p-4 rounded-md text-sm">
                <CodeBox code={`#include <BLEDevice.h>
  #include <BLEUtils.h>
  #include <BLEScan.h>
  #include <BLEAdvertisedDevice.h>
  
  #define SERVICE_UUID "12345678-1234-5678-1234-56789abcdef0"
  
  void setup() {
      Serial.begin(115200);
      BLEDevice::init("");
  
      BLEScan* pBLEScan = BLEDevice::getScan();
      pBLEScan->setActiveScan(true);
      
      Serial.println("Scanning for BLE devices...");
      pBLEScan->start(10, false);
  }
  
  void loop() {
      BLEScanResults foundDevices = BLEDevice::getScan()->getResults();
      for (int i = 0; i < foundDevices.getCount(); i++) {
          BLEAdvertisedDevice device = foundDevices.getDevice(i);
          if (device.haveServiceUUID() && device.isAdvertisingService(BLEUUID(SERVICE_UUID))) {
              Serial.print("Found ESP32 BLE Server: ");
              Serial.println(device.getName().c_str());
          }
      }
      delay(5000);
  }`}language={'python'}/>
                  
             
              </div>
            </li>
          </ol>
        </section>
  
        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Testing the Implementation</h2>
          <ul className="list-disc list-inside space-y-1 text-gray-800">
            <li>Upload the BLE Server code to one ESP32.</li>
            <li>Upload the BLE Client code to another ESP32.</li>
            <li>Open Serial Monitor on both devices and observe:
              <ul className="list-disc list-inside">
                <li>The server sends temperature data.</li>
                <li>The client detects and reads the BLE server’s data.</li>
              </ul>
            </li>
            <li>Alternatively, use a smartphone with a BLE Scanner app (like "nRF Connect") to connect and read data from ESP32 BLE server.</li>
          </ul>
        </section>
      </div>
    );
  }

  
  

function P3() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 mt-10  rounded-xl shadow-md overflow-x-auto leading-relaxed text-justify">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Implementation of LoRaWAN Communication on ESP32</h2>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700">Objective:</h3>
      <p className="text-gray-700 mb-6">
        To establish LoRaWAN communication using an ESP32 and an external LoRa module (e.g., SX1278). The ESP32 will send sensor data over long-range communication to a LoRaWAN gateway, which will forward the data to the cloud or server.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700">Methodology:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        <li>Set up the ESP32 with a LoRa module to communicate with a LoRaWAN gateway.</li>
        <li>Send sensor data (e.g., temperature, humidity) using the LoRaWAN protocol.</li>
        <li>Use Arduino IDE with the LoRa library for programming the ESP32 and LoRa module.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700">Steps to Implement:</h3>
      <ol className="list-decimal list-inside space-y-6 text-gray-800">
        <li>
          <h4 className="font-semibold text-lg mb-1">Step 1: Install ESP32 and LoRa Library in Arduino IDE</h4>
          <p className="mb-1">Open Arduino IDE and install the necessary libraries:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>Install the "ESP32" board from Boards Manager.</li>
            <li>Install the "LoRa" library by Sandeep Mistry from Library Manager.</li>
          </ul>
        </li>

        <li>
          <h4 className="font-semibold text-lg mb-1">Step 2: Wiring the LoRa Module to ESP32</h4>
          <p className="mb-1">Connect the LoRa module (SX1278 or similar) to the ESP32 as follows:</p>
          <ul className="list-disc list-inside pl-4 space-y-1">
            <li>LoRa VCC - 3.3V (ESP32)</li>
            <li>LoRa GND - GND (ESP32)</li>
            <li>LoRa MISO - MISO (GPIO19)</li>
            <li>LoRa MOSI - MOSI (GPIO23)</li>
            <li>LoRa SCK - SCK (GPIO18)</li>
            <li>LoRa NSS - SS (GPIO5)</li>
            <li>LoRa DIO0 - GPIO2</li>
          </ul>
        </li>

        <li>
          <h4 className="font-semibold text-lg mb-1">Step 3: Write Code for LoRa Communication</h4>
          <p className="mb-2">This code sends random temperature and humidity data over LoRa:</p>
          <CodeBox
            language="cpp"
            code={`#include <SPI.h>
#include <LoRa.h>

#define SS_PIN 5
#define RST_PIN 14
#define DIO0_PIN 2

void setup() {
  Serial.begin(115200);
  LoRa.begin(868E6);
  LoRa.setPins(SS_PIN, RST_PIN, DIO0_PIN);
  Serial.println("LoRa Initializing...");
}

void loop() {
  float temperature = random(20, 35);  // Simulated temperature
  float humidity = random(40, 60);    // Simulated humidity
  String data = "Temperature: " + String(temperature) + "°C, Humidity: " + String(humidity) + "%";

  LoRa.beginPacket();
  LoRa.print(data);
  LoRa.endPacket();

  Serial.println("Sending: " + data);
  delay(5000);
}`}
          />
        </li>

        <li>
          <h4 className="font-semibold text-lg mb-1">Step 4: Configure the LoRaWAN Gateway</h4>
          <p>Ensure that the ESP32 communicates with the LoRaWAN gateway. Set up the gateway to forward the data to a cloud platform or a server for further processing.</p>
        </li>

        <li>
          <h4 className="font-semibold text-lg mb-1">Step 5: Read Data from the LoRaWAN Server</h4>
          <p>Once the data is received by the LoRaWAN gateway, it will be forwarded to the cloud or server. You can visualize or process this data using an IoT platform like ThingSpeak, AWS IoT, or your own custom platform.</p>
        </li>
      </ol>

      <h3 className="text-2xl font-semibold mt-8 mb-2 text-gray-700">Testing the Implementation:</h3>
      <p className="text-gray-700 mb-6">
        Upload the LoRa code to the ESP32, connect the LoRa module to the ESP32, and verify if the data is transmitted over LoRa to the gateway. You can test using a LoRa gateway or a LoRaWAN network for long-range communication.
      </p>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700">Applications:</h3>
      <ul className="list-disc list-inside text-gray-700 mb-6 space-y-1">
        <li>Smart Agriculture: Send real-time sensor data (e.g., soil moisture, temperature) to the cloud for analysis.</li>
        <li>Environmental Monitoring: Monitor air quality, weather conditions, or wildlife data over long distances.</li>
        <li>Industrial IoT: Deploy long-range sensor networks for remote areas with limited connectivity.</li>
      </ul>

      <h3 className="text-2xl font-semibold mb-2 text-gray-700">Future Research:</h3>
      <ul className="list-disc list-inside text-gray-700 space-y-1">
        <li>Improving the power efficiency of LoRaWAN communication for battery-operated devices.</li>
        <li>Integrating LoRaWAN with AI/ML models for predictive maintenance in industrial IoT.</li>
        <li>Exploring the use of LoRaWAN with blockchain for secure data transmission in IoT networks.</li>
      </ul>
    </div>
  );
}




  export default  async function Page({params})
  {
       let Exp = await params
       if(Exp.Experiments == 'AMQP')
       {
     return <P1/>;
       }
       if(Exp.Experiments == 'Bluetooth')
        {
      return <P2/>;
        }
        if(Exp.Experiments == 'lorawan')
            {
          return <P3/>;
            }
  }
  
