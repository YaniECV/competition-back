import { BlockElementIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const introType = defineType({
  title: 'Intro',
  name: 'intro',
  type: 'object',
  icon: BlockElementIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    })
  ],
})
