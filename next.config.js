/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        }
      ],
      domains: ['i.postimg.cc' , 'photos.app.goo.gl'],// Agrega el dominio de tus imágenes aquí
    },
    // ... otras configuraciones de Next.js, si las tienes
  };
  
  module.exports = {
    reactStrictMode: true,
    experimental: {
      appDir: true
    },
    ...nextConfig
  };