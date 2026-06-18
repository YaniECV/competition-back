import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const handicapType = defineType({
  title: 'Handicaps',
  name: 'handicap',
  type: 'document',
  icon: UserIcon,
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
    }),
    defineField({
      title: 'H2',
      name: 'h2',
      type: 'string',
      description: 'Sous-titre affiché sous le titre principal',
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      title: 'Bonnes pratiques',
      name: 'bonnesPratiques',
      type: 'array',
      description: 'Liste des bonnes pratiques liées, redirigeant vers leurs pages dédiées',
      of: [
        defineArrayMember({
          type: 'reference',
          to: [{ type: 'bonnePratique' }],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      tag: 'tag',
    },
    prepare({ title, tag }) {
      return {
        title: title || 'Handicap sans titre',
        subtitle: tag,
      }
    },
  },
})
