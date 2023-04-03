import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue2'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [basicSsl(), vue()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, './src')
      },
      {
        find: 'stream',
        replacement: `stream-browserify`
      }
    ]
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
      name: 'OCFilePicker',
      fileName: 'file-picker',
      formats: ['es', 'umd', 'iife']
    },
    emptyOutDir: true,
    minify: false,
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    },
    commonjsOptions: {
      ignoreTryCatch: (id) => id !== 'stream'
    }
  },
  define: {
    'process.env.NODE_ENV': `"${process.env.NODE_ENV}"`
  }
})
