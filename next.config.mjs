/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com'],
    deviceSizes: [300,640, 750, 1080, 1920], 
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeFonts: true,   },
  future: {
    disableExperimentalFonts: true,  
  },
};

export default nextConfig;
