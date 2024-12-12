import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  root: './frontend', // Ensure this is set to 'frontend'
  plugins: [react()],
  build: {
    outDir: '../dist', // Output directory outside of frontend
    emptyOutDir: true, // Ensure old build files are removed
  },
})
