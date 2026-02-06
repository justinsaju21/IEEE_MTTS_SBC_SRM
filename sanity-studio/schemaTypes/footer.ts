import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'footer',
    title: 'Footer',
    type: 'document',
    fields: [
        defineField({
            name: 'copyrightText',
            title: 'Copyright Text',
            type: 'string',
            initialValue: '© 2026 IEEE MTT-S SBC SRM. All rights reserved.',
        }),
        defineField({
            name: 'quickLinks',
            title: 'Quick Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'href', title: 'Link URL', type: 'string' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'object',
            fields: [
                { name: 'instagram', title: 'Instagram URL', type: 'url' },
                { name: 'linkedin', title: 'LinkedIn URL', type: 'url' },
                { name: 'email', title: 'Email', type: 'string' },
            ],
        }),
        defineField({
            name: 'tagline',
            title: 'Footer Tagline',
            type: 'string',
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Footer Content' }
        },
    },
})
