/** @type {import('next').NextConfig} */
const nextConfig = {
    
  experimental: {
    serverActions: true, // Required for Clerk v4+
  },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
                pathname: '**',
            },
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
                pathname: '**',
            },
        ],
    },
};

export default nextConfig;
