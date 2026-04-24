const nextConfig = {
  reactCompiler: true,
  images: {
    unoptimized: true,   // TEMPORARY – to avoid sharp errors
  },
  experimental: {
    scrollRestoration: true,
  },
};
export default nextConfig;