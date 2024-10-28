import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
// DONE: Create Proxy Server
export default defineConfig({

  server: {
    port: 5173,  // Vite http://localhost:5173
    proxy: {
      '/api': {
        target: 'http://localhost:3001',  // Backend Express server
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')  // TODO: Verify this is correct
      }
    }
  },
  plugins: [react()],
})
