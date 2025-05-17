/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable static generation for pages that might have hydration issues
  experimental: {
    // This helps with hydration issues in some cases
    optimizeCss: false,
    // Disable static optimization for pages with hydration issues
    workerThreads: false,
    // Disable React server components for this project
    serverComponents: false,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
