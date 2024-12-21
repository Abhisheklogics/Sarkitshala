export default async function sitemap() {
  let ardurl;
  
  let Espurl;
 let domain1='http://localhost:3000/'
 let domain2='https://sarkitshala.site/'
 if(domain1 == 'http://localhost:3000/')
 {

  let res= await fetch( `${domain1}/api/experiments/Arduino`)
  let data= await res.json()
   ardurl=data.map(({ExperimentId})=>({
     url:`${domain1}/arduino/${ExperimentId}`
   }))
    
    
  
  
   let res2= await fetch( `${domain1}/api/experiments/Esp`)
  let data2= await res2.json()
    Espurl=data2.map(({ExperimentId})=>({
     url:`${domain1}/esp/${ExperimentId}`,
     priority: 1,
   }))
   return [
    {
      url: `${domain1}/arduino`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...ardurl,
   
    {
      url: `${domain1}/raspberry`,
      changeFrequency: 'monthly',
      priority: 1,
    },
   
   
    {
      url: `${domain1}/esp`,
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...Espurl
  
  ];
 }


 if(domain2 == 'https://sarkitshala.site/')
  {
 
   let res= await fetch( `${domain2}/api/experiments/Arduino`)
   let data= await res.json()
    ardurl=data.map(({ExperimentId})=>({
      url:`${domain2}/arduino/${ExperimentId}`
    }))
     
     
   
   
    let res2= await fetch( `${domain2}/api/experiments/Esp`)
   let data2= await res2.json()
     Espurl=data2.map(({ExperimentId})=>({
      url:`${domain1}/esp/${ExperimentId}`,
      priority: 1,
    }))
    return [
     {
       url: `${domain2}/arduino`,
       changeFrequency: 'monthly',
       priority: 1,
     },
     ...ardurl,
    
     {
       url: `${domain2}/raspberry`,
       changeFrequency: 'monthly',
       priority: 1,
     },
    
    
     {
       url: `${domain2}/esp`,
       changeFrequency: 'monthly',
       priority: 1,
     },
     ...Espurl
   
   ];
  }
   
    
  }
  