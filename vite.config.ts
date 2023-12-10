import { defineConfig, Plugin } from 'vite'
import {resolve} from 'path';
import handlebars from 'vite-plugin-handlebars'

export default defineConfig({
  plugins: [handlebars({
  partialDirectory: resolve('src/partials'),
}) as unknown as Plugin],
}) 