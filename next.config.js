/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  images: {
    formats: ['image/webp'],
    domains: ['jjlccqhkakrubpbfpnwc.supabase.co']
  },
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false,
  },
  
  // disable css-modules component styling
  webpack(config) {
    config.module.rules.forEach((rule) => {
      const { oneOf } = rule;
      if (oneOf) {
        oneOf.forEach((one) => {
          if (!`${one.issuer?.and}`.includes('_app')) return;
          one.issuer.and = [path.resolve(__dirname)];
        });
      }
    }),{ test: /\\.(png|jp(e*)g|svg|gif)$/, use: ['file-loader'], }
    return config;
  },
};

module.exports = nextConfig;