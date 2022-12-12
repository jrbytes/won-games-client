/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['github.com', 'source.unsplash.com', '0.0.0.0']
  }
}

module.exports = nextConfig
