import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],

    server: {
      port: 3000,
      host: true,
      open: true,
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@/components': path.resolve(__dirname, './src/components'),
        '@/constants': path.resolve(__dirname, './src/constants'),
        '@/types': path.resolve(__dirname, './src/types'),
      },
    },

    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: 'esbuild' as const,
      esbuild: {
        drop: ['console', 'debugger'],
      },
      rollupOptions: {
        output: {
          manualChunks: {
            'react-vendor': ['react', 'react-dom'],
            'charts': ['recharts'],
            'icons': ['lucide-react'],
          },
        },
      },
      chunkSizeWarningLimit: 1000,
    },

    optimizeDeps: {
      include: ['react', 'react-dom', 'recharts', 'lucide-react'],
    },
  };
});
