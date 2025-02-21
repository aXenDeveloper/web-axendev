/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withNextIntl = require('next-intl/plugin')();
const withMDX = require('@next/mdx')();

const nextConfig = {
  ...withBundleAnalyzer(),
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        hostname: 'raw.githubusercontent.com',
        protocol: 'https',
        pathname: '/aXenDeveloper/**'
      },
      {
        hostname: 'files.axendev.net',
        protocol: 'https',
        pathname: '/projects/**'
      }
    ]
  }
};

module.exports = withNextIntl(withMDX(nextConfig));
