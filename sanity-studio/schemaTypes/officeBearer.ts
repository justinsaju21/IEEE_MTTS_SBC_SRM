import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'officeBearer',
    title: 'Office Bearer',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Full Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'role',
            title: 'Role',
            type: 'string',
            options: {
                list: [
                    { title: 'Chair', value: 'Chair' },
                    { title: 'Vice Chair', value: 'Vice Chair' },
                    { title: 'Secretary', value: 'Secretary' },
                    { title: 'Treasurer', value: 'Treasurer' },
                    { title: 'Webmaster', value: 'Webmaster' },
                    { title: 'Faculty Advisor', value: 'Faculty Advisor – IEEE MTT-S SBC' },
                    { title: 'Branch Counselor', value: 'IEEE SRM Student Branch Counselor' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'department',
            title: 'Department',
            type: 'string',
            initialValue: 'Electronics and Communication Engineering',
        }),
        defineField({
            name: 'bio',
            title: 'Bio',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'photo',
            title: 'Photo',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'type',
            title: 'Member Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Faculty', value: 'faculty' },
                    { title: 'Student', value: 'student' },
                ],
            },
            initialValue: 'student',
        }),
        defineField({
            name: 'order',
            title: 'Display Order',
            type: 'number',
            description: 'Lower numbers appear first (Chair = 1, Vice Chair = 2, etc.)',
        }),
        defineField({
            name: 'isActive',
            title: 'Currently Active?',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: {
            title: 'name',
            subtitle: 'role',
            media: 'photo',
        },
    },
    orderings: [
        {
            title: 'Display Order',
            name: 'orderAsc',
            by: [{ field: 'order', direction: 'asc' }],
        },
    ],
})
