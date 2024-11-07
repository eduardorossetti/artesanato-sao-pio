/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cvws.icloud-content.com',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
