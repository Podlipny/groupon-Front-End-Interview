import path from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@lib', replacement: path.resolve(__dirname, 'src/lib') },
    ],
  },
  server: {
    port: 4000,
    host: true,
  },
  preview: {
    port: 4200,
    host: true,
    // proxy: {
    //   '/api': {
    //     target: 'https://aukro.cz',
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
