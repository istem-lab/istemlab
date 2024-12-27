/** @type {import('next').NextConfig} */
const nextConfig = {
    serverActions: {
      bodySizeLimit: '10mb',  // Set the body size limit to 10 megabytes
    },
  };
  
  export default nextConfig;