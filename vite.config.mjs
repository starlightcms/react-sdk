import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'unplugin-dts/vite'


export default defineConfig({
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: 'index',
      cssFileName: 'styles'
    },
    rolldownOptions: {
      external: ['react'],
      output: {
        exports: 'named',
        banner: '\'use client\';',
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [dts()],
})
