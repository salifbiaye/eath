/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "api.microlink.io",
    ],
  },
  experimental: {
    appDir: true,
  },
  eslint: {
    ignoreDuringBuilds: true, // Ignore ESLint during builds
  },
}

export default nextConfig
