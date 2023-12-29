import path from 'path';

import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    exclude: ['**/node_modules/**', '**/__e2e__/**']
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './')
    }
  }
});
