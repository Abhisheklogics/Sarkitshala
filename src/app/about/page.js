//&#39; pr &apos; '
// " &quot; or &#34

const About = () => {
  return (
    <div className="md:mt-[50px] mt-[130px] bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl mt-4 font-bold text-blue-600">About Us</h1>
        <p className="mt-[50px] text-justify  text-lg max-w-4xl bg-white p-6 rounded-2xl shadow-lg ">
          Welcome to <span className="font-semibold">Sarkitshala.com</span>, a dedicated online platform created to support and nurture the next generation of technologists, students, researchers, and faculty members. We are committed to providing free, high-quality tutorials that equip learners with in-depth knowledge and practical skills in technology, circuits, IoT, drones, robotics, and beyond.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-2 text-gray-700">
        In today&apos;s rapidly evolving world, technology plays a crucial role in shaping industries, education, and innovation. At Sarkitshala, we believe that knowledge should be freely accessible to all, regardless of background or financial constraints. That’s why our platform is entirely free and open source, ensuring that students, educators, and researchers have unrestricted access to valuable learning resources.
        </p>
      </div>


      {/* Bridging Gap BetweenTheory & Practice */}
      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Bridging the Gap Between Theory and Practice</h2>
        <p className="mt-2 text-gray-700">
        While many educational platforms focus solely on theoretical concepts, Sarkitshala takes a hands-on approach. We go beyond textbooks and lectures, offering practical, real-world applications of technology. Our tutorials are designed to:
        </p><br/>
        <ul>
          <li>✅ <b>Simplify Complex Concepts: </b>Breaking down intricate topics into easy-to-understand explanations.</li>
          <li>✅ <b>Encourage Hands-on Learning: </b>Providing step-by-step guides, projects, and real-world examples.</li>
          <li>✅ <b>Support Innovation and Research: </b>Enabling researchers and faculty members to explore new advancements.</li>
          <li>✅ <b>Enhance Career and Academic Growth: </b>Helping students and professionals develop industry-relevant skills.</li>
        </ul>
        </div>

        {/* Who Can Benefit ? */}
        <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who Can Benefit ?</h2>
        <p className="mt-2 text-gray-700">
        While many educational platforms focus solely on theoretical concepts, Sarkitshala takes a hands-on approach. We go beyond textbooks and lectures, offering practical, real-world applications of technology. Our tutorials are designed to:
        </p><br/>
        <ul>
          <li>✅ <b>Students: </b>Whether you&apos;re a beginner or an advanced learner, our tutorials provide structured learning paths to help you master technology and circuit design.</li>
          <li>✅ <b>Researchers: </b>We offer cutting-edge insights into emerging fields like IoT, robotics, and AI, aiding researchers in their experiments and innovations.</li>
          <li>✅ <b>Faculty Members: </b>Our well-researched content serves as a valuable teaching resource, helping educators enhance their curriculum with practical examples and case studies.</li>
          <li>✅ <b>Tech Enthusiasts & Hobbyists: </b>Whether you love experimenting with circuits or building your own tech projects, Sarkitshala provides everything you need to bring your ideas to life.</li>
        </ul>
        </div>

        <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision and Mission</h2>
        <p className="mt-2 text-gray-700">
        At <b>Sarkitshala, </b> our vision is to create a <b>global community of learners and innovators</b> who are passionate about advancing technology. Our mission is to <b>extend the boundaries of knowledge</b> by providing high-quality educational resources that are <b>free, accessible, and constantly updated</b>.
        </p>
        <br/>

        <ul>
          <li>✅ <b>Simpler: </b>Breaking down complex topics into easy, digestible lessons.</li>
          <li>✅ <b>Smarter: </b>Using interactive tutorials and project-based learning.</li>
          <li>✅ <b>More Accessible: </b>Ensuring that knowledge is free and available to all.</li>
        </ul>
        </div>


      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Join Us in Shaping the Future.</h2>
        <p className="mt-2 text-gray-700">
        Technology is evolving faster than ever and staying ahead requires continuous learning and innovation. At Sarkitshala, we invite you to be part of a thriving community that values knowledge, creativity, and collaboration.
        </p><br/>
        <p className="mt-2 text-gray-700">🚀 Start exploring today and take your technological skills to the next level!</p> 
        <a href="https://Sarkitshala.com" target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700">
          Visit Sarkitshala
        </a>
      </div>
    </div>
  );
};

export default About;
