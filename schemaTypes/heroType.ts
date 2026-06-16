import { DesktopIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const heroType = defineType({
  title: 'Hero',
  name: 'hero',
  type: 'object',
  icon: DesktopIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    })
  ],
})
