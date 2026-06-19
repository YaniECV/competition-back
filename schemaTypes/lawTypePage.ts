import { DocumentTextIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const lawTypePage = defineType({
  title: 'Page « Lois »',
  name: 'law',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3
    }),
  ],
})
