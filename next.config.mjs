/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    loader: "custom",
    loaderFile: "./app/lib/utils/imageLoader.js",
  },
};

export default nextConfig;
