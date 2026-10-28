import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base './' keeps asset paths relative, so the build works on GitHub Pages,
// Netlify, Vercel or any static host without further configuration.
export default defineConfig({
  base: './',
  plugins: [react()],
});
