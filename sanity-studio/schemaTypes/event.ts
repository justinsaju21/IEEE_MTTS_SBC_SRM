import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Event Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'date',
            title: 'Event Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'venue',
            title: 'Venue',
            type: 'string',
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 4,
        }),
        defineField({
            name: 'coverImage',
            title: 'Cover Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'status',
            title: 'Status',
            type: 'string',
            options: {
                list: [
                    { title: 'Upcoming', value: 'upcoming' },
                    { title: 'Past', value: 'past' },
                ],
            },
            initialValue: 'upcoming',
        }),
        defineField({
            name: 'registrationLink',
            title: 'Registration Link',
            type: 'url',
            description: 'Optional link for event registration',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
            media: 'coverImage',
        },
    },
    orderings: [
        {
            title: 'Date (Newest)',
            name: 'dateDesc',
            by: [{ field: 'date', direction: 'desc' }],
        },
    ],
})
