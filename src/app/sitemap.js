export default async function sitemap() {
  let ardurl = [];
  let Espurl = [];
  
  // Dynamically determine the domain based on environment
  const domain = process.env.NODE_ENV === 'production' ? 'https://sarkitshala.site/' : 'http://localhost:3000/';
  
  try {
    // Fetch Arduino experiments
    let res = await fetch(`${domain}/api/experiments/Arduino`);
    let data = await res.json();
    ardurl = data.map(({ ExperimentId }) => ({
      url: `${domain}/arduino/${ExperimentId}`
    }));

    // Fetch ESP experiments
    let res2 = await fetch(`${domain}/api/experiments/Esp`);
    let data2 = await res2.json();
    Espurl = data2.map(({ ExperimentId }) => ({
      url: `${domain}/esp/${ExperimentId}`,
      priority: 1,
    }));
  } catch (error) {
    console.error('Error fetching data for sitemap:', error);
  }

  return [
    {
      url: `${domain}/arduino`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...ardurl,
    {
      url: `${domain}/raspberry`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${domain}/esp`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...Espurl
  ];
}
