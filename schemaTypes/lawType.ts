import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

const previewImageUrl = (schemaTypeName: string) => `/static/preview-${schemaTypeName}.png`

export const lawType = defineType({
  title: 'Lois',
  name: 'law',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Tag',
      name: 'tag',
      type: 'string',
      description: 'Étiquette affichée au-dessus du titre',
    }),
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string',
      placeholder: 'Mes lois',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 3,
      description: 'Texte affiché sous le titre',
    }),
    defineField({
      title: 'Contenu de page',
      name: 'content',
      type: 'array',
      description: 'Ajoutez, empilez et réordonnez vos blocs de lois comme vous le souhaitez',
      of: [
        defineArrayMember({ type: 'lawBlock' }),
      ],
      options: {
        insertMenu: {
          views: [
            { name: 'grid', previewImageUrl },
            { name: 'list' },
          ],
        },
      },
    }),
  ],
})
