const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  images: {
    domains: ['spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com']
  }
};

module.exports = nextConfig;
