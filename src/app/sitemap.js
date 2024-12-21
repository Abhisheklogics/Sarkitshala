export default async function sitemap() {
 
  let res= await fetch( `https://sarkitshala.site/api/experiments/Arduino`)
  let data= await res.json()
   let ardurl=data.map(({ExperimentId})=>({
     url:`https://sarkitshala.site/arduino/${ExperimentId}`
   }))
    
    
  
    
  
   let res2= await fetch( `https://sarkitshala.site/api/experiments/Esp`)
  let data2= await res2.json()
   let Espurl=data2.map(({ExperimentId})=>({
     url:`https://sarkitshala.site/esp/${ExperimentId}`,
     priority: 1,
   }))
    return [
      {
        url: `https://sarkitshala.site/arduino`,
        changeFrequency: 'monthly',
        priority: 1,
      },
      ...ardurl,
      
      {
        url: `https://sarkitshala.site/raspberry`,
        changeFrequency: 'monthly',
        priority: 1,
      },
      
      {
        url: `https://sarkitshala.site/esp`,
        changeFrequency: 'monthly',
        priority: 1,
      },
      ...Espurl
    
    ];
  }
  