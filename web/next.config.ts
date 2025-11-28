import type { NextConfig } from "next";
<<<<<<< HEAD

const nextConfig: NextConfig = {
  productionBrowserSourceMaps: false,
  turbopack: {
    // Empty turbopack config to silence warnings while using webpack
  },
  webpack: (config, { isServer }) => {
=======
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  productionBrowserSourceMaps: false,
  webpack: (config, { isServer }) => {
    // Alias problematic Node-only deps away in both server & client builds
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      pino: false,
      "pino/file": false,
      "thread-stream": false,
      "why-is-node-running": false,
      "@base-org/account": path.join(__dirname, "empty-module.mjs"),
      "@coinbase/wallet-sdk": path.join(__dirname, "empty-module.mjs"),
      "@gemini-wallet/core": path.join(__dirname, "empty-module.mjs"),
      "@metamask/sdk": path.join(__dirname, "empty-module.mjs"),
      "@safe-global/safe-apps-sdk": path.join(__dirname, "empty-module.mjs"),
      "@safe-global/safe-apps-provider": path.join(__dirname, "empty-module.mjs"),
      porto: path.join(__dirname, "empty-module.mjs"),
    };
    // Prefer resolving modules from this workspace's node_modules first
    config.resolve.modules = [
      path.join(__dirname, "node_modules"),
      ...(config.resolve.modules || []),
    ];
>>>>>>> bad6130af101019355316f82819031bc2578bb17
    if (!isServer) {
      // Replace pino with empty module in browser builds
      config.resolve.fallback = {
        ...config.resolve.fallback,
<<<<<<< HEAD
        "pino": false,
=======
        pino: false,
>>>>>>> bad6130af101019355316f82819031bc2578bb17
        "pino/file": false,
        "thread-stream": false,
      };
    }
    return config;
  },
};

export default nextConfig;
