

export const metadata = {
  title: "About Sarkitshala | Free Technology Tutorials & Learning Platform",
  description:
    "Sarkitshala.com offers free tutorials on technology, circuits, IoT, robotics, and more. Empowering students, researchers, and educators worldwide.",
  openGraph: {
    title: "About Sarkitshala | Free Technology Tutorials & Learning Platform",
    description:
      "Sarkitshala provides free, practical tutorials to help learners master technology and electronics.",
    url: "https://sarkitshala.com/about",
    siteName: "Sarkitshala",
    images: [
      {
        url: "https://sarkitshala.com/og-image.jpg", // Replace with your actual image url
        width: 1200,
        height: 630,
        alt: "Sarkitshala About",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  twitter: {
    card: "summary_large_image",
    title: "About Sarkitshala | Free Technology Tutorials & Learning Platform",
    description:
      "Sarkitshala provides free, practical tutorials to help learners master technology and electronics.",
    images: ["https://sarkitshala.com/og-image.jpg"], // Replace with actual image URL
  },
  canonical: "https://sarkitshala.com/about",
};

const About = () => {
  return (
    <div className="md:mt-[50px] mt-[130px] bg-gray-100 text-gray-900 flex flex-col items-center p-6">
      <div className="max-w-3xl text-center">
        <h1 className="text-4xl mt-4 font-bold text-blue-600">About Us</h1>
        <p className="mt-[50px] text-justify text-lg max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
          <strong>Welcome to Sarkitshala.com — Your Free Learning Hub for Technology and Innovation</strong>
          <br />
          <br />
          Sarkitshala is a dedicated online platform designed to empower students, researchers, educators, and tech enthusiasts with high-quality, free tutorials on technology, electronics, IoT, robotics, drones, and more.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Mission</h2>
        <p className="mt-2 text-gray-700">
          In a fast-evolving technological world, we believe knowledge should be accessible to everyone — regardless of background or resources. Sarkitshala is committed to offering <strong>completely free, open-source learning materials</strong> that bridge the gap between theory and practical application.
        </p>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">What Makes Us Different?</h2>
        <p className="mt-2 text-gray-700">
          Unlike many platforms that focus only on theory, Sarkitshala emphasizes <strong>hands-on learning</strong> and real-world projects. Our tutorials aim to:
        </p>
        <br />
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Simplify complex concepts:</strong> with clear and easy-to-understand explanations.
          </li>
          <li>
            <strong>Encourage practical experience:</strong> through step-by-step guides and project walkthroughs.
          </li>
          <li>
            <strong>Support innovation:</strong> by providing up-to-date resources for researchers and educators.
          </li>
          <li>
            <strong>Enhance career growth:</strong> by equipping learners with industry-relevant skills.
          </li>
        </ul>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Who Can Benefit?</h2>
        <p className="mt-2 text-gray-700">
          Whether you're a student, researcher, educator, or tech hobbyist, Sarkitshala offers valuable resources tailored for you:
        </p>
        <br />
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Students:</strong> From beginners to advanced learners, find structured paths to master electronics, programming, and technology.
          </li>
          <li>
            <strong>Researchers:</strong> Access cutting-edge insights and practical examples to support your experiments and projects.
          </li>
          <li>
            <strong>Educators:</strong> Use our well-researched content to enrich your curriculum with real-world applications.
          </li>
          <li>
            <strong>Tech Enthusiasts & Hobbyists:</strong> Whether you love experimenting with circuits or building your own tech projects, Sarkitshala supports your passion.
          </li>
        </ul>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Our Vision and Mission</h2>
        <p className="mt-2 text-gray-700">
          At <strong>Sarkitshala</strong>, our vision is to create a <strong>global community of learners and innovators</strong> passionate about advancing technology. Our mission is to <strong>extend the boundaries of knowledge</strong> by providing high-quality educational resources that are <strong>free, accessible, and constantly updated</strong>.
        </p>
        <br />
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Simpler:</strong> Breaking down complex topics into easy, digestible lessons.
          </li>
          <li>
            <strong>Smarter:</strong> Using interactive tutorials and project-based learning.
          </li>
          <li>
            <strong>More Accessible:</strong> Ensuring that knowledge is free and available to all.
          </li>
        </ul>
      </div>

      <div className="mt-10 max-w-4xl bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Join Us in Shaping the Future</h2>
        <p className="mt-2 text-gray-700">
          Technology is evolving faster than ever, and staying ahead requires continuous learning and innovation. At Sarkitshala, we invite you to join a thriving community that values knowledge, creativity, and collaboration.
        </p>
        <br />
        <p className="mt-2 text-gray-700">🚀 Start exploring today and take your technological skills to the next level!</p>
        <a
          href="https://sarkitshala.com"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
        >
          Visit Sarkitshala
        </a>
      </div>
    </div>
  );
};

export default About;
