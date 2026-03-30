/** @type {import('next').NextConfig} */
const nextConfig = {
  /* Keep your existing compiler setting */
  reactCompiler: true,

  /* Add the images configuration to fix the [75, 85] error */
  images: {
    qualities: [75, 85],
    formats: ['image/avif', 'image/webp'], // Optimized for faster loading
  },

  /* Recommended: Helps with smooth scroll route transitions */
  experimental: {
    scrollRestoration: true,
  },
};

export default nextConfig;