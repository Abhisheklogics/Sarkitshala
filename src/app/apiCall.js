export default async function getData(url, exNum) {
  try {
    const requestUrl = exNum ? `${url}?exId=${exNum}` : url;

    const response = await fetch(requestUrl, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      
    });

   
    // Parse and return JSON data
    return await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error; // Propagate the error so it can be handled elsewhere
  }
}
