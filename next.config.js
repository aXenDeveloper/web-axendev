/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
});
const withNextIntl = require('next-intl/plugin')();

const nextConfig = { ...withBundleAnalyzer() };

module.exports = withNextIntl(nextConfig);
