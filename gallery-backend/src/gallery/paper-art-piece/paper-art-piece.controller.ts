import { Controller, Get, Response, Param, Query } from "@nestjs/common";

import { PaperArtPieceService } from "./paper-art-piece.service";
import { PaperArtPiece } from "domain/paper-art-piece";
import { PaperArtAssociationCategory } from "domain/paper-art-association-category";

@Controller("paper-art-piece")
export class PaperArtPieceController {

  constructor(private readonly paperArtPiecesService: PaperArtPieceService) {}

  @Get()
  public getAllPaperArtPieces(): PaperArtPiece[] {
    return this.paperArtPiecesService.getAllPaperArtPieces();
  }

  @Get(":paperArtPieceId")
  public getPaperArtPiece(@Param("paperArtPieceId") paperArtPieceId): PaperArtPiece {
    return this.paperArtPiecesService.getPaperArtPiece(paperArtPieceId);
  }

  @Get(":paperArtPieceId/picture")
  public getPaperArtPiecePicture(@Param("paperArtPieceId") paperArtPieceId, @Response() response): any {
    response.send(this.paperArtPiecesService.getPaperArtPiecePicture(paperArtPieceId));
  }

  @Get(":paperArtPieceId/associations")
  public getAssociatedPaperArtPieces(
    @Param("paperArtPieceId") paperArtPieceId,
    @Query() query): PaperArtPiece[] {
    let associatedPaperArtPieces: PaperArtPiece[];

    switch (query.category) {
      case PaperArtAssociationCategory.Author:
        associatedPaperArtPieces = this.paperArtPiecesService.getAssociatedPaperArtPiecesByAuthor(paperArtPieceId);
        break;
      case PaperArtAssociationCategory.Century:
        associatedPaperArtPieces = this.paperArtPiecesService.getAssociatedPaperArtPiecesByCentury(paperArtPieceId);
        break;
      case PaperArtAssociationCategory.Technique:
        associatedPaperArtPieces = this.paperArtPiecesService.getAssociatedPaperArtPiecesByTechnique(paperArtPieceId);
        break;
      default:
        break;
    }
    return associatedPaperArtPieces;
  }
}
