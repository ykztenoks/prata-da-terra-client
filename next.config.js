/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["i.ibb.co", "i.postimg.cc", "hips.hearstapps.com"],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
