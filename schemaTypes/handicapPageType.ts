import { DesktopIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { titleDescriptionType } from "./blocks/titleDescriptionType";

export const handicapPageType = defineType({
  title: 'Page « Handicaps »',
  name: 'handicapPage',
  type: 'document',
  icon: DesktopIcon,
  options: {
    singleton: true
  },
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'text'
    })
  ],
})
