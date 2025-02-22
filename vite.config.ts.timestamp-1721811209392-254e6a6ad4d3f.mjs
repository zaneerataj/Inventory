// vite.config.ts
import { defineConfig } from "file:///D:/invetry/Inventory/node_modules/vite/dist/node/index.js";
import react from "file:///D:/invetry/Inventory/node_modules/@vitejs/plugin-react/dist/index.mjs";
import path from "path";
import { VitePWA } from "file:///D:/invetry/Inventory/node_modules/vite-plugin-pwa/dist/index.js";
import tailwindcss from "file:///D:/invetry/Inventory/node_modules/tailwindcss/lib/index.js";
import dotenv from "file:///D:/invetry/Inventory/node_modules/dotenv/lib/main.js";
import eslintPlugin from "file:///D:/invetry/Inventory/node_modules/vite-plugin-eslint/dist/index.mjs";
var __vite_injected_original_dirname = "D:\\invetry\\Inventory";
dotenv.config();
var vite_config_default = defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        // Your manifest options
        name: "My React App",
        short_name: "React App",
        description: "A Progressive Web App built with React and Vite",
        start_url: "/",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        icons: [
          {
            src: "/logo192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/logo512.png",
            sizes: "512x512",
            type: "image/png"
          }
        ]
      },
      workbox: {
        // Workbox options
        clientsClaim: true,
        skipWaiting: true,
        // runtimeCaching options
        runtimeCaching: [
          {
            urlPattern: new RegExp("^https://your-api.com/"),
            handler: "NetworkFirst",
            options: {
              networkTimeoutSeconds: 10,
              cacheName: "api-cache",
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 300
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
          // Add more runtimeCaching rules as needed
        ]
      }
    }),
    eslintPlugin({
      overrideConfigFile: path.resolve(__vite_injected_original_dirname, ".eslintrc.cjs"),
      // Adjust path as per your project structure
      include: "**/*.+(js|jsx|ts|tsx)",
      fix: true
      // This will automatically fix linting issues on save
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "src")
    }
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
      // Use tailwindcss directly here
    }
  },
  server: {
    // https: false, // Enable HTTPS
    // https: {
    //   key: path.resolve(__dirname, 'path_to_your_key.pem'), // Replace with the path to your SSL key file
    //   cert: path.resolve(__dirname, 'path_to_your_cert.pem'), // Replace with the path to your SSL certificate file
    // },
    port: parseInt(process.env.PORT) || 3e3
    // Use PORT environment variable or default to 3000
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxpbnZldHJ5XFxcXEludmVudG9yeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcaW52ZXRyeVxcXFxJbnZlbnRvcnlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2ludmV0cnkvSW52ZW50b3J5L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCByZWFjdCBmcm9tICdAdml0ZWpzL3BsdWdpbi1yZWFjdCc7XHJcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xyXG5pbXBvcnQgeyBVc2VyQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IFZpdGVQV0EgfSBmcm9tICd2aXRlLXBsdWdpbi1wd2EnO1xyXG5pbXBvcnQgdGFpbHdpbmRjc3MgZnJvbSAndGFpbHdpbmRjc3MnO1xyXG5pbXBvcnQgZG90ZW52IGZyb20gJ2RvdGVudic7XHJcbmltcG9ydCBlc2xpbnRQbHVnaW4gZnJvbSAndml0ZS1wbHVnaW4tZXNsaW50JztcclxuXHJcbi8vIExvYWQgZW52aXJvbm1lbnQgdmFyaWFibGVzIGZyb20gLmVudiBmaWxlXHJcbmRvdGVudi5jb25maWcoKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIFZpdGVQV0Eoe1xyXG4gICAgICBtYW5pZmVzdDoge1xyXG4gICAgICAgIC8vIFlvdXIgbWFuaWZlc3Qgb3B0aW9uc1xyXG4gICAgICAgIG5hbWU6ICdNeSBSZWFjdCBBcHAnLFxyXG4gICAgICAgIHNob3J0X25hbWU6ICdSZWFjdCBBcHAnLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnQSBQcm9ncmVzc2l2ZSBXZWIgQXBwIGJ1aWx0IHdpdGggUmVhY3QgYW5kIFZpdGUnLFxyXG4gICAgICAgIHN0YXJ0X3VybDogJy8nLFxyXG4gICAgICAgIGRpc3BsYXk6ICdzdGFuZGFsb25lJyxcclxuICAgICAgICBiYWNrZ3JvdW5kX2NvbG9yOiAnI2ZmZmZmZicsXHJcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjMDAwMDAwJyxcclxuICAgICAgICBpY29uczogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBzcmM6ICcvbG9nbzE5Mi5wbmcnLFxyXG4gICAgICAgICAgICBzaXplczogJzE5MngxOTInLFxyXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIHNyYzogJy9sb2dvNTEyLnBuZycsXHJcbiAgICAgICAgICAgIHNpemVzOiAnNTEyeDUxMicsXHJcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdLFxyXG4gICAgICB9LFxyXG4gICAgICB3b3JrYm94OiB7XHJcbiAgICAgICAgLy8gV29ya2JveCBvcHRpb25zXHJcbiAgICAgICAgY2xpZW50c0NsYWltOiB0cnVlLFxyXG4gICAgICAgIHNraXBXYWl0aW5nOiB0cnVlLFxyXG4gICAgICAgIC8vIHJ1bnRpbWVDYWNoaW5nIG9wdGlvbnNcclxuICAgICAgICBydW50aW1lQ2FjaGluZzogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICB1cmxQYXR0ZXJuOiBuZXcgUmVnRXhwKCdeaHR0cHM6Ly95b3VyLWFwaS5jb20vJyksXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICdOZXR3b3JrRmlyc3QnLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgbmV0d29ya1RpbWVvdXRTZWNvbmRzOiAxMCxcclxuICAgICAgICAgICAgICBjYWNoZU5hbWU6ICdhcGktY2FjaGUnLFxyXG4gICAgICAgICAgICAgIGV4cGlyYXRpb246IHtcclxuICAgICAgICAgICAgICAgIG1heEVudHJpZXM6IDEwLFxyXG4gICAgICAgICAgICAgICAgbWF4QWdlU2Vjb25kczogMzAwLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgY2FjaGVhYmxlUmVzcG9uc2U6IHtcclxuICAgICAgICAgICAgICAgIHN0YXR1c2VzOiBbMCwgMjAwXSxcclxuICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIC8vIEFkZCBtb3JlIHJ1bnRpbWVDYWNoaW5nIHJ1bGVzIGFzIG5lZWRlZFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICAgIGVzbGludFBsdWdpbih7XHJcbiAgICAgIG92ZXJyaWRlQ29uZmlnRmlsZTogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy5lc2xpbnRyYy5janMnKSwgLy8gQWRqdXN0IHBhdGggYXMgcGVyIHlvdXIgcHJvamVjdCBzdHJ1Y3R1cmVcclxuICAgICAgaW5jbHVkZTogJyoqLyouKyhqc3xqc3h8dHN8dHN4KScsXHJcbiAgICAgIGZpeDogdHJ1ZSwgLy8gVGhpcyB3aWxsIGF1dG9tYXRpY2FsbHkgZml4IGxpbnRpbmcgaXNzdWVzIG9uIHNhdmVcclxuICAgIH0pLFxyXG4gIF0sXHJcbiAgcmVzb2x2ZToge1xyXG4gICAgYWxpYXM6IHtcclxuICAgICAgJ0AnOiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAnc3JjJyksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY3NzOiB7XHJcbiAgICBwb3N0Y3NzOiB7XHJcbiAgICAgIHBsdWdpbnM6IFt0YWlsd2luZGNzc10sIC8vIFVzZSB0YWlsd2luZGNzcyBkaXJlY3RseSBoZXJlXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICAvLyBodHRwczogZmFsc2UsIC8vIEVuYWJsZSBIVFRQU1xyXG4gICAgLy8gaHR0cHM6IHtcclxuICAgIC8vICAga2V5OiBwYXRoLnJlc29sdmUoX19kaXJuYW1lLCAncGF0aF90b195b3VyX2tleS5wZW0nKSwgLy8gUmVwbGFjZSB3aXRoIHRoZSBwYXRoIHRvIHlvdXIgU1NMIGtleSBmaWxlXHJcbiAgICAvLyAgIGNlcnQ6IHBhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdwYXRoX3RvX3lvdXJfY2VydC5wZW0nKSwgLy8gUmVwbGFjZSB3aXRoIHRoZSBwYXRoIHRvIHlvdXIgU1NMIGNlcnRpZmljYXRlIGZpbGVcclxuICAgIC8vIH0sXHJcbiAgICBwb3J0OiBwYXJzZUludChwcm9jZXNzLmVudi5QT1JUISkgfHwgMzAwMCwgLy8gVXNlIFBPUlQgZW52aXJvbm1lbnQgdmFyaWFibGUgb3IgZGVmYXVsdCB0byAzMDAwXHJcbiAgfSxcclxufSkgYXMgVXNlckNvbmZpZztcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvUCxTQUFTLG9CQUFvQjtBQUNqUixPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBRWpCLFNBQVMsZUFBZTtBQUN4QixPQUFPLGlCQUFpQjtBQUN4QixPQUFPLFlBQVk7QUFDbkIsT0FBTyxrQkFBa0I7QUFQekIsSUFBTSxtQ0FBbUM7QUFVekMsT0FBTyxPQUFPO0FBRWQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sUUFBUTtBQUFBLE1BQ04sVUFBVTtBQUFBO0FBQUEsUUFFUixNQUFNO0FBQUEsUUFDTixZQUFZO0FBQUEsUUFDWixhQUFhO0FBQUEsUUFDYixXQUFXO0FBQUEsUUFDWCxTQUFTO0FBQUEsUUFDVCxrQkFBa0I7QUFBQSxRQUNsQixhQUFhO0FBQUEsUUFDYixPQUFPO0FBQUEsVUFDTDtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1I7QUFBQSxVQUNBO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxTQUFTO0FBQUE7QUFBQSxRQUVQLGNBQWM7QUFBQSxRQUNkLGFBQWE7QUFBQTtBQUFBLFFBRWIsZ0JBQWdCO0FBQUEsVUFDZDtBQUFBLFlBQ0UsWUFBWSxJQUFJLE9BQU8sd0JBQXdCO0FBQUEsWUFDL0MsU0FBUztBQUFBLFlBQ1QsU0FBUztBQUFBLGNBQ1AsdUJBQXVCO0FBQUEsY0FDdkIsV0FBVztBQUFBLGNBQ1gsWUFBWTtBQUFBLGdCQUNWLFlBQVk7QUFBQSxnQkFDWixlQUFlO0FBQUEsY0FDakI7QUFBQSxjQUNBLG1CQUFtQjtBQUFBLGdCQUNqQixVQUFVLENBQUMsR0FBRyxHQUFHO0FBQUEsY0FDbkI7QUFBQSxZQUNGO0FBQUEsVUFDRjtBQUFBO0FBQUEsUUFFRjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGFBQWE7QUFBQSxNQUNYLG9CQUFvQixLQUFLLFFBQVEsa0NBQVcsZUFBZTtBQUFBO0FBQUEsTUFDM0QsU0FBUztBQUFBLE1BQ1QsS0FBSztBQUFBO0FBQUEsSUFDUCxDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsS0FBSztBQUFBLElBQ3BDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsS0FBSztBQUFBLElBQ0gsU0FBUztBQUFBLE1BQ1AsU0FBUyxDQUFDLFdBQVc7QUFBQTtBQUFBLElBQ3ZCO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQU1OLE1BQU0sU0FBUyxRQUFRLElBQUksSUFBSyxLQUFLO0FBQUE7QUFBQSxFQUN2QztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
