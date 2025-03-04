
import Image1 from '../../../public/images/jetson_Sarkitshala.webp'
import Image from 'next/image'
export default async function Page(){

  


return(

    <div className="h-fit w-full p-5  bg-cover rounded-xl leading-8 text-justify break-words 
    md:h-fit md:w-[790px] 2xl:w-[820px] font-serif md:ml-[330px]  2xl:ml-[430px] md:p-5 md:bg-[#FFF0E5]
 md:bg-cover md:rounded md:leading-8 md:text-justify md:break-words md:text-wrap ">
    
    <h1 className="text-4xl mt-24 md:mb-[50px] text-center">NVIDIA Jetson Nano Developer Kit</h1>
  <Image src={Image1} height={500} width={730}  className='ml-2' alt='jetson Image'/>
    <div className="mt-16  max-w-4xl bg-white p-6 rounded shadow-lg border border-black"> 
    <p className="text-lg    ">The NVIDIA® Jetson Nano™ Developer Kit is a small AI computer for makers, learners, and developers. After following along with this brief guide, you'll be ready to start building practical AI applications, cool AI robots, and more. </p>
   <p className="text-lg mt-2  ">The NVIDIA Jetson Nano Developer Kit is a compact, yet powerful single-board computer (SBC) designed for AI, deep learning, and edge computing applications. It provides GPU acceleration at a low cost and power consumption, making it ideal for robotics, computer vision, IoT, and AI-based embedded systems.</p>

    </div>
  
   {/* Components Requirement */}
    <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
    <h2 className="font-semibold text-2xl mb-2">Components Required</h2>
    <ol className="list-decimal pl-5">
    
        <li   className="">MicroSD card slot</li>
        <li   className="">40-pin expansion header</li>
        <li   className="">Gigabit Ethernet port</li>
        <li   className="">USB 3.0 ports</li>
        <li   className="">HDMI output port</li>
        <li   className="">DisplayPort connector</li>
        <li   className="">DC Barrel jack</li>
        <li   className="">MIPI CSI-2 camera connectors</li>
    
  </ol>
</div>

{/* KeyFeatures[0] */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Key Features</h2>
<p className=""><span className='font-semibold'>1.</span> CUDA-X AI Acceleration: Powered by a 128-core Maxwell GPU, enabling real-time AI inference.</p>
<p><span className='font-semibold'>2.</span> Quad-Core CPU: ARM Cortex-A57 processor for efficient multi-threaded computing.</p>
<p><span className='font-semibold'>3.</span> 4GB RAM: 4GB LPDDR4 memory, providing smooth performance for AI applications.</p>
<p><span className='font-semibold'>4.</span> Expandable Storage: Supports microSD cards (recommended 32GB or more) and M.2 Key E slot for additional storage or connectivity modules.</p>
<p><span className='font-semibold'>5.</span> Low Power Consumption: Runs on 5W to 10W, making it energy-efficient for edge AI.</p>
<p><span className='font-semibold'>6.</span> Linux-based OS: Runs Ubuntu-based JetPack SDK, which includes TensorRT, CUDA, cuDNN, OpenCV, and other AI libraries.</p>
<p><span className='font-semibold'>7.</span> Multiple Interfaces: Features USB, GPIO, I2C, UART, SPI, and MIPI CSI for sensors and cameras.</p>
</div>

{/*"ST2": "Technical Specifications",*/}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Technical Specifications</h2>
</div>

{/* "ST3": "Jetson Nano Developer Kit Components", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Technical Specifications  </h2>
  <h3>Jetson Nano Developer Kit Components</h3>
  <ol className="list-decimal pl-5">
 <h3>The Jetson Nano Developer Kit consists of:</h3>
      <li  className="marker:font-bold">Jetson Nano module (contains CPU, GPU, RAM, and storage interfaces).</li>
      <li  className="marker:font-bold">Carrier Board (provides I/O ports, camera interfaces, and power management).</li>
      <li  className="marker:font-bold">MicroSD slot for bootable OS.</li>
      <li  className="marker:font-bold">GPIO Header (40-pin) for connecting sensors and actuators.</li>
      <li  className="marker:font-bold">Ethernet Port (Gigabit LAN) for networking.</li>
      <li  className="marker:font-bold">USB 3.0 Ports for peripherals like keyboards, mice, and external storage.</li>
</ol>
</div>


{/* "ST4": "JetPack SDK - The Software Powerhouse" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">JetPack SDK - The Software Powerhouse</h2>
  <ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">CUDA - GPU computing platform for AI acceleration.</li>
      <li className="marker:font-bold">cuDNN - Deep learning acceleration library.</li>
      <li className="marker:font-bold">TensorRT - High-performance inference optimizer.</li>
      <li  className="marker:font-bold">OpenCV - Computer vision and image processing.</li>
      <li className="marker:font-bold">Python, C++, and Deep Learning Frameworks (PyTorch, TensorFlow, Keras).</li>
 
</ol>
  </div>


  {/* "ST5": "Power Supply Options", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Power Supply Options</h2>
  <ol className="list-decimal pl-5">
 
      <li  className="marker:font-bold">Micro-USB (5V/2.5A) for basic tasks.</li>
      <li  className="marker:font-bold">Barrel Jack (5V/4A) for high-power applications like AI and robotics.</li>
  
      <li  className="marker:font-bold">Power Mode Selection:</li>
  
      <li  className="marker:font-bold">5W Mode (default, low power consumption).</li>
  
      <li  className="marker:font-bold">10W Mode (higher performance for AI tasks).</li>
  
  
</ol>
  </div>
 
  {/* "ST6": "Camera Support", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Camera Support</h2>
  <ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">MIPI CSI Camera: Supports Raspberry Pi Camera Module v2.</li>
      <li  className="marker:font-bold">USB Cameras: Compatible with standard webcams.</li>
      <li  className="marker:font-bold">Multiple Camera Support: With additional modules, multiple cameras can be connected for advanced vision-based applications.</li>

    
</ol>
  </div>

 
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Connectivity & Expansion</h2>
  <ol className="list-decimal pl-5">
 
      <li   className="marker:font-bold">40-Pin GPIO Header: Supports sensors, buttons, LEDs, and other peripherals.</li>
      <li   className="marker:font-bold">I2C, UART, SPI, PWM: Interfaces for external devices.</li>
      <li   className="marker:font-bold">M.2 Slot (Key E): Supports Wi-Fi, Bluetooth, and NVMe storage.</li>

</ol>
  </div>

  {/* "ST8": "Performance & AI Capabilities", */}
 <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Performance & AI Capabilities</h2>
  </div>

  {/* "ST9": "Applications", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Applications</h2>
  <ol className="list-decimal pl-5">
  
      <li className="marker:font-bold">AI & Deep Learning: Run real-time computer vision and neural networks.</li>
      <li className="marker:font-bold">Edge Computing: Process AI models locally without cloud dependency.</li>
      <li  className="marker:font-bold">Robotics: Integrate with ROS (Robot Operating System) for autonomous navigation.</li>
      <li  className="marker:font-bold">Smart Surveillance: AI-powered face recognition, object detection, and tracking.</li>
      <li  className="marker:font-bold">IoT & Smart Devices: Collect and analyze IoT sensor data.</li>
      <li  className="marker:font-bold">Autonomous Vehicles & Drones: AI-based navigation and obstacle avoidance.</li>
 
</ol>
  </div>

  {/* "ST10": "Jetson Nano vs. Raspberry Pi 4", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Jetson Nano vs. Raspberry Pi 4</h2>
  <p>Jetson Nano is AI-focused, while Raspberry Pi is better for general computing and hobbyist projects.</p></div>


  {/* "ST11": "Getting Started", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Getting Started</h2>
  <ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Step 1: Download & Flash JetPack OS</li>
      <li  className="marker:font-bold">Download JetPack (Ubuntu-based OS) from NVIDIA's official site.</li>

      <li  className="marker:font-bold">Use Etcher or Raspberry Pi Imager to flash it to a microSD card.</li>

      <li  className="marker:font-bold">Insert the microSD into Jetson Nano and power it up.</li>

      <li  className="marker:font-bold">Step 2: Set Up Development Environment</li>

      <li  className="marker:font-bold">Python + Jetson.GPIO for hardware control.</li>

      <li  className="marker:font-bold">PyTorch, TensorFlow, OpenCV for AI projects.</li>
      <li  className="marker:font-bold">Jupyter Notebook for prototyping AI models.</li>

<li  className="marker:font-bold">Step 3: Connect to Display, Keyboard, and Mouse</li>
<li  className="marker:font-bold">Use HDMI/DP for display and connect peripherals.</li>

<li  className="marker:font-bold">Enable SSH/VNC for remote access.</li>

</ol>
  </div>

  {/* "ST12": "In Details", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">In Details</h2>
  </div>

  {/* "ST13": "microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">microSD Card</h2>
  <ol className="list-decimal pl-5">
 
      <li   className="marker:font-bold">The Jetson Nano Developer Kit uses a microSD card as a boot device and for main storage. It's important to have a card that's fast and large enough for your projects; the minimum recommended is a 32 GB UHS-1 card.</li>
      <li   className="marker:font-bold">See the instructions below to flash your microSD card with operating system and software.</li>
</ol>


  </div>

  {/* "ST14": "Micro-USB Power Supply", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Micro-USB Power Supply</h2>
  <ol className="list-decimal pl-5">
 
      <li   className="marker:font-bold">You'll need to power the developer kit with a good quality power supply that can deliver 5V⎓2A at the developer kit's Micro-USB port. Not every power supply promising “5V⎓2A” will actually do this.</li>
   <li   className="marker:font-bold">As an example of a good power supply, NVIDIA has validated Adafruit's 5V 2.5A Switching Power Supply with 20AWG MicroUSB Cable (GEO151UB-6025). It was specifically designed to overcome common problems with USB power supplies; see the linked product page for details.</li>
</ol>
  </div>


  {/* "ST15": "Note", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Note</h2>
  <ol className="list-decimal pl-5">
  
      <li   className="marker:font-bold">The stated power output capability of a USB power supply can be seen on its label.</li>
      <li   className="marker:font-bold">Actual power delivery capabilities of USB power supplies do vary. Please see the Jetson Nano Developer Kit User Guide for additional information.</li>
  
</ol>
  </div>

  {/* "ST16": "Write Image to the microSD Card", */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Write Image to the microSD Card</h2>
  <p className=" text-lg mb-2">To prepare your microSD card, you'll need a computer with Internet connection and the ability to read and write SD cards, either via a built-in SD card slot or adapter.</p>
  <ol className="list-decimal pl-5">
 
      <li   className="marker:font-bold">Download the Jetson Nano Developer Kit SD Card Image, and note where it was saved on the computer.</li>
      <li   className="marker:font-bold">Write the image to your microSD card by following the instructions below according to your computer's operating system: Windows, macOS, or Linux.</li>

    
</ol>
  </div>

  {/* "ST17A": "Instructions for Windows", Also, "Write_Image" */}
  <div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
  <h2 className="font-semibold text-2xl mb-2">Instructions for Windows</h2>
  <p className="">Format and Write Image to microSD Card</p>
  <ol className="list-decimal pl-5">
  <p className="">Download, install, and launch SD Memory Card Formatter for Windows.</p>
      <li   className="marker:font-bold">Select card drive.</li>
      <li   className="marker:font-bold">Select 'Quick format'.</li>
      <li   className="marker:font-bold">Leave 'Volume label</li>
      <li   className="marker:font-bold">Click 'Format' to start formatting, and 'Yes' on the warning dialog.</li>
 
</ol>
<p className='font-semibold text-lg text-blue-600 mt-2 ml-2 mb-2'>Use Etcher to write the Jetson Nano Developer Kit SD Card Image to your microSD card</p>
<ol className="list-decimal pl-5">
  
      <li   className="marker:font-bold">Download, install, and launch Etcher.</li>
      <li   className="marker:font-bold">Click “Select image” and choose the zipped image file downloaded earlier.</li>
      <li   className="marker:font-bold">Insert your microSD card if not already inserted. Click Cancel (per this explanation) if Windows prompts you with a dialog like this:</li>
      <li   className="marker:font-bold">Click “Select drive” and choose the correct device.</li>
      <li   className="marker:font-bold">Click “Flash!” It will take Etcher about 10 minutes to write and validate the image if your microSD card is connected via USB3.</li>
      <li   className="marker:font-bold">"After Etcher finishes, Windows may let you know it doesn't know how to read the SD Card. Just click Cancel and remove the microSD card..</li>
      <li   className="marker:font-bold">After your microSD card is ready, proceed to set up your developer kit.</li>
     
  
</ol></div>

  {/* "ST17B": "Instructions for MacOS", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Instructions for MacOS</h2>
<p>You can either write the SD card image using a graphical program like Etcher, or via command line.</p>
</div>

{/* "Etcherinfo": */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Etcher Instructions</h2>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Do not insert your microSD card yet.</li>
      <li  className="marker:font-bold">Download, install, and launch Etcher.</li>
      <li   className="marker:font-bold">Click 'Select image' and choose the zipped image file downloaded earlier.</li>
      <li  className="marker:font-bold">Insert your microSD card. Click Ignore if your Mac shows this window.</li>
      <li  className="marker:font-bold">"If you have no other external drives attached, Etcher will automatically select the microSD card as target device. Otherwise, click 'Select drive' and choose the correct device.</li>
      <li  className="marker:font-bold">Click 'Flash!' Your Mac may prompt for your username and password before it allows Etcher to proceed.</li>
      <li  className="marker:font-bold">It will take Etcher about 10 minutes to write and validate the image if your microSD card is connected via USB3.</li>
      <li  className="marker:font-bold">After Etcher finishes, your Mac may let you know it doesn't know how to read the SD Card. Just click Eject and remove the microSD card.</li>
</ol>
</div>

{/* "CLI": "Command Line Instructions", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Command Line Instructions</h2>
<ol className="list-decimal pl-5">
  
      <li className="marker:font-bold">Open the Terminal app.</li>
      <li className="marker:font-bold">Use this command to list any external disk devices already attached to your Mac: diskutil list external | fgrep '/dev/disk'.</li>
      <li className="marker:font-bold">For example, if you already have a USB drive attached to your Mac, the result will look similar to this.</li>
      <li className="marker:font-bold">Insert your microSD card. Click Ignore if your Mac shows this window.</li>
      <li className="marker:font-bold">Use this command to remove any existing partitions from the microSD card, ensuring MacOS will let you write to it. BE VERY CAREFUL to specify the correct disk device: sudo diskutil partitionDisk /dev/disk{'<n>'} 1 GPT 'Free Space' '%noformat%' 100%.</li>
      <li className="marker:font-bold">For example:</li>
      <li className="marker:font-bold">Use this command to write the zipped SD card image to the microSD card. Note the use of /dev/rdisk instead of /dev/disk: /usr/bin/unzip -p ~/Downloads/jetson_nano_devkit_sd_card.zip | sudo /bin/dd of=/dev/rdisk{'<n>'} bs=1m.</li>
      <li className="marker:font-bold">There will be no indication of progress (unless you signal with CTRL-t). When the dd command finishes, your Mac will let you know it cannot read the microSD card. Just click Eject.</li>
</ol></div>

{/* "ST17C": "Instructions for Linux", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Instructions for Linux</h2>
<ul className="">
 
      <li  className="marker:font-bold">You can either write the SD card image using a graphical program like Etcher, or via command line.</li>
 
</ul>
</div>

{/* "ELI": "Etcher Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Etcher Instructions</h2>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Download, install, and launch Etcher.</li>
      <li  className="marker:font-bold">Click 'Select image' and choose the zipped image file downloaded earlier.</li>
      <li  className="marker:font-bold">Insert your microSD card. If you have no other external drives attached, Etcher will automatically select the microSD card as target device. Otherwise, click 'Change' and choose the correct device.</li>
      <li  className="marker:font-bold">Click 'Flash!' Your OS may prompt for your username and password before it allows Etcher to proceed.</li>
      <li  className="marker:font-bold">It will take Etcher 10-15 minutes to write and validate the image if your microSD card is connected via USB3.</li>
      <li  className="marker:font-bold">After Etcher finishes, eject the SD Card using Files application.</li>
      <li className="marker:font-bold">Physically remove microSD card from the computer.</li>

</ol>
</div>

{/* "CLI_Linus": "Command Line Instructions" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Command Line Instructions</h2>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Open the Terminal application by pressing Ctrl + Alt + T.</li>
      <li  className="marker:font-bold">Insert your microSD card, then use a command like this to show which disk device was assigned to it:</li>
      <li  className="marker:font-bold">{`dmesg | tail | awk '$3 == \"sd\" {print}'`}</li>
      <li  className="marker:font-bold">In this example, we can see the 16GB microSD card was assigned /dev/sda.</li>
      <li className="marker:font-bold">Use this command to write the zipped SD card image to the microSD card</li>
      <li  className="marker:font-bold">/usr/bin/unzip -p ~/Downloads/jetson_nano_devkit_sd_card.zip | sudo /bin/dd of=/dev/sd{'<x>'} bs=1M status=progress</li>
      <li  className="marker:font-bold">{`sudo eject /dev/sd'<x>'`}</li>
      <li  className="marker:font-bold">Physically remove microSD card from the computer.</li>
      <li  className="marker:font-bold">After your microSD card is ready, proceed to Setup your developer kit.</li>
    
</ol>
</div>

{/* "Setup1stboot": "Setup and First Boot" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Setup and First Boot</h2>
<p>There are two ways to interact with the developer kit:</p>
<p className="font-semibold">1 with display, keyboard and mouse attached, or</p>
<p className="font-semibold">2 in 'headless mode' via connection from another computer.</p>
<p>You can conduct the initial setup either way.</p>
<p>Initial Setup with Display Attached</p>
</div>

{/* Setup_Steps */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Setup Steps</h2>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Unfold the paper stand and place inside the developer kit box.</li>
      <li  className="marker:font-bold">Insert the microSD card (with system image already written to it) into the slot on the underside of the Jetson Nano module.</li>
      <li  className="marker:font-bold">Set the developer kit on top of the paper stand.</li>
   
      <li  className="marker:font-bold">Power on your computer display and connect it.</li>
   
      <li  className="marker:font-bold">Connect the USB keyboard and mouse.</li>
   
      <li  className="marker:font-bold">Connect your Micro-USB power supply (or see the Jetson Nano Developer Kit User Guide for details about using a DC power supply with a barrel jack connector). The developer kit will power on and boot automatically.</li>
   
     
   
</ol>
</div>

{/* "FBoot": "First Boot", */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">First Boot</h2>
<p>A green LED next to the Micro-USB connector will light as soon as the developer kit powers on. When you boot the first time, the developer kit will take you through some initial setup, including:</p>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Review and accept NVIDIA Jetson software EULA.</li>
      <li  className="marker:font-bold">Select system language, keyboard layout, and time zone.</li>
      <li  className="marker:font-bold">Create username, password, and computer name.</li>
      <li  className="marker:font-bold">Select APP partition size — it is recommended to use the max size suggested.</li>
   
</ol>
</div>

{/* "ST": "After Logging In" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl ">After Logging In</h2>
<p>You will see this Screen. Congratulations!</p>
<h2 className="mt-4 font-semibold text-2xl mb-2">Initial Setup Headless Mode!</h2>
<ol className="list-decimal pl-5">
 
      <li  className="marker:font-bold">To complete setup when no display is attached to the developer kit, you]ll need to connect the developer kit to another computer and then communicate with it via a terminal application (e.g., PuTTY) to handle the USB serial communication on that other computer.</li>
      <li  className="marker:font-bold">Note: Headless initial configuration requires the developer kit to be powered by a DC power supply with a barrel jack connector, since the Micro-USB port is required to access the initial configuration prompts.</li>

   
</ol>
</div>

{/* "S_Steps": "Setup Steps" */}
<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Setup Steps</h2>
<ol className="list-decimal pl-5">
  
      <li  className="marker:font-bold">Unfold the paper stand and place inside the developer kit box.</li>
      <li  className="marker:font-bold">Insert the microSD card (with system image already written to it) into the slot on the underside of the Jetson Nano module.</li>
      <li  className="marker:font-bold">Set the developer kit on top of the paper stand..</li>
      <li  className="marker:font-bold">"Check the Jetson Nano Developer Kit User Guide for location of J48 Power Select Header and J25 Power Jack.</li>
      <li  className="marker:font-bold">Jumper the J48 Power Select Header pins.</li>
      <li  className="marker:font-bold">Connect your other computer to the developer kit's Micro-USB port.</li>
      <li  className="marker:font-bold">"Connect a DC power supply to the J25 Power Jack. The developer kit will power on automatically.</li>
      <li  className="marker:font-bold">Allow 1 minute for the developer kit to boot.</li>
      <li  className="marker:font-bold">On your other computer, use the serial terminal application to connect via host serial port to the developer kit.</li>
</ol> <li  className="marker:font-bold">Once connected to the developer kit, hit SPACE if the initial setup screen does not appear automatically.</li>
</div>

<div className="mt-4 max-w-4xl bg-white p-6 rounded shadow-lg border border-black">
<h2 className="font-semibold text-2xl mb-2">Conclusion</h2>
<ol className="list-decimal pl-5">
 
      <li  className="marker:font-bold">Affordable AI Development Platform: Ideal for beginners and professionals in AI, robotics, and IoT.</li>
      <li  className="marker:font-bold">Compact & Efficient: Runs deep learning models efficiently at the edge.</li>
      <li  className="marker:font-bold">Flexible & Expandable: Supports multiple sensors, cameras, and computing peripherals.</li>
      <li className="marker:font-bold">Powerful GPU for AI Tasks: Handles real-time object detection, facial recognition, and autonomous applications.</li>
      <li  className="marker:font-bold">Perfect for AI/ML enthusiasts, students, researchers, and embedded system developers! 🚀</li>

  
</ol>
</div>








 </div>
  
    
    


    )
}