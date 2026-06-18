import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import { singletonTools } from 'sanity-plugin-singleton-management'

export default defineConfig({
  name: 'default',
  title: 'Metal AXS',

  projectId: 'cjiuyalr',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), singletonTools()],

  schema: {
    types: schemaTypes,
  },
})
