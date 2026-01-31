import { defineConfig } from 'vite';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig({
  base: '/blank-editor/',
  plugins: [visualizer({ open: false })],
  build: {
    outDir: 'docs',
    sourcemap: false,
    esbuild: {
      drop: ['console', 'debugger'],
    },
    rollupOptions: {
      treeshake: 'safest',
      output: {
        inlineDynamicImports: false,
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
