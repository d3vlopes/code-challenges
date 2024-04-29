/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'sa-east-1.graphassets.com',
			},
		],
	},
};

export default nextConfig;
