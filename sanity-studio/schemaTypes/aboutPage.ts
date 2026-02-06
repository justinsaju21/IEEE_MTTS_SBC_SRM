import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'aboutPage',
    title: 'About Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Page Title',
            type: 'string',
            initialValue: 'About Us',
        }),
        defineField({
            name: 'heroSubtitle',
            title: 'Page Subtitle',
            type: 'string',
        }),
        defineField({
            name: 'aboutIEEE',
            title: 'About IEEE',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'aboutMTTS',
            title: 'About IEEE MTT-S',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'parentOrganizations',
            title: 'Parent Organizations',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'aboutChapter',
            title: 'About Our Chapter',
            type: 'text',
            rows: 5,
        }),
        defineField({
            name: 'vision',
            title: 'Vision Statement',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'mission',
            title: 'Mission Statement',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'objectives',
            title: 'Core Objectives',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'focusAreas',
            title: 'Key Focus Areas',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'memberBenefits',
            title: 'Member Benefits',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', title: 'Icon (emoji)', type: 'string' },
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'string' },
                    ],
                },
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'About Page Content' }
        },
    },
})
