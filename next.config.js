/** @type {import('next').NextConfig} */

const rewrites = () => {
    return [
      // auth
      {
        source: "/login",
        destination: `${process.env.BACKEND_URL}/auth/login`
      },
      {
        source: "/register",
        destination: `${process.env.BACKEND_URL}/auth/register`
      },
      {
        source: "/verify-email",
        destination: `${process.env.BACKEND_URL}/auth/verify-email`
      },
      {
        source: "/logout",
        destination: `${process.env.BACKEND_URL}/auth/logout`
      },
      {
        source: "/forgot-password",
        destination: `${process.env.BACKEND_URL}/auth/forgot-password`
      },
      {
        source: "/reset-password",
        destination: `${process.env.BACKEND_URL}/auth/reset-password`
      },
      // user
      {
        source: "/user",
        destination: `${process.env.BACKEND_URL}/user`
      },
      {
        source: "/update-password",
        destination: `${process.env.BACKEND_URL}/user/update-password`
      },
    ]
}
  
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['res.cloudinary.com']
    },
    rewrites: rewrites
}

module.exports = nextConfig
