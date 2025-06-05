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
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:8080",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type",
          },
        ],
      },
    ];
  }
};

export default nextConfig;
