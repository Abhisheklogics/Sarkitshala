export default function sitemap() {
    const domain = process.env.DOMAIN ; // ensure DOMAIN is defined
  
    return [
      {
        url: 'https://sarkitshala.site/',
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://sarkitshala.site/arduino',
        lastModified: new Date().toISOString(),  // using ISO string format
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: 'https://sarkitshala.site/raspberry',
        lastModified: new Date().toISOString(),  // using ISO string format
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: 'https://sarkitshala.site/esp',
        changeFrequency: 'weekly',
        priority: 1,
      },
    ];
  }
  