import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    domains: ['swiminstructors.sunsationalswimschool.com'],
  },
  async rewrites() {
    return {
      afterFiles: [
        {
          source: '/:city--:state--:swimmingService([A-z].+-swimming-lessons)', // dynamic city pages
          destination: '/city/:city--:state--:swimmingService'
        },
        {
          source: '/:city--:state--:swimmingService([A-z].+-swim-lessons)', // dynamic city pages
          destination: '/city/:city--:state--:swimmingService'
        },
        {
          source: '/:city--:state--:swim-instructor-jobs', // dynamic city pages
          destination: '/city/:city--:state--swim-instructor-jobs'
        },
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
          source: '/blog/:article*',
          destination: '/blog/:article*',
        },
        {
          source: '/us/:state*',
          destination: '/us/:state*',
        },
        {
          source: '/us/:state*/:city*',
          destination: '/us/:state*/:city*',
        },
        {
          source: '/swim-instructors/:path*',
          destination: '/swim-instructors/:path*'
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
