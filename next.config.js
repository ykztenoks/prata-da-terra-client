/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
