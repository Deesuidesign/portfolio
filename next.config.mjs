/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: "default", // This will use Next.js default loader
    domains: [], // Keep empty since we won't restrict any domain
    unoptimized: true, // Disable optimization for all images
  },
};

export default nextConfig;
