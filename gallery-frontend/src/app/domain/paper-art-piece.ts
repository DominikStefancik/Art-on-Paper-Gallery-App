import { PaperArtCategory } from "./paper-art-category";
import { PaperArtTechnique } from "./paper-art-technique";

export interface PaperArtPiece {
  id: string;
  name: string;
  author: string[];
  authorFullString: string;
  description: string;
  creationDate: string;
  century: number;
  materialTechnique: string;
  gettyAAT: PaperArtTechnique[];
  measurements: string;
  pictureFile: string;
  category: PaperArtCategory;
  artPieceOwner: string;
}
