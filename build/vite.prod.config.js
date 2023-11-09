import { defineConfig } from 'vite';
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
