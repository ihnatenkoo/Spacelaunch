const withPWA = require('next-pwa');

module.exports = withPWA({
	reactStrictMode: true,
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/,
			use: ['@svgr/webpack'],
		});

		return config;
	},

	images: {
		domains: [
			'spacelaunchnow-prod-east.nyc3.cdn.digitaloceanspaces.com',
			'spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com',
			'nyc3.digitaloceanspaces.com',
		],
	},

	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true,
		disable: process.env.NODE_ENV === 'development',
	},
});
