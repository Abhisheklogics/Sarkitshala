export default async function sitemap() {
  try {
    
    let resArduino = await fetch(`https://sarkitshala.com/api/experiments/Arduino`);
    let dataArduino = resArduino.ok ? await resArduino.json() : [];
    let ardUrls = (dataArduino || []).map(({ slug }) => ({
      url: `https://sarkitshala.com/arduino/${slug}`,
      priority: 0.9,
      changeFrequency: 'weekly',
    }));

    
    let resRaspberry = await fetch(`https://sarkitshala.com/api/experiments/Res`);
    let dataRaspberry = resRaspberry.ok ? await resRaspberry.json() : [];
    let resUrls = (dataRaspberry || []).map(({ slug }) => ({
      url: `https://sarkitshala.com/raspberry/${slug}`,
      priority: 0.9,
      changeFrequency: 'weekly',
    }));

    
    let resEsp = await fetch(`https://sarkitshala.com/api/experiments/Esp`);
    let dataEsp = resEsp.ok ? await resEsp.json() : [];
    let espUrls = (dataEsp || []).map(({ slug }) => ({
      url: `https://sarkitshala.com/esp/${slug}`,
      priority: 0.8,
      changeFrequency: 'weekly',
    }));
   

    return [
     
      {
        url: `https://sarkitshala.com/arduino`,
        changeFrequency: 'weekly',
        priority: 1,
      },
      ...ardUrls,
      {
        url: `https://sarkitshala.com/raspberry`,
        changeFrequency: 'weekly',
        priority: 1,
      },
      ...resUrls,
      {
        url: `https://sarkitshala.com/esp`,
        changeFrequency: 'weekly',
        priority: 0.8,
      },
      ...espUrls,
      {
        url: `https://sarkitshala.com/about`,
        changeFrequency: 'monthly',
        priority: 0.7,
      },
      {
        url: `https://sarkitshala.com/jetson`,
        changeFrequency: 'monthly',
        priority: 0.7,
      }
    ];

  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return []; 
  }
}
