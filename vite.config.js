import { fileURLToPath, URL } from 'node:url'

import { defineConfig, transformWithEsbuild } from 'vite'
import vue from '@vitejs/plugin-vue'
// import ts from '@vue/tsconfig'

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
    vue(),
    ts(),
         // Use the exposed transform from vite, instead of directly
         // transforming with esbuild
     return transformWithEsbuild(code, id, {
          //  loader: 'jsx',
           loader: { '.js': 'jsx' }, 
           jsx: 'automatic',
         })
   ],
   resolve: {
     alias: {
       '@': fileURLToPath(new URL('./src', import.meta.url))
     }
   }
 })
