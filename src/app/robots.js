export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/*?_rsc=*',    
          '/*?*rsc=*',      
          '/admin',
          '/dashboard',
          '/login',
        ],
      },
    ],
    sitemap: 'https://sarkitshala.com/sitemap.xml',
  };
}
