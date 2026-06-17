import { defineArrayMember, defineField, defineType } from "sanity";

const previewImageUrl = (schemaTypeName: string) => `/static/preview-${schemaTypeName}.png`

export const articleType = defineType({
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string',
      placeholder: 'Mon article'
    }),
    defineField({
      title: 'Contenu de page',
      name: 'content',
      type: 'array',
      description: 'Ajoutez, empilez et réordonnez vos blocs de contenu comme vous le souhaitez',
      of: [
        defineArrayMember({ type: 'intro' }),
        defineArrayMember({ type: 'hero' })
      ],
      options: {
        insertMenu: {
          views: [
            { name: 'grid', previewImageUrl },
            { name: 'list' }
          ]
        }
      }
    })
  ]
})
