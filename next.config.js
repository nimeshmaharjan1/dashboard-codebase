/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');
const nextConfig = {
  swcMinify: true,
  i18n,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        port: '',
        pathname: '',
      },
    ],
    domains: ['lh3.googleusercontent.com']
  },
  publicRuntimeConfig: {
   CALLBACK_URL: process.env.CALLBACK_URL
 }
};

module.exports = nextConfig;
