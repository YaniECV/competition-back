import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const handicapType = defineType({
  title: 'Handicaps',
  name: 'handicap',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text'
    })
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
    },
    prepare({ title, tag }) {
      return {
        title: title || 'Handicap sans titre',
        subtitle: tag,
      }
    },
  },
})
