export default defineConfig({
  root: path.resolve(__dirname, 'frontend'), 
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'dist'),
    emptyOutDir: true,
  },
});