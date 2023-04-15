/** @type {import('next').NextConfig} */
const nextConfig = {

  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };

    return config;
  },
  strictMode: true,
  reactStrictMode: true,
};

module.exports = nextConfig;
