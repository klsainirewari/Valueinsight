import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Use '.' instead of process.cwd() to avoid errors in some CI environments
  const env = loadEnv(mode, '.', '');
  
  return {
    base: './', // Ensures relative paths for GitHub Pages
    plugins: [react()],
    define: {
      // Safely expose the API key. If missing, it defaults to an empty string.
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    },
    build: {
      outDir: 'dist',
    }
  };
});
