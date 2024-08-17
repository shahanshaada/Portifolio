/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '', // Optional, if your CDN has a specific port
            pathname: '/images/**', // Matches all images under the `/images` directory on cdn.sanity.io
          },
        ],
      },
};

export default nextConfig;
