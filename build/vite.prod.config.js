import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    minify: false,
    rollupOptions: {
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
