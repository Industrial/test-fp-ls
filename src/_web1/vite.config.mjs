import solidStartDenoPlugin from 'solid-start-deno'
import solidStartPlugin from 'solid-start/vite'
import suidPlugin from '@suid/vite-plugin'
import { defineConfig } from 'vite'
// import solidPlugin from 'vite-plugin-solid'
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    suidPlugin(),
    // devtools(),
    // solidPlugin(),
    solidStartPlugin({
      adapter: solidStartDenoPlugin(),
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
})
