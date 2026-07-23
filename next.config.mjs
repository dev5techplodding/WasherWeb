/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
      {
        protocol: 'https',
        hostname: 'washr.org',
      },
      {
        protocol: 'https',
        hostname: 'spinnylaundry.com',
      },
    ],
  },
};

export default nextConfig;
