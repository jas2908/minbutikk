import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // Example of proxy setup
      '/api': {
        target: 'http://localhost:3000', // Proxy requests starting with /api to this target
        changeOrigin: true,
        secure: false,
      }}}
});
