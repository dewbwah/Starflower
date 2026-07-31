/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // Local assets only for now. Add remote patterns here if Angie's photos
    // are ever served from a CDN.
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
