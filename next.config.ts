import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["api.alikooshesh.ir"],
  },
  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.(mp4|webm|ogg)$/,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static/videos/",
            outputPath: "static/videos/",
          },
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
