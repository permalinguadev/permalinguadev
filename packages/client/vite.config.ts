import vue from '@vitejs/plugin-vue'
import WindiCSS from 'vite-plugin-windicss'
/**
 * @type { import('vite').UserConfig }
 */

import path from 'path'

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

export default {
  plugins: [vue(), WindiCSS()],
  resolve: {
    alias: {
      '@permalinguadev/ui': '@permalinguadev/ui/src/main.js',
      static: resolve('public/static'),
    },
  },
  
  optimizeDeps: {
    exclude: ['@permalinguadev/ui'],
  },
  server: {
    host: '0.0.0.0',
    port: 8081,
    open: true,
    https: false,
    cors: true,
  },
}
