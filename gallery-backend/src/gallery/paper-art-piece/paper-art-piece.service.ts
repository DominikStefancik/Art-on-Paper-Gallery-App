import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

import { PaperArtItemMapper } from "util/paper-art-item-mapper";
import { PaperArtPiece } from "domain/paper-art-piece";
import { PaperArtAssociationCategory } from "domain/paper-art-association-category";
import { PaperArtTechnique } from "domain/paper-art-technique";

@Injectable()
export class PaperArtPieceService {
  private cache: PaperArtPiece[];

  constructor(private paperArtItemMapper: PaperArtItemMapper) {}

  public getAllPaperArtPieces(): PaperArtPiece[] {
    if (this.cache == null) {
      this.cache = this.getArtPiecesFromFile();
    }

    return this.cache;
  }

  public getPaperArtPiece(paperArtPieceId: string): PaperArtPiece {
    return this.getPaperArtPieceFromCache(paperArtPieceId);
  }

  public getPaperArtPiecePicture(paperArtPieceId: string): Buffer {
    const foundPaperArtPiece = this.getPaperArtPieceFromCache(paperArtPieceId);
    const pictureFileName = foundPaperArtPiece.pictureFile;

    const picturePath = path.join(
      __dirname,
      `../../../resources/paper_art_items-pictures/${pictureFileName}`,
    );

    return fs.readFileSync(picturePath);
  }

  public getAssociatedPaperArtPiecesByAuthor(paperArtPieceId: string): PaperArtPiece[] {
      const foundPaperArtPiece = this.getPaperArtPieceFromCache(paperArtPieceId);

      if (!foundPaperArtPiece) {
        return null;
      }

      const author = foundPaperArtPiece[PaperArtAssociationCategory.Author];

      return this.cache.filter((paperArtPiece: PaperArtPiece) => {
        return paperArtPiece.id !== paperArtPieceId && paperArtPiece.author === author;
      });
  }

  public getAssociatedPaperArtPiecesByCentury(paperArtPieceId: string): PaperArtPiece[] {
    const foundPaperArtPiece = this.getPaperArtPieceFromCache(paperArtPieceId);

    if (!foundPaperArtPiece) {
      return null;
    }

    const century = foundPaperArtPiece[PaperArtAssociationCategory.Century];

    return this.cache.filter((paperArtPiece: PaperArtPiece) => {
      return paperArtPiece.id !== paperArtPieceId && paperArtPiece.century === century;
    });
  }

  public getAssociatedPaperArtPiecesByTechnique(paperArtPieceId: string): PaperArtPiece[] {
    const foundPaperArtPiece = this.getPaperArtPieceFromCache(paperArtPieceId);

    if (!foundPaperArtPiece) {
      return null;
    }

    // "techniques" is an array
    const techniques = foundPaperArtPiece[PaperArtAssociationCategory.Technique];
    const associatedPaperArtPieces: PaperArtPiece[] = [];

    techniques.forEach((technique: PaperArtTechnique) => {
      const foundAssociations = this.cache.filter((paperArtPiece: PaperArtPiece) => {
        return paperArtPiece.id !== paperArtPieceId
            && paperArtPiece.gettyAAT.indexOf(technique) !== -1;
      });

      associatedPaperArtPieces.push(...foundAssociations);
    });

    return associatedPaperArtPieces;
  }

  private getArtPiecesFromFile(): PaperArtPiece[]  {
    const filePath = path.join(__dirname, "../../../resources/paper_art_items.json");
    const paperArtItems = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    return paperArtItems.map(this.paperArtItemMapper.mapToPaperArtPiece);
  }

  private getPaperArtPieceFromCache(paperArtPieceId: string): PaperArtPiece {
    if (this.cache == null) {
      this.cache = this.getArtPiecesFromFile();
    }

    return this.cache.find((paperArtPiece: PaperArtPiece) => {
      return paperArtPiece.id === paperArtPieceId;
    });
  }
}
