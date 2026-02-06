import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'navigation',
    title: 'Navigation',
    type: 'document',
    fields: [
        defineField({
            name: 'navItems',
            title: 'Navigation Items',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        { name: 'label', title: 'Label', type: 'string' },
                        { name: 'href', title: 'Link URL', type: 'string' },
                        { name: 'order', title: 'Order', type: 'number' },
                    ],
                },
            ],
        }),
        defineField({
            name: 'ctaButton',
            title: 'CTA Button (optional)',
            type: 'object',
            fields: [
                { name: 'label', title: 'Label', type: 'string' },
                { name: 'href', title: 'Link URL', type: 'string' },
            ],
        }),
    ],
    preview: {
        prepare() {
            return { title: 'Navigation Menu' }
        },
    },
})
