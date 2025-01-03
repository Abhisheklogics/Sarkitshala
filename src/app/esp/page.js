

import image1 from '../../../public/images/ESP.png'
import Image from 'next/image';
export default function Page() {
  const data = {
    ExperimentName: 'ESP8266 / ESP32 ',

    madeByinfo: 'This page explains the details of the ESP8266 and ESP32 microcontrollers.',
    overview: 'The ESP8266 and ESP32 are very affordable compared to other Wi-Fi or Bluetooth solutions, making them attractive for hobbyists and developers working on small projects or prototypes.',
    espExplanation: `
      The ESP8266 and ESP32 are popular microcontrollers with built-in Wi-Fi (and Bluetooth for the ESP32) capabilities. These chips have become a staple in the Internet of Things (IoT) community due to their low cost, ease of use, and ability to connect to the internet and control other devices.

      
      The ESP8266 is a Wi-Fi microchip with a full TCP/IP stack, which allows it to connect to a Wi-Fi network and communicate with other devices over the internet. It's commonly used in home automation, IoT, and smart home projects. Despite being more affordable and having fewer features compared to the ESP32, the ESP8266 is still highly efficient for basic IoT applications like connecting sensors, lights, and switches to the internet.

       ESP32:
      The ESP32 is a more advanced microcontroller compared to the ESP8266. It offers a range of additional features, including:
      - Bluetooth (Classic and BLE)
      - More GPIO pins for interfacing with sensors, motors, etc.
      - Higher processing power with a dual-core CPU
      - More memory for handling larger applications
      These additional capabilities make the ESP32 ideal for more complex IoT applications, such as robotics, wearable devices, industrial automation, and real-time data processing.

      Both the ESP8266 and ESP32 can be programmed using the Arduino IDE or other platforms like MicroPython and PlatformIO, making them accessible to a wide range of users from beginners to experts. They can be easily integrated into projects that require wireless communication, and with their affordable price, they provide a lot of value for anyone looking to develop IoT applications.

      In summary:
      - ESP8266: Great for basic IoT projects that require Wi-Fi connectivity.
      - ESP32: Offers more features and power for advanced IoT applications with both Wi-Fi and Bluetooth connectivity.
    `,
  };

  return (
    <>
      <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words
        md:h-fit md:w-[770px] md:text-md md:ml-[320px] md:mt-[100px]  mt-[-20px]        md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap
      ">
        <h1 className="text-2xl text-center capitalize md:text-3xl text-xl font-bold
          md:text-center md:text-2xl
        ">{data.ExperimentName}</h1>
       
<Image height={400} width={600} src={image1} className='mt-6 md:ml-14 rounded'/>
        <h1 className="mt-4 text-sm ml-2
        md:mt-4 md:text-sm md:ml-2 font-bold">Written By : Aman Raj</h1>
        <h2 className="text-sm mt-2
        md:text-sm md:mt-2">{data.madeBy}</h2>
        <p className="mt-2
        md:mt-2">{data.madeByinfo}</p>

        <h2 className="mt-10
          md:mt-10 ">{data.overview}</h2>

        {/* ESP Explanation Section */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-2xl">What is ESP8266 / ESP32?</h2>
          <p className="mt-4">{data.espExplanation}</p>
        </div>
      </div>
    </>
  );
}
