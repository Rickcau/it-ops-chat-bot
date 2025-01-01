/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // Enable build cache
    turbotrace: {
      logLevel: 'error'
    }
  }
}

module.exports = nextConfig 