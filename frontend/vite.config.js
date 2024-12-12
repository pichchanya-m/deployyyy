import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),  // Correct root directory for Vite
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // Correct output directory
    emptyOutDir: true,  // Clean up old build files
  },
});
