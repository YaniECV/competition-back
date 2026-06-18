import { defineField, defineType } from "sanity";

export const goodPracticeSectionType = defineType({
  title: 'Section',
  name: 'goodPracticeSection',
  type: 'object',
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title || 'Section sans titre',
        subtitle: description,
      }
    },
  },
})
