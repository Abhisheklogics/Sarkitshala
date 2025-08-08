




import getData from "@/app/apiCall";

import Esp from "@/components/Esp";
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
export async function generateMetadata({ params }) {
  console.log(params)
  try {
    const data = await getData(`https://sarkitshala.com/api/experiments/EspMeta`, params.Experiment);

    if (!data?.title) {
      throw new Error("Invalid metadata structure");
    }

    const desc = data.metaDescription || "Discover ESP32 experiments and projects.";

    const generateSeoDescription = (text, maxLength = 160) => {
      const truncated = text.length > maxLength
        ? `${text.slice(0, text.lastIndexOf(' ', maxLength)).trim()}...`
        : text.trim();
      return `${truncated} Discover ESP32 projects on Sarkitshala.`;
    };

    return {
      title: `${data.title}`,
      robots: { index: true, follow: true },
      description: generateSeoDescription(desc),
      url: `https://sarkitshala.com/esp/${params.Experiment}`,
      siteName: "sarkitshala.com",
      openGraph: {
        title: `${data.ExperimentName || data.title} | ESP32 Project Guide`,
        description: generateSeoDescription(desc),
        url: `https://sarkitshala.com/esp/${params.Experiment}`,
        images: [
          {
            url: data.image1 || 'https://sarkitshala.com/opengraph-image.jpg',
            width: 1200,
            height: 630,
            alt: `${data.title} Project for ESP32 - Sarkitshala`
          }
        ],
        site_name: 'Sarkitshala',
      },
      canonical: `https://sarkitshala.com/esp/${params.Experiment}`,
      twitter: {
        card: 'summary_large_image',
        site: '@sarkitshala',
        title: `${data.title} - ESP32 Projects`,
        description: generateSeoDescription(desc),
        image: data.image1 || 'https://sarkitshala.com/opengraph-image.jpg'
      },
      author: 'Sarkitshala Team',
    };
  } catch (error) {
    console.error('SEO metadata error:', error.message);
    return {
      title: 'Explore ESP32 Projects & Tutorials - Sarkitshala',
      description: 'Discover a range of ESP32 tutorials and projects with detailed guides.',
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




export default async function Page({ params }) {
  const { Experiment } =await params; 
  
  
  const data = await getData(`https://sarkitshala.com/api/experiments/Esp`, Experiment)
 

  return (
    <>
    <Esp data={data}/>
  </>
  );
}
