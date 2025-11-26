/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/spendwise-pages',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

export default nextConfig
