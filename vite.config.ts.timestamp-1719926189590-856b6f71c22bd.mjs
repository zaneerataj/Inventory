// vite.config.ts
import { defineConfig } from 'file:///Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe/node_modules/vite/dist/node/index.js';
import react from 'file:///Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe/node_modules/@vitejs/plugin-react/dist/index.mjs';
import path from 'path';
import { VitePWA } from 'file:///Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe/node_modules/vite-plugin-pwa/dist/index.js';
import tailwindcss from 'file:///Users/maskantechnology/node_modules/tailwindcss/lib/index.js';
import dotenv from 'file:///Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe/node_modules/dotenv/lib/main.js';
import eslintPlugin from 'file:///Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe/node_modules/vite-plugin-eslint/dist/index.mjs';
var __vite_injected_original_dirname =
  '/Users/maskantechnology/Desktop/inventory/inventory_fe/inventory_fe';
dotenv.config();
var vite_config_default = defineConfig({
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
      include: '**/*.+(js|jsx|ts|tsx)',
      fix: true,
      // This will automatically fix linting issues on save
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__vite_injected_original_dirname, 'src'),
    },
  },
  css: {
    postcss: {
      plugins: [tailwindcss],
      // Use tailwindcss directly here
    },
  },
  server: {
    port: parseInt(process.env.PORT) || 3e3,
    // Use PORT environment variable or default to 3000
  },
});
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvbWFza2FudGVjaG5vbG9neS9EZXNrdG9wL2ludmVudG9yeS9pbnZlbnRvcnlfZmUvaW52ZW50b3J5X2ZlXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvbWFza2FudGVjaG5vbG9neS9EZXNrdG9wL2ludmVudG9yeS9pbnZlbnRvcnlfZmUvaW52ZW50b3J5X2ZlL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9tYXNrYW50ZWNobm9sb2d5L0Rlc2t0b3AvaW52ZW50b3J5L2ludmVudG9yeV9mZS9pbnZlbnRvcnlfZmUvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCB7IFVzZXJDb25maWcgfSBmcm9tICd2aXRlJztcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xuaW1wb3J0IHRhaWx3aW5kY3NzIGZyb20gJ3RhaWx3aW5kY3NzJztcbmltcG9ydCBkb3RlbnYgZnJvbSAnZG90ZW52JztcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcblxuLy8gTG9hZCBlbnZpcm9ubWVudCB2YXJpYWJsZXMgZnJvbSAuZW52IGZpbGVcbmRvdGVudi5jb25maWcoKTtcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW1xuICAgIHJlYWN0KCksXG4gICAgVml0ZVBXQSh7XG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICAvLyBZb3VyIG1hbmlmZXN0IG9wdGlvbnNcbiAgICAgICAgbmFtZTogJ015IFJlYWN0IEFwcCcsXG4gICAgICAgIHNob3J0X25hbWU6ICdSZWFjdCBBcHAnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ0EgUHJvZ3Jlc3NpdmUgV2ViIEFwcCBidWlsdCB3aXRoIFJlYWN0IGFuZCBWaXRlJyxcbiAgICAgICAgc3RhcnRfdXJsOiAnLycsXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcbiAgICAgICAgYmFja2dyb3VuZF9jb2xvcjogJyNmZmZmZmYnLFxuICAgICAgICB0aGVtZV9jb2xvcjogJyMwMDAwMDAnLFxuICAgICAgICBpY29uczogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9sb2dvMTkyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvbG9nbzUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgd29ya2JveDoge1xuICAgICAgICAvLyBXb3JrYm94IG9wdGlvbnNcbiAgICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxuICAgICAgICBza2lwV2FpdGluZzogdHJ1ZSxcbiAgICAgICAgLy8gcnVudGltZUNhY2hpbmcgb3B0aW9uc1xuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVybFBhdHRlcm46IG5ldyBSZWdFeHAoJ15odHRwczovL3lvdXItYXBpLmNvbS8nKSxcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBuZXR3b3JrVGltZW91dFNlY29uZHM6IDEwLFxuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdhcGktY2FjaGUnLFxuICAgICAgICAgICAgICBleHBpcmF0aW9uOiB7XG4gICAgICAgICAgICAgICAgbWF4RW50cmllczogMTAsXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogMzAwLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBjYWNoZWFibGVSZXNwb25zZToge1xuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBBZGQgbW9yZSBydW50aW1lQ2FjaGluZyBydWxlcyBhcyBuZWVkZWRcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgZXNsaW50UGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6ICcqKi8qLisoanN8anN4fHRzfHRzeCknLFxuICAgICAgZml4OiB0cnVlLCAvLyBUaGlzIHdpbGwgYXV0b21hdGljYWxseSBmaXggbGludGluZyBpc3N1ZXMgb24gc2F2ZVxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ3NyYycpLFxuICAgIH0sXG4gIH0sXG4gIGNzczoge1xuICAgIHBvc3Rjc3M6IHtcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzc10sIC8vIFVzZSB0YWlsd2luZGNzcyBkaXJlY3RseSBoZXJlXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogcGFyc2VJbnQocHJvY2Vzcy5lbnYuUE9SVCEpIHx8IDMwMDAsIC8vIFVzZSBQT1JUIGVudmlyb25tZW50IHZhcmlhYmxlIG9yIGRlZmF1bHQgdG8gMzAwMFxuICB9LFxufSkgYXMgVXNlckNvbmZpZztcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlgsU0FBUyxvQkFBb0I7QUFDeFosT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUVqQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sa0JBQWtCO0FBUHpCLElBQU0sbUNBQW1DO0FBVXpDLE9BQU8sT0FBTztBQUVkLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFFBQVE7QUFBQSxNQUNOLFVBQVU7QUFBQTtBQUFBLFFBRVIsTUFBTTtBQUFBLFFBQ04sWUFBWTtBQUFBLFFBQ1osYUFBYTtBQUFBLFFBQ2IsV0FBVztBQUFBLFFBQ1gsU0FBUztBQUFBLFFBQ1Qsa0JBQWtCO0FBQUEsUUFDbEIsYUFBYTtBQUFBLFFBQ2IsT0FBTztBQUFBLFVBQ0w7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUztBQUFBO0FBQUEsUUFFUCxjQUFjO0FBQUEsUUFDZCxhQUFhO0FBQUE7QUFBQSxRQUViLGdCQUFnQjtBQUFBLFVBQ2Q7QUFBQSxZQUNFLFlBQVksSUFBSSxPQUFPLHdCQUF3QjtBQUFBLFlBQy9DLFNBQVM7QUFBQSxZQUNULFNBQVM7QUFBQSxjQUNQLHVCQUF1QjtBQUFBLGNBQ3ZCLFdBQVc7QUFBQSxjQUNYLFlBQVk7QUFBQSxnQkFDVixZQUFZO0FBQUEsZ0JBQ1osZUFBZTtBQUFBLGNBQ2pCO0FBQUEsY0FDQSxtQkFBbUI7QUFBQSxnQkFDakIsVUFBVSxDQUFDLEdBQUcsR0FBRztBQUFBLGNBQ25CO0FBQUEsWUFDRjtBQUFBLFVBQ0Y7QUFBQTtBQUFBLFFBRUY7QUFBQSxNQUNGO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFDRCxhQUFhO0FBQUEsTUFDWCxTQUFTO0FBQUEsTUFDVCxLQUFLO0FBQUE7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLEtBQUssUUFBUSxrQ0FBVyxLQUFLO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxLQUFLO0FBQUEsSUFDSCxTQUFTO0FBQUEsTUFDUCxTQUFTLENBQUMsV0FBVztBQUFBO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQUEsRUFDQSxRQUFRO0FBQUEsSUFDTixNQUFNLFNBQVMsUUFBUSxJQUFJLElBQUssS0FBSztBQUFBO0FBQUEsRUFDdkM7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
