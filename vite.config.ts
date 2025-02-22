import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { UserConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tailwindcss from 'tailwindcss';
import dotenv from 'dotenv';
import eslintPlugin from 'vite-plugin-eslint';

// Load environment variables from .env file
dotenv.config();

export default defineConfig({
  define: {
    'process.env.NODE_ENV': JSON.stringify(
      process.env.NODE_ENV || 'development',
    ),
  },
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // Your manifest options
        name: 'My React App',
        short_name: 'React App',
        description: 'A Progressive Web App built with React and Vite',
        start_url: '/',
        display: 'standalone',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/logo192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/logo512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // Workbox options
        clientsClaim: true,
        skipWaiting: true,
        // runtimeCaching options
        runtimeCaching: [
          {
            urlPattern: new RegExp('^https://your-api.com/'),
            handler: 'NetworkFirst',
            options: {
              networkTimeoutSeconds: 10,
              cacheName: 'api-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 300,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          // Add more runtimeCaching rules as needed
        ],
      },
    }),
    eslintPlugin({
      overrideConfigFile: path.resolve(__dirname, '.eslintrc.cjs'), // Adjust path as per your project structure
      include: '**/*.+(js|jsx|ts|tsx)',
      fix: true, // This will automatically fix linting issues on save
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss], // Use tailwindcss directly here
    },
  },
  server: {
    // https: false, // Enable HTTPS
    // https: {
    //   key: path.resolve(__dirname, 'path_to_your_key.pem'), // Replace with the path to your SSL key file
    //   cert: path.resolve(__dirname, 'path_to_your_cert.pem'), // Replace with the path to your SSL certificate file
    // },
    port: parseInt(process.env.PORT!) || 3000, // Use PORT environment variable or default to 3000
  },
}) as UserConfig;
