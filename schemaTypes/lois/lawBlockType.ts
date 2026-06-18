import { BookIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const lawBlockType = defineType({
  title: 'Loi',
  name: 'lawBlock',
  type: 'object',
  icon: BookIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Paragraphe',
      name: 'paragraph',
      type: 'text',
      rows: 4,
    }),
    defineField({
      title: 'Nom de la loi',
      name: 'lawTag',
      type: 'string',
      description: 'Référence précise de la loi (ex. : Loi n° 2024-123 du 15 mars 2024)',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      lawTag: 'lawTag',
    },
    prepare({ title, lawTag }) {
      return {
        title: title || 'Loi sans titre',
        subtitle: lawTag,
      }
    },
  },
})
