import { ThumbsUpIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const bonnePratiqueBlockType = defineType({
  title: 'Bonnes pratiques',
  name: 'bonnePratiqueBlock',
  type: 'object',
  icon: ThumbsUpIcon,
  fields: [
    defineField({
      title: 'Sections',
      name: 'sections',
      type: 'array',
      description: 'Ajoutez et réordonnez les sections de bonnes pratiques',
      of: [
        defineArrayMember({ type: 'bonnePratiqueSection' }),
      ],
    }),
  ],
  preview: {
    select: {
      sections: 'sections',
    },
    prepare({ sections }) {
      const count = sections?.length ?? 0
      return {
        title: 'Bonnes pratiques',
        subtitle: `${count} section${count > 1 ? 's' : ''}`,
      }
    },
  },
})
