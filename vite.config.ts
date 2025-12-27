import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using root base path for custom domain (www.afikyefet.com)
  base: '/',
})

