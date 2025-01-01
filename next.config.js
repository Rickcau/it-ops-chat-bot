/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Enable SWC compilation cache
  compiler: {
    removeConsole: process.env.NODE_ENV === "production"
  },
  // Disable telemetry in CI
  telemetry: process.env.CI === "true" ? false : true
}

module.exports = nextConfig 