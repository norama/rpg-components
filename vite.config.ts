import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import tsconfigPaths from 'vite-tsconfig-paths'
import cssInject from 'vite-plugin-css-injected-by-js'
import { resolve } from 'path'

export default defineConfig({
  plugins: [solid(), tsconfigPaths(), cssInject()],
  build: {
    target: 'esnext',
    rollupOptions: {
      input: resolve(__dirname, 'src/components/rpg-name/NameInput.tsx'),
      preserveEntrySignatures: 'exports-only',
      external: ['solid-js', '@modular-forms/solid'],
      output: {
        entryFileNames: 'bundle.js',
        format: 'esm',
      },
    },
  },
})
