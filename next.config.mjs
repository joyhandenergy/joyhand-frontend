// next.config.js – for local development
const nextConfig = {
  reactCompiler: true,
  images: {
    // Temporarily use default Next.js loader (requires sharp)
    // loader: 'custom',           // Comment this out
    // loaderFile: './lib/cloudflareImageLoader.js', // Comment this out
    formats: ['image/avif', 'image/webp'],
  },
  experimental: {
    scrollRestoration: true,
  },
};
export default nextConfig;