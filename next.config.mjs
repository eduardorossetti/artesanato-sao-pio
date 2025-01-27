/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sanctuspaterpius.s3.sa-east-1.amazonaws.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
