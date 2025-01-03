export default async function getData(url, exNum) {
  try {
    // Ensure exNum is not null, undefined, or empty
    const requestUrl = exNum && exNum.trim() !== '' 
      ? `${url}?exId=${encodeURIComponent(exNum)}`
      : url;

    // Log the URL for debugging
    console.log('Request URL:', requestUrl);

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

   

    return await response.json();
    
  } catch (error) {
    console.error('Error fetching data:', error.message);
    throw error; 
  }
}
