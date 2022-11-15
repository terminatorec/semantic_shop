/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'c.dns-shop.ru',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
