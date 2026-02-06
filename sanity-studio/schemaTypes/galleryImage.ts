import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'galleryImage',
    title: 'Gallery Image',
    type: 'document',
    fields: [
        defineField({
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'caption',
            title: 'Caption',
            type: 'string',
        }),
        defineField({
            name: 'event',
            title: 'Related Event',
            type: 'reference',
            to: [{ type: 'event' }],
        }),
        defineField({
            name: 'category',
            title: 'Category',
            type: 'string',
            options: {
                list: [
                    { title: 'Inauguration', value: 'inauguration' },
                    { title: 'Workshop', value: 'workshop' },
                    { title: 'Guest Lecture', value: 'guest-lecture' },
                    { title: 'Competition', value: 'competition' },
                    { title: 'Outreach', value: 'outreach' },
                    { title: 'Team', value: 'team' },
                    { title: 'Other', value: 'other' },
                ],
            },
        }),
        defineField({
            name: 'dateTaken',
            title: 'Date Taken',
            type: 'date',
        }),
    ],
    preview: {
        select: {
            title: 'caption',
            subtitle: 'category',
            media: 'image',
        },
    },
})
