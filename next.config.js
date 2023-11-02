/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    PRIVY_APP_ID: process.env.PRIVY_APP_ID,
  },
};

module.exports = nextConfig;
