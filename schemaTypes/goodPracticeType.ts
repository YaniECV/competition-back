import { UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { goodPracticeReferencesType } from "./blocks/goodPracticeReferencesType";

const previewImageUrl = (schemaTypeName: string) => `/static/preview-${schemaTypeName}.png`

export const goodPracticeType = defineType({
  title: 'Page « Bonnes pratiques »',
  name: 'goodPractice',
  type: 'document',
  icon: UlistIcon,
  options: {
    singleton: true
  },
  fields: [
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

        defineArrayMember(goodPracticeReferencesType),
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
