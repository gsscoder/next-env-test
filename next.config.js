/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */

const withNextBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

const envPrefix = process.env.VERCEL_ENV === 'preview' ? 'prev_' :
                  process.env.VERCEL_ENV === 'production' ? 'prod_' : '';

module.exports = withNextBundleAnalyzer({
  images: {
      unoptimized: true,
  },
  publicRuntimeConfig: {
    testVar: process.env[`${envPrefix}testVariable`] ?? "",
  }
});
