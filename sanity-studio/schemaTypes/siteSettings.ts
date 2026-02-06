import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'siteSettings',
    title: 'Site Settings',
    type: 'document',
    fields: [
        defineField({
            name: 'siteName',
            title: 'Site Name',
            type: 'string',
            initialValue: 'IEEE MTT-S SBC SRM',
        }),
        defineField({
            name: 'tagline',
            title: 'Tagline',
            type: 'string',
            initialValue: 'Microwave Theory and Technology Society Student Branch Chapter',
        }),
        defineField({
            name: 'email',
            title: 'Official Email',
            type: 'string',
        }),
        defineField({
            name: 'instagramHandle',
            title: 'Instagram Handle',
            type: 'string',
        }),
        defineField({
            name: 'instagramUrl',
            title: 'Instagram URL',
            type: 'url',
        }),
        defineField({
            name: 'linkedinUrl',
            title: 'LinkedIn URL',
            type: 'url',
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
            rows: 3,
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Site Settings' }
        },
    },
})
