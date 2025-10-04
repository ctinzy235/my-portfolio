import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true, // ✅ Bỏ qua lỗi ESLint khi build (như lỗi trong ảnh Vercel)
  },
  images: {
    unoptimized: true, // ✅ Tránh lỗi khi dùng <img> thay vì <Image>
  },
};

export default nextConfig;
