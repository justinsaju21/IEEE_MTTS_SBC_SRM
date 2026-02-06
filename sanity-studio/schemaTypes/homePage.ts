import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'homePage',
    title: 'Home Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroBadge',
            title: 'Hero Badge Text',
            type: 'string',
            initialValue: 'IEEE MTT-S Student Branch Chapter',
        }),
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            initialValue: 'Microwave Theory and Technology Society',
        }),
        defineField({
            name: 'heroInstitution',
            title: 'Institution Name',
            type: 'string',
            initialValue: 'SRM Institute of Science and Technology',
        }),
        defineField({
            name: 'heroDescription',
            title: 'Hero Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'stats',
            title: 'Stats Section',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'number', title: 'Number/Text', type: 'string' },
                        { name: 'label', title: 'Label', type: 'string' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'quickLinks',
            title: 'Quick Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'icon', title: 'Icon (emoji)', type: 'string' },
                        { name: 'title', title: 'Title', type: 'string' },
                        { name: 'description', title: 'Description', type: 'string' },
                        { name: 'link', title: 'Link URL', type: 'string' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'ctaTitle',
            title: 'CTA Title',
            type: 'string',
        }),
        defineField({
            name: 'ctaDescription',
            title: 'CTA Description',
            type: 'text',
        }),
        defineField({
            name: 'ctaButtonText',
            title: 'CTA Button Text',
            type: 'string',
        }),
        defineField({
            name: 'ctaButtonLink',
            title: 'CTA Button Link',
            type: 'string',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Home Page Content' }
        },
    },
})
