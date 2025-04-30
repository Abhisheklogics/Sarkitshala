


import dynamic from "next/dynamic";
import Image from "next/image";
import getData from "@/app/apiCall";
const CodeBox=dynamic(()=>import('@/components/code/code'),{
  ssr:false
})
const Esp = dynamic(() => import('@/components/Esp'), {ssr:false})
export async function generateMetadata({ params }) {
  let ExperimentName;
  try {
    ExperimentName = await getData(`https://sarkitshala.com/api/experiments/EspMeta`, params.Experiment);

    if (ExperimentName.ExperimentName.includes('Interfacing')) {
      ExperimentName.ExperimentName = ExperimentName.ExperimentName.replace('Interfacing', 'Interface');
    }

    const generateSeoDescription = (text, maxLength = 160) => {
      const truncatedText = text.length > maxLength
        ? `${text.slice(0, text.lastIndexOf(' ', maxLength)).trim()}...`
        : text.trim();
      return `${truncatedText} Discover ESP32 projects on Sarkitshala.`;
    };

    return {
      title: ` ${ExperimentName.ExperimentName} Using ESP –Sarkitshala`,
      robots: { index: true, follow: true },
      description: generateSeoDescription(ExperimentName.overview),
      url: `https://sarkitshala.com/esp/${params.Experiment}`,
      siteName: "sarkitshala.com",
      openGraph: {
        title: `${ExperimentName.ExperimentName} | ESP32 Project Guide`,
        description: generateSeoDescription(ExperimentName.overview),
        url: `https://sarkitshala.com/esp/${params.Experiment}`,
        images: [
          {
            url: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: `${ExperimentName.ExperimentName} Project for ESP32 - Sarkitshala`
          }
        ],
        site_name: 'Sarkitshala',
        keywords: `${ExperimentName.ExperimentName}, ESP32 Projects, IoT Projects, Embedded Systems, Circuit Diagrams, Motor Control, Sound Sensor, Distance Measurement`,
      },
      canonical: `https://sarkitshala.com/esp/${params.Experiment}`,
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: `${ExperimentName.ExperimentName} - ESP32 Projects`,
        description: generateSeoDescription(ExperimentName.overview),
        image: ExperimentName.image1 || 'https://sarkitshala.com/opengraph-image.jpg'
      },
      author: 'Sarkitshala Team',
    };
  } catch (error) {
    console.error('Error fetching experiment data:', error.message);
    return {
      title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
      description: 'Discover a range of ESP32 tutorials and projects with detailed guides.',
      url: 'https://sarkitshala.com/esp',
      siteName: "sarkitshala.com",
      openGraph: {
        title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
        description: 'Discover a range of ESP32 tutorials and projects with detailed guides.',
        images: [{
          url: 'https://sarkitshala.com/opengraph-image.jpg',
          width: 1200,
          height: 630,
          alt: 'ESP32 Project Image - Sarkitshala'
        }],
      },
      canonical: 'https://sarkitshala.com/esp',
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
        description: 'Explore various ESP32 experiments and projects.',
        image: 'https://sarkitshala.com/opengraph-image.jpg'
      }
    };
  }
}


export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Esp');
      
     
      const posts = response?.experiments || [];

      if (!Array.isArray(posts)) {
          throw new Error('Expected "experiments" to be an array.');
      }

      return posts.map((post) => ({
          ExperimentId: String(post.ExperimentId),
      }));
  } catch (error) {
      console.error('Error fetching or processing data:', error);
      return [];
  }
}


export default async function Page({ params }) {
  const { Experiment } =await params; 
  
  
  const data = await getData(`https://sarkitshala.com/api/experiments/Esp`, Experiment)
 

  return (
    <>
    <Esp data={data}/>
  </>
  );
}
