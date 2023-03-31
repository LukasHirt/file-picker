import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl(), vue()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') }
  },
  preview: {
    https: true,
    port: 8080,
    host: 'host.docker.internal'
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: path.resolve(__dirname, './src/main.ts'),
      name: 'file-picker',
      fileName: 'file-picker',
      formats: ['es', 'umd']
    },
    emptyOutDir: true
  },
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  }
})
