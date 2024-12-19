export default function sitemap() {
    const domain = process.env.DOMAIN || 'https://localhost:30000'; // ensure DOMAIN is defined
  
    return [
      {
        url: `${domain}/`,
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${domain}/arduino`,
        lastModified: new Date().toISOString(),  // using ISO string format
        changeFrequency: 'monthly',
        priority: 1,
      },
      {
        url: `${domain}/raspberry`,
        lastModified: new Date().toISOString(),  // using ISO string format
        changeFrequency: 'weekly',
        priority: 0.5,
      },
      {
        url: `${domain}/esp`,
        changeFrequency: 'weekly',
        priority: 1,
      },
    ];
  }
  