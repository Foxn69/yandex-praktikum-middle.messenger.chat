import { defineConfig, type Plugin } from 'vite'
import { resolve } from 'path'
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [handlebars({
    partialDirectory: resolve('src/components')
  }) as unknown as Plugin]
})
