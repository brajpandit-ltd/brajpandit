/** @type {import('next').NextConfig} */
import withLess from "next-with-less";

const nextConfig = withLess({
  lessLoaderOptions: {
    javascriptEnabled: true,
  },
});

export default nextConfig;
