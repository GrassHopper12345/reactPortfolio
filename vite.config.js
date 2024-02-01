import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://main--sparkly-cranachan-9f0864.netlify.app/',
  server: {
    port: 3000,
    open: true
  }
})
