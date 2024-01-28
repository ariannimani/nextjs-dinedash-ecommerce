/** @type {import('next').NextConfig} */

/* eslint-disable @typescript-eslint/no-var-requires,import/no-extraneous-dependencies */
const withTM = require("next-transpile-modules")([
  "@dinedash/ui",
  "@dinedash/theme",
]);
const { withPlugins } = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled:
    process.env.ANALYZE === "true" ||
    (process.env.APP_ENV === "development" &&
      process.env.NODE_ENV !== "development"),
});

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dinedash.eu.saleor.cloud",
      },
      {
        protocol: "https",
        hostname: "demo.saleor.io",
      },
      {
        protocol: "https",
        hostname: "prod.demo.saleor.cloud",
      },
    ],
  },
  transpilePackages: ["@dinedash/ui"],
  compiler: {
    styledComponents: true,
  },
  swcMinify: true,
};

module.exports = withPlugins([withTM, withBundleAnalyzer], nextConfig);
