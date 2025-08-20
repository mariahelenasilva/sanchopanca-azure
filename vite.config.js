import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // garante que os caminhos funcionem no build de produção
  server: {
    proxy: {
      '/api': {
        target: 'https://sanchoapi2025-gff6c0f9bpf9c7dy.canadacentral-01.azurewebsites.net',
        changeOrigin: true,
      }
    }
  }
});
