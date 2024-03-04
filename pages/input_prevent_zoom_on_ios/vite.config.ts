import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import mkcert from 'vite-plugin-mkcert'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/input_prevent_zoom_on_ios/dist/',
  plugins: [
    svelte(),
    mkcert(),
  ],
  resolve: {
    alias: {
      $lib: '/src/lib',
      $styles: '/src/styles',
      $utils: '/src/utils',
    },
  },
})
