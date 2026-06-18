import { TextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const titleDescriptionType = defineType({
  title: 'Titre/Description',
  name: 'titleDescription',
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
      type: 'array', 
      of: [
        { type: 'block' }
      ]
    })
  ]
})
