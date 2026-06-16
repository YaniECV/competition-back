import { defineArrayMember, defineField, defineType } from "sanity";

const previewImageUrl = (schemaTypeName: string) => `/static/preview-${schemaTypeName}.png`

export const articleType = defineType({
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    defineField({
      title: 'Contenu de page',
      name: 'pageContent',
      type: 'array',
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
  ],
})
