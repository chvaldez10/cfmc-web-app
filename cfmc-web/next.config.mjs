/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "skdambngwkjvsmkhgswi.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "imagedelivery.net",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["framer-motion"],
  },
  transpilePackages: ["framer-motion"],
};

export default nextConfig;
