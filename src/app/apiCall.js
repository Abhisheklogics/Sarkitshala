
const cache = new Map();

export default async function getData(url, exNum) {
  try {
   
    const cacheKey = exNum ? `${url}?exId=${exNum}` : url;

   
    if (cache.has(cacheKey)) {
      console.log('Returning cached data');
      return cache.get(cacheKey);
    }

   
    const requestUrl = exNum ? `${url}?exId=${exNum}` : url;

    
    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next:{
        revalidate:60*60*60
      }
    });

    
    if (!response.ok) {
      throw new Error(`Error fetching data: ${response.statusText}`);
    }

    const data = await response.json();

  
    cache.set(cacheKey, data);

    
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;  
  }
}
