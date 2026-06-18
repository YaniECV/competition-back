import { UserIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { commRulesType } from "./blocks/commRulesType";
import { titleDescriptionType } from "./blocks/titleDescriptionType";
import { goodPracticeReferencesType } from "./blocks/goodPracticeReferencesType";
import { lawReferencesType } from "./blocks/lawReferencesType";

export const handicapType = defineType({
  title: 'Handicaps',
  name: 'handicap',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      title: 'Titre',
      name: 'title',
      type: 'string'
    }),
    defineField({
      title: 'Slug',
      name: 'slug',
      type: 'string'
    }),
    defineField({
      title: 'Description',
      name: 'description',
      type: 'array',
      of: [
        { type: 'block' }
      ]
    }),
    defineField({
      title: 'Contenu de page',
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember(commRulesType),
        defineArrayMember(titleDescriptionType),
        defineArrayMember(goodPracticeReferencesType),
        defineArrayMember(lawReferencesType)
      ]
    })
  ]
})
