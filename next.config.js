/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  output: "out",
  trailingSlash: true,
  // assetPrefix: "https://egslot.net",
  assetPrefix: "",
  images: {
    domains: ["egslot.net"],
    path: "https://egslot.net",
    loader: "imgix",
    minimumCacheTTL: 60,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

module.exports = nextConfig;
