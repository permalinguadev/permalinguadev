import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(),
    dts({ insertTypesEntry: true, outputDir: './dist/__types__' }),
  ],
  build: {
    lib: {
      entry: 'src/main.ts',
      name: 'UI',
    },
    minify: false,
  },
  server: {
    host: '0.0.0.0',
    port: 8082,
    open: true,
    https: false,
    cors: true,
  },
})
