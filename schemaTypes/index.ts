import { lawBlockType } from "./lois/lawBlockType";
import { lawType } from "./lawType";
import { goodPracticeSectionType } from "./bonnesPratiques/goodPracticeSectionType";
import { goodPracticeBlockType } from "./bonnesPratiques/goodPracticeBlockType";
import { goodPracticeType } from "./goodPracticeType";
import { goodPratice } from "./goodPratice";
import { handicapCardType } from "./handicaps/handicapCardType";
import { handicapType } from "./handicapType";
import { handicapPageType } from "./handicapPageType";
import { howtomake } from "./blocks/howtomake";
import { titleDescriptionType } from "./blocks/titleDescriptionType";
import { goodPracticeReferencesType } from "./blocks/goodPracticeReferencesType";

export const schemaTypes = [
  handicapPageType,
  handicapType,
  lawType,
  goodPracticeType,
  goodPratice,
  lawBlockType,
  goodPracticeSectionType,
  goodPracticeBlockType,
  handicapCardType,
  howtomake,
  titleDescriptionType,
  goodPracticeReferencesType,
]
