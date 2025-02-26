/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
import "./src/env.js";

/** @type {import("next").NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/api/submit:path*",
        destination: "https://go.advance.appily.com/form/submit:path*",
      },
      {
        source: "/api/acs/:slug",
        destination: "https://go.advance.appily.com/api/:slug",
      },
    ];
  },
};

export default config;
