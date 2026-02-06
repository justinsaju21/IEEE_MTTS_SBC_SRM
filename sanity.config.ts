import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity-studio/schemaTypes'

export default defineConfig({
    name: 'default',
    title: 'IEEE MTT-S SRM CMS',
    basePath: '/studio',

    projectId: 's5zhp3gc',
    dataset: 'production',

    plugins: [structureTool(), visionTool()],

    schema: {
        // @ts-ignore - Types mismatch between root and sanity-studio node_modules
        types: schemaTypes,
    },
})
