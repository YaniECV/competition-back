import { defineArrayMember, defineField, defineType } from "sanity";

const previewImageUrl = (schemaTypeName: string) => `/static/preview-${schemaTypeName}.png`

export const bonnePratiqueType = defineType({
  title: 'Bonnes pratiques',
  name: 'bonnePratique',
  type: 'document',
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
      placeholder: 'Mes bonnes pratiques',
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
      description: 'Bloc regroupant les sections de bonnes pratiques',
      of: [
        defineArrayMember({ type: 'bonnePratiqueBlock' }),
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
