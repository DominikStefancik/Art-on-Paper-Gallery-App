import { Controller, Get, Response, Param } from "@nestjs/common";

import { PaperArtPieceService } from "./paper-art-piece.service";
import { PaperArtPiece } from "domain/paper-art-piece";

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
}
