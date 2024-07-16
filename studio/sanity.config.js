import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import About from "./schemas/About"
import { pageStructure, singletonPlugin } from './plugins'
import Services from './schemas/Services'
import Careers from './schemas/Careers'
import Top from './schemas/Top'
import Home from './schemas/Home'

export default defineConfig({
  name: 'default',
  title: 'paparazi',

  projectId: 'h35hsaal',
  dataset: 'development',
  plugins: [
    structureTool({ structure: pageStructure([About , Services , Careers , Top, Home]) }),
    singletonPlugin([About.name , Services.name , Careers.name , Top.name , Home.name]),
    visionTool()
  ],
  schema: {
    types: [
      About,
      Services,
      Careers,
      Top,
      Home
    ]
  },
})
