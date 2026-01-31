import { defineConfig } from 'vite';

export default defineConfig({
  base: '/blank-editor/',
  build: {
    outDir: 'docs',

    esbuild: {
      drop: ['console', 'debugger'],
    },

    rollupOptions: {
      treeshake: 'recommended',
      output: {
        inlineDynamicImports: true,
      },
    },

    terserOptions: {
      compress: {
        dead_code: true,
        drop_console: true,
        arrows: true,
      },
      mangle: true,
    },

    minify: 'terser',
    cssMinify: 'lightningcss',
  },
});
