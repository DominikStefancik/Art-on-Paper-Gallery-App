import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

import { PaperArtItemMapper } from "util/paper-art-item-mapper";
import { PaperArtPiece } from "domain/paper-art-piece";

@Injectable()
export class PaperArtPieceService {
  private cache: PaperArtPiece[];

  constructor(private paperArtItemMapper: PaperArtItemMapper) {}

  public getArtPiecesMetadata(): PaperArtPiece[] {
    if (this.cache === null) {
      this.cache = this.getArtPiecesFromFile();
    }

    return this.cache;
  }

  public getArtPiecePicture(pictureName: string): Buffer {
    const picturePath = path.join(
      __dirname,
      `../../../resources/paper_art_items-pictures/${pictureName}`
    );

    return fs.readFileSync(picturePath);
  }

  private getArtPiecesFromFile(): PaperArtPiece[]  {
    const filePath = path.join(__dirname, "../../../resources/paper_art_items.json");
    const paperArtItems = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return paperArtItems.map(this.paperArtItemMapper.mapToPaperArtPiece);
  }
}
