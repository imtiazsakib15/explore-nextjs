/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [{ hostname: "testrigor.com" }],
  },
};

module.exports = nextConfig;
