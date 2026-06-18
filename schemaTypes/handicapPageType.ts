import { UsersIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const handicapPageType = defineType({
  title: 'Page handicaps',
  name: 'handicapPage',
  type: 'document',
  icon: UsersIcon,
  fields: [
    defineField({
      title: 'Cartes',
      name: 'cards',
      type: 'array',
      description: 'Cartes affichées sur la page handicaps',
      of: [
        defineArrayMember({ type: 'handicapCard' }),
      ],
    }),
  ],
})
