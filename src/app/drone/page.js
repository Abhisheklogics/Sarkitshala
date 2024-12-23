
import React from 'react';

const Drone = () => {
  return (
    <div className="min-h-screen mt-20 flex items-center justify-center py-12">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">Drone Components</h1>
        <div className="text-lg text-gray-700">
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
    </div>
  );
};

export default Drone;
