
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import getData from "@/app/apiCall";

import Res from "@/components/Res";
const Loading = dynamic(() => import('@/components/loading/Loading'), { ssr: false });

const CodeBox = dynamic(() => import('@/components/code/code'), { ssr: false });

// export async function generateMetadata({ params }) {
//   const ExperimentData = await getData(`https://sarkitshala.com/api/experiments/RasMeta`, params.Experiment);

//   const experimentTitle = ExperimentData.title || "Raspberry Pi Experiment";
//   const experimentOverview = ExperimentData.metaDescription || "Explore Raspberry Pi tutorials and projects step by step. Learn about interfacing sensors, displays, and other modules with Raspberry Pi.";
//   const experimentImage = ExperimentData.image1 || 'https://sarkitshala.com/opengraph-image.jpg';
//   const experimentSlug = `https://sarkitshala.com/raspberry/${params.Experiment}`;
//   const metadataBase = new URL('https://sarkitshala.com');
//   const structuredData = {
//     "@context": "https://schema.org",
//     "@type": "Article",
//     headline: experimentTitle,
//     description: experimentOverview,
//     author: {
//       "@type": "Organization",
//       name: "Sarkitshala Team"
//     },
//     publisher: {
//       "@type": "Organization",
//       name: "Sarkitshala",
//       logo: {
//         "@type": "ImageObject",
//         url: "https://sarkitshala.com/logo.jpg"
//       }
//     },
//     datePublished: new Date().toISOString(),
//     dateModified: new Date().toISOString(),
//     image: experimentImage
//   };

//   return {
//     metadataBase,
//     title: `${experimentTitle} | Sarkitshala`,
//     description: `${experimentOverview}`,

//     robots: {
//       index: true,
//       follow: true,
//     },

//     url: experimentSlug,
//     siteName: "Sarkitshala",
    
//     openGraph: {
//       title: `${experimentTitle} | Raspberry Pi Projects & Tutorials`,
//       description: experimentOverview,
//       url: experimentSlug,
//       images: [
//         {
//           url: experimentImage,
//           width: 1200,
//           height: 630,
//           alt: `${experimentTitle} Experiment preview`
//         }
//       ],
//       site_name: "Sarkitshala",
//       type: "article",
//     },

//     twitter: {
//       card: "summary_large_image",
//       title: `${experimentTitle} | Raspberry Pi Guide`,
//       description: experimentOverview,
//       images: [experimentImage]
//     },

//     canonical: experimentSlug,

//     alternates: {
//       canonical: experimentSlug,
//       languages: {
//         "en-US": `https://sarkitshala.com/en/raspberry/${params.Experiment}`,
//         "hi-IN": `https://sarkitshala.com/hi/raspberry/${params.Experiment}`
//       }
//     },

//     author: "Sarkitshala Team (Amarjeet Singh Chauhan, Abhishek Kumar, Aman Raj)",

//     structuredData: JSON.stringify(structuredData), 
//   };
// }

export async function generateStaticParams() {
  try {
      const response = await getData('https://sarkitshala.com/api/experiments/Res');
      const posts = response?.experiments || [];
      
      return posts.map((post) => ({
          ExperimentId: String(post.ExperimentId),
      }));
  } catch (error) {
      console.error('Error fetching data:', error);
      return [];
  }
}

export default async function Page({ params }) {
    const { Experiment } = await params; 
    
    const data = await getData(`https://sarkitshala.com/api/experiments/Res`, Experiment)
    
      if(data)
      {
        return(<Res data={data}/>)
        
      }
    if (!data) {
     
        return <p><Loading/></p>;
      }
      
      

    
     
}
