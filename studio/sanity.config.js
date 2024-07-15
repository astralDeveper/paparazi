import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import About from "./schemas/About"
import { pageStructure, singletonPlugin } from './plugins'

export default defineConfig({
  name: 'default',
  title: 'paparazi',

  projectId: 'h35hsaal',
  dataset: 'development',
  plugins: [
    structureTool({ structure: pageStructure([About]) }),
    singletonPlugin([About.name]),
    visionTool()
  ],
  schema: {
    types: [
      About
    ]
  },
})
