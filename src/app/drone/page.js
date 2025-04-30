
import image1 from '../../../public/images/Drone.webp'
import Image from 'next/image';
const Drone = () => {
  return (
    <div className="h-fit w-full p-5 bg-white bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] md:ml-[320px] mt-24 2xl:ml-[430px] md:p-5 md:bg-white md:bg-cover md:rounded-xl md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
      
      
      
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Drone</h1>
        <Image height={400} width={600} src={image1} className='mt-6  md:ml-20 rounded'/>
        <div className="text-lg  text-gray-700">
          <p className="mb-4">
            A drone typically consists of several key components that allow it to fly and operate effectively.
          </p>
          
         
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Basic Components of a Drone</h2>
          <ul className="list-inside list-disc text-gray-600">
            <li><strong>Frame:</strong> The structure that holds all the components of the drone.</li>
            <li><strong>Motors:</strong> Four motors provide the thrust required for flight.</li>
            <li><strong>Propellers:</strong> Attached to the motors to create lift.</li>
            <li><strong>Battery:</strong> Powers the drone for flight.</li>
            <li><strong>Flight Controller:</strong> The brain of the drone that controls the motors and stabilizes the drone during flight.</li>
            <li><strong>GPS Module:</strong> Helps the drone with navigation and location tracking.</li>
            <li><strong>Camera (Optional):</strong> For capturing video or photos during flight.</li>
          </ul>

         
          <h2 className="text-2xl font-semibold text-gray-800 mt-6 mb-2">Key Features</h2>
          <p className="text-gray-600 mb-4">
            Drones are equipped with several features such as stability control, automated flying capabilities, and real-time video streaming. These features make drones highly versatile for various applications.
          </p>

       
          <div className="mt-8 text-center">
            <p className="text-xl font-semibold text-gray-800">Learn More About Drone Technology</p>
           
          </div>
        </div>
   
      </div>
  
  );
};

export default Drone;
