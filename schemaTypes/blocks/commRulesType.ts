import { MicrophoneIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";

export const commRulesType = defineType({
  title: 'Règles de communication',
  name: 'commRules',
  type: 'object',
  icon: MicrophoneIcon,
  fields: [
    defineField({
      title: 'Règles',
      name: 'rules',
      type: 'array',
      of: [
        defineArrayMember({ type: 'string' })
      ]
    })
  ]
})
