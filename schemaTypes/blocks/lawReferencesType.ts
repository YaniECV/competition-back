import { DocumentTextIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { lawTypePage } from "../lawTypePage";

export const lawReferencesType = defineType({
  title: 'Lois',
  name: 'lawReferences',
  type: 'object',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      title: 'Lois à référencer',
      name: 'laws',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: lawTypePage })
      ]
    })
  ]
})
