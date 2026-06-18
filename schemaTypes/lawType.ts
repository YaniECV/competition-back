import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const lawType = defineType({
  title: 'Lois',
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
    defineField({
      title: 'Référence',
      name: 'reference',
      type: 'string'
    }),
    defineField({
      title: 'Contenu de page',
      name: 'content',
      type: 'array',
      description: 'Ajoutez, empilez et réordonnez vos blocs de lois comme vous le souhaitez',
      of: [
        defineArrayMember({ type: 'lawBlock' }),
      ],
    }),
  ],
})
