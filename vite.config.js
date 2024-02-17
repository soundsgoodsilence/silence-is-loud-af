import { fileURLToPath, URL } from 'node:url'

import { defineConfig, transformWithEsbuild } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ts from '@vue/tsconfig'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
    vue(),
    ts(),
  ],
  esbuild: {
    // ...
  },
   resolve: {
     alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url))
     }
   }
 })
