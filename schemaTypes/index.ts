import { lawBlockType } from "./lois/lawBlockType";
import { lawType } from "./lawType";
import { goodPracticeSectionType } from "./bonnesPratiques/goodPracticeSectionType";
import { goodPracticeBlockType } from "./bonnesPratiques/goodPracticeBlockType";
import { goodPracticeType } from "./goodPracticeType";
import { handicapCardType } from "./handicaps/handicapCardType";
import { handicapType } from "./handicapType";
import { handicapPageType } from "./handicapPageType";

export const schemaTypes = [
  handicapPageType,
  handicapType,
  lawType,
  goodPracticeType,
  lawBlockType,
  goodPracticeSectionType,
  goodPracticeBlockType,
  handicapCardType,
]
