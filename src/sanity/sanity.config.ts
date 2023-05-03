import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {languageFilter} from '@sanity/language-filter'

export default defineConfig({
  name: 'default',
  title: 'pizzeria-ringo-bar',

  projectId: 'tf5jy7b0',
  dataset: 'production',

  plugins: [
    deskTool(),
    visionTool(),
    languageFilter({
      supportedLanguages: [
        {id: 'es', title: 'Español'},
        {id: 'en', title: 'English'},
      ],
      defaultLanguages: ['es'],
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
