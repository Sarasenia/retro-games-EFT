import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base:'/retro-games/',
  plugins: [react()],
  server: {
    proxy: {
      '/api/productos': {
        target: 'https://dummyjson.com',
        changeOrigin: true,
        rewrite: () => '/c/6818-d15d-4cfb-b045',
      },
    },
  },
})
