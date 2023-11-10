import { defineConfig } from 'vite';
import viteCompression from 'vite-plugin-compression';
import path from 'path';

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
      input: {
        main: path.resolve(process.cwd(), './index.html'),
        product: path.resolve(process.cwd(), './src/product.html'),
      },
      output: {
        manualChunks: (id) => {
          console.log('id', id);
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
      },
    },
  },
});
