import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://mellow-bravery-sancho.up.railway.app',
        changeOrigin: true,
        // retire o `rewrite` para manter `/api` no caminho
      }
    }
  }
});