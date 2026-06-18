import { heroType } from "./blocks/heroType";
import { introType } from "./blocks/introType";
import { loiBlockType } from "./lois/loiBlockType";
import { loiType } from "./loiType";
import { bonnePratiqueSectionType } from "./bonnesPratiques/bonnePratiqueSectionType";
import { bonnePratiqueBlockType } from "./bonnesPratiques/bonnePratiqueBlockType";
import { bonnePratiqueType } from "./bonnePratiqueType";
import { handicapCardType } from "./handicaps/handicapCardType";
import { handicapType } from "./handicapType";
import { handicapPageType } from "./handicapPageType";

export const schemaTypes = [
  handicapPageType,
  handicapType,
  loiType,
  bonnePratiqueType,
  introType,
  heroType,
  loiBlockType,
  bonnePratiqueSectionType,
  bonnePratiqueBlockType,
  handicapCardType,
]
