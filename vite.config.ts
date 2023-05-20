import { fileURLToPath, URL } from 'node:url'
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  // optimizeDeps: {
  //   include: ['howler'],
  // },
  // build: {
  //   rollupOptions: {
  //     external: ['howler'],
  //     output: {
  //       globals: {
  //         howler: 'Howler',
  //       },
  //     },
  //   },
  // },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "${path.resolve(__dirname, 'src/styles/layout.scss')}";`,
      },
    },
  },
  server: {
    port: 4000,
    // true: 能外网访问;  'localhost': 不能外网访问
    host: true,
    open: false,
    https: false,
    proxy: {
      '/api': {
        target: 'https://www.duanziqiong.com/api', // 远程有nginx处理"/api"
        // target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
    cors: true,
  },
})
