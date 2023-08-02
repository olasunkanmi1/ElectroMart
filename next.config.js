/** @type {import('next').NextConfig} */

const rewrites = () => {
  return [
    // auth
    {
      source: '/login',
      destination: `${process.env.BACKEND_URL}/auth/login`,
    },
    {
      source: '/register',
      destination: `${process.env.BACKEND_URL}/auth/register`,
    },
    {
      source: '/verify-email',
      destination: `${process.env.BACKEND_URL}/auth/verify-email`,
    },
    {
      source: '/logout',
      destination: `${process.env.BACKEND_URL}/auth/logout`,
    },
    {
      source: '/forgot-password',
      destination: `${process.env.BACKEND_URL}/auth/forgot-password`,
    },
    {
      source: '/reset-password',
      destination: `${process.env.BACKEND_URL}/auth/reset-password`,
    },
    // user
    {
      source: '/user',
      destination: `${process.env.BACKEND_URL}/user`,
    },
    {
      source: '/update-password',
      destination: `${process.env.BACKEND_URL}/user/update-password`,
    },
    {
      source: '/user/all',
      destination: `${process.env.BACKEND_URL}/user/all`,
    },
    {
      source: '/user/save',
      destination: `${process.env.BACKEND_URL}/user/save`,
    },
    {
      source: '/user/save/:id',
      destination: `${process.env.BACKEND_URL}/user/save/:id`,
    },
    {
      source: '/user/:id',
      destination: `${process.env.BACKEND_URL}/user/save/:id`,
    },
    // product
    {
      source: '/product',
      destination: `${process.env.BACKEND_URL}/product`,
    },
    {
      source: '/product/:id',
      destination: `${process.env.BACKEND_URL}/product/:id`,
    },
    {
      source: '/product/:id/reviews',
      destination: `${process.env.BACKEND_URL}/product/:id/reviews`,
    },
    {
      source: '/product/upload-image',
      destination: `${process.env.BACKEND_URL}/product/upload-image`,
    },
    // review
    {
      source: '/review',
      destination: `${process.env.BACKEND_URL}/review`,
    },
    {
      source: '/review/:id',
      destination: `${process.env.BACKEND_URL}/review/:id`,
    },
    // order
    {
      source: '/order',
      destination: `${process.env.BACKEND_URL}/order`,
    },
    {
      source: '/order/:id',
      destination: `${process.env.BACKEND_URL}/order/:id`,
    },
    // flash sales countdown
    {
      source: '/flash-sales',
      destination: `${process.env.BACKEND_URL}/flash-sales`,
    },
  ];
};

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
  rewrites: rewrites,
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
