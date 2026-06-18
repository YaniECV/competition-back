import { UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { goodPracticeType } from "../goodPracticeType";

export const goodPracticeReferencesType = defineType({
  title: 'Bonnes pratiques',
  name: 'goodPracticeReferences',
  type: 'object',
  icon: UlistIcon,
  fields: [
    defineField({
      title: 'Bonnes pratiques à référencer',
      name: 'goodPractices',
      type: 'array',
      of: [
        defineArrayMember({ type: 'reference', to: goodPracticeType })
      ]
    })
  ]
})
