/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/lib/utils/imageLoader.js",
  },
};
const nextConfig = {
  output: "export",
  assetPrefix: "/",
};

export default nextConfig;
