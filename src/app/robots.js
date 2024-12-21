export default function robots() {
  return {
    rules: {
      userAgent: '*',  
      allow: '*',      
      disallow: '/services',  
    },
    sitemap: `https://sarkitshala.site/sitemap.xml`,  
  };
}
