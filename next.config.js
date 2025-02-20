/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
webpack: (config, { isServer }) => {
    if (!isServer) {
    // Client-side specific configuration
    config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false,
        crypto: false,
        http: false,
        https: false,
        buffer: require.resolve('buffer/'),
        stream: require.resolve('stream-browserify'),
    };
    }
    return config;
},
transpilePackages: ['@netlify/emails'],
};

export default config;
