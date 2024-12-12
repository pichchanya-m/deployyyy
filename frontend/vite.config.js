import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  root: path.resolve(__dirname, 'frontend'),  // Set the root to the frontend folder
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),  // Output directory outside of frontend
    emptyOutDir: true,  // Clean up old build files
  },
});
