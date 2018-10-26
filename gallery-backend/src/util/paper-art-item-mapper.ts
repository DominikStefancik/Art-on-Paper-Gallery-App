import { Injectable } from "@nestjs/common";
import * as uuid from "uuid/v1";

import { PaperArtCategory } from "domain/paper-art-category";
import { PaperArtTechnique } from "domain/paper-art-technique";
import { PaperArtPiece } from "domain/paper-art-piece";

const CATEGORY = {
  Handzeichnung: PaperArtCategory.Drawing,
  Druckgraphik: PaperArtCategory.Print,
};

const GETTY_AAT = {
  "Aquarell": PaperArtTechnique.Watercolour,
  "Aquatinta": PaperArtTechnique.Aquatint,
  "aufgezogen": PaperArtTechnique.Mounted,
  "Bleistift": PaperArtTechnique.Pencil,
  "Bleiweiss": PaperArtTechnique.White_lead,
  "Chiaroscuroschnitt": PaperArtTechnique.Chiaroscuro_woodcuts,
  "Chinapapier": PaperArtTechnique.China_paper,
  "Deckfarbe": PaperArtTechnique.Opaque_color,
  "dubliert": PaperArtTechnique.Backed,
  "Feder": PaperArtTechnique.Pen,
  "Federlithographie": PaperArtTechnique.Litho_pen_drawing,
  "gehöht": PaperArtTechnique.Heightened,
  "Gouache": PaperArtTechnique.Gouache,
  "grundiert": PaperArtTechnique.Priming,
  "Halbkarton": PaperArtTechnique.Thin_cardboard,
  "Holzschnitt": PaperArtTechnique.Woodcut,
  "Japanpapier": PaperArtTechnique.Japan_paper,
  "Kaltnadel": PaperArtTechnique.Drypoint,
  "Karton": PaperArtTechnique.Cardboard,
  "koloriert": PaperArtTechnique.Coloured,
  "Kreidelithographie": PaperArtTechnique.Chalk_lithography,
  "Kupfer": PaperArtTechnique.Copper,
  "Kupferplatte": PaperArtTechnique.Copperplate,
  "Kupferstich": PaperArtTechnique.Engraving,
  "laviert": PaperArtTechnique.Washed,
  "Lithographie": PaperArtTechnique.Lithography,
  "Papier": PaperArtTechnique.Paper,
  "Papier vergé": PaperArtTechnique.Hand_made_paper,
  "Pinsel": PaperArtTechnique.Brush,
  "Radierung": PaperArtTechnique.Etching,
  "Reiberdruck": PaperArtTechnique.Handprinting,
  "Roulette": PaperArtTechnique.Roulette,
  "Velin": PaperArtTechnique.Wove_paper,
  "Weisslinienholzschnitt": PaperArtTechnique.White_line_engraving,
  "Farblithographie": PaperArtTechnique.Color_lithography,
  "Kreide": PaperArtTechnique.Chalk,
  "Letterndruck": PaperArtTechnique.Letterpress_printing,
  "Rötel": PaperArtTechnique.Red_chalk,
  "handkoloriert": PaperArtTechnique.Coloured,
};

const PROPERTY_KUENSTLER = "Kuenstler";
const PROPERTY_KUENSTLER_KURZ = "Kuenstler_kurz";
const PROPERTY_TITEL = "Titel";
const PROPERTY_ZUSATZ = "Zusatz";
const PROPERTY_DATIERUNG = "Datierung";
const PROPERTY_MATERIAL_TECHNIK = "Material_Technik";
const PROPERTY_MASSANGABEN = "Massangaben";
const PROPERTY_BILDCODE = "Bildcode";
const PROPERTY_GATTUNG = "Gattung";
const PROPERTY_GETTY_AAT = "Getty_AAT";

@Injectable()
export class PaperArtItemMapper {

  mapToPaperArtPiece(paperArtItem: any): PaperArtPiece {
    return {
      id: uuid(),
      name: paperArtItem[PROPERTY_TITEL],
      author: PaperArtItemMapper.prototype.getAuthorList(paperArtItem[PROPERTY_KUENSTLER_KURZ]),
      authorFullString: paperArtItem[PROPERTY_KUENSTLER],
      description: paperArtItem[PROPERTY_ZUSATZ],
      creationDate: paperArtItem[PROPERTY_DATIERUNG],
      materialTechnique: paperArtItem[PROPERTY_MATERIAL_TECHNIK],
      gettyAAT: PaperArtItemMapper.prototype.getGettyAATList(paperArtItem[PROPERTY_GETTY_AAT]),
      measurements: paperArtItem[PROPERTY_MASSANGABEN],
      pictureFile: paperArtItem[PROPERTY_BILDCODE],
      category: CATEGORY[paperArtItem[PROPERTY_GATTUNG]],
    };
  }

  private getGettyAATList(propertyString: string): PaperArtTechnique[] {
    if (!propertyString) {
      return null;
    }

    return propertyString.split(",")
      .map((item: string) => item.trim())
      .map((item: string) => GETTY_AAT[item]);
  }

  private getAuthorList(authorString: string): string[] {
    if (!authorString) {
      return null;
    }

    return authorString.split(",")
      .map((item: string) => item.trim());
  }
}