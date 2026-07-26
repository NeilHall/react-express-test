import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // ponytail: outDir stays "build" so the express.static mount in ../app.js keeps working unchanged
  build: { outDir: 'build' },
  server: {
    port: 3000,
    // CRA's bare "proxy" field forwarded every unmatched request; Vite needs explicit
    // paths, so this lists the actual API routes served by ../routes.
    proxy: { '/users': 'http://localhost:5000' },
  },
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
