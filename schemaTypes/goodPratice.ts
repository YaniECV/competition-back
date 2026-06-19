import { UlistIcon } from "@sanity/icons";
import { defineArrayMember, defineField, defineType } from "sanity";
import { howtomake } from "./blocks/howtomake";
import { titleDescriptionType } from "./blocks/titleDescriptionType";

export const goodPratice = defineType({
    title: 'Bonnes Pratiques',
    name: 'goodPratice',
    type: 'document',
    icon: UlistIcon,
    fields: [
        defineField({
            title: 'Tag',
            name: 'tag',
            type: 'string',
            placeholder: 'Handicap Moteur',
        }),
        defineField({
            title: 'Titre',
            name: 'title',
            type: 'string',
            placeholder: 'Réserver des places',
        }),
        defineField({
            title: 'Description',
            name: 'description',
            type: 'string',
            placeholder: 'Réserver des parkings',
        }),
        defineField({
            title: 'Contenu de page',
            name: 'content',
            type: 'array',
            description: 'Ajoutez, empilez et réordonnez vos blocs de contenu',
            of: [
                defineArrayMember(howtomake),
                defineArrayMember(titleDescriptionType),
            ],
        }),
        defineField({
            title: 'Loi',
            name: 'law',
            type: 'reference',
            to: [{ type: 'law' }],
            description: 'Loi associée à cette bonne pratique',
        }),    
    ],

})