import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  // GitHub Pages سرور Next نداره، پس Image Optimization API کار نمی‌کنه
  images: { unoptimized: true },
};

export default nextConfig;
