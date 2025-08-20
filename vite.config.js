// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   plugins: [react()],
//   base: '/MyMind/', // 👈 VERY IMPORTANT
// });

// vite.config.ts or vite.config.js

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  base: '/MyMind/', // ✅ For correct GitHub Pages deployment (or any subpath)
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ Shortcut for imports
    },
  },
});

