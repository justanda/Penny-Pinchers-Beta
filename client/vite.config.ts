import { defineConfig } from "vite";
// import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// DONE: Create Proxy Server
export default defineConfig({
  server: {
    port: 5173, // Vite http://localhost:5173
    open: true,
    proxy: {
      "/api": {
        target: "http://localhost:3001", // Backend Express server
        changeOrigin: true,
        secure: false,
        // rewrite: (path) => path.replace(/^\/api/, '')  // TODO: Verify this is correct
      },
      "/auth": {
        target: "http://localhost:3001",
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // plugins: [react()],
});
