// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [
      // @ts-ignore
      tailwindcss()
    ],
    build: {
      rollupOptions: {
        output: {
          assetFileNames: (e) => {
            if(e.names?.[0].endsWith('.css')) {
              return 'style.css';
            }
            return 'assets/[name]-[hash][extname]';
          }
        }
      }
    }
  },
  build: {
    format: 'file',
  }
});