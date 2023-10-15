import { env } from "./env.mjs";
await import("./env.mjs");

/** @type {import('next').NextConfig} */

const config = {
	reactStrictMode: true,
	images: {
		deviceSizes: [640, 1080, 1200, 1920, 2048],
		imageSizes: [16, 64, 96, 128, 256],
		domains: ["fakeimg.pl"]
	},
	compiler: {
		removeConsole: env.APP_ENV === "production"
	},
	experimental: {
		serverActions: true,
		typedRoutes: true
	},
	/** Linting and typechecking are already done as separate tasks in the CI pipeline */
	eslint: {
		ignoreDuringBuilds: false
	},
	typescript: {
		// !! WARN !!
		// Dangerously allow production builds to successfully complete even if
		// your project has type errors.
		// !! WARN !!
		ignoreBuildErrors: false
	}
};

export default config;
