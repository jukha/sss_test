import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['swiminstructors.sunsationalswimschool.com'],
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/:city--:state--:service',
          destination: '/:service/:city--:state',
        },
        {
          source: '/api/:path*',
          destination: '/api/:path*',
        },
        {
          source: '/registration/:path*',
          destination: '/registration/:path*',
        },
        {
          source: '/:path*',
          destination: 'https://www.sunsationalswimschool.com/:path*',
        },
      ],
    };
  },
};

export default nextConfig;
