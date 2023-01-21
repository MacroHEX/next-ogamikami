/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      { hostname: "pbs.twimg.com" },
      { hostname: "cdn.sanity.io" },
    ],
  },
};

module.exports = nextConfig;
