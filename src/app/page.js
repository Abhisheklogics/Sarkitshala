
import Home1 from '@/components/Home/Home';

export const metadata = {
  title: "Learn Arduino, Raspberry Pi & ESP Experiments | Sarkitshala",
  description: "Master Arduino, Raspberry Pi, and ESP development with hands-on tutorials & projects on Sarkitshala. Start your IoT journey today!",
  alternates: {
    canonical: "https://sarkitshala.com/",
  },
  openGraph: {
    title: "Arduino, Raspberry Pi & ESP Projects - Learn with Sarkitshala",
    description: "Master Arduino, Raspberry Pi, and ESP development with hands-on tutorials & projects on Sarkitshala. Start your IoT journey today!",
    url: "https://sarkitshala.com/",
    images: [
      {
        url: "https://sarkitshala.com/opengraph-image.jpg",
        width: 1200,
        height: 630,
        alt: "Learn Arduino, Raspberry Pi, and ESP projects for electronics and IoT development with Sarkitshala.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Master Arduino, Raspberry Pi & ESP Projects - Sarkitshala",
    description: "Master Arduino, Raspberry Pi, and ESP development with hands-on tutorials & projects on Sarkitshala. Start your IoT journey today!",
    image: "https://sarkitshala.com/opengraph-image.jpg",
  },
};

export default function Home() {
  
  return (
   <>
  
    <Home1/> 
  

   </>
  );
}
