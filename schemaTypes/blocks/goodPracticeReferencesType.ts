import { UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const goodPracticeReferencesType = defineType({
  title: 'Bonnes pratiques',
  name: 'goodPracticeReferences',
  type: 'object',
  icon: UlistIcon,
  fields: [
    defineField({
      title: 'Pages bonnes pratiques',
      name: 'goodPractices',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: [{ type: 'goodPratice' }] })
      ]
    })
  ]
})
