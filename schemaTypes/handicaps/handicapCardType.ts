import { defineField, defineType } from "sanity";

export const handicapCardType = defineType({
  title: 'Carte',
  name: 'handicapCard',
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
      rows: 3,
    }),
    defineField({
      title: 'Handicap',
      name: 'handicap',
      type: 'reference',
      to: [{ type: 'handicap' }],
      description: 'Lien vers la page détail du handicap',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description',
    },
    prepare({ title, description }) {
      return {
        title: title || 'Carte sans titre',
        subtitle: description,
      }
    },
  },
})
