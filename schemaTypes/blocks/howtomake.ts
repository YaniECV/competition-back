import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const howtomake = defineType({
  title: 'How to make',
  name: 'howtomake',
  type: 'object',
  icon: TextIcon,
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
  ]
})
