import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['qiita-user-contents.imgix.net', 'images.microcms-assets.io'],
  },
  reactStrictMode: true,
};

export default nextConfig;
