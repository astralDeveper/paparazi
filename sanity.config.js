import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import About from "./schemas/About"
export default defineConfig({
  name: 'default',
  title: 'paparazi',

  projectId: 'h35hsaal',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes
  },
})
