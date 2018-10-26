import { Controller, Get, Response, Param } from "@nestjs/common";

import { PaperArtPieceService } from "./paper-art-piece.service";
import { PaperArtPiece } from "domain/paper-art-piece";

@Controller("paper-art-piece")
export class PaperArtPieceController {

  constructor(private readonly paperArtPiecesService: PaperArtPieceService) {}

  @Get()
  public getArtPiecesMetadata(): PaperArtPiece[] {
    return this.paperArtPiecesService.getArtPiecesMetadata();
  }

  @Get(":artPieceId/picture")
  public getArtPiecePicture(@Param("artPieceId") artPieceId, @Response() response): any {
    response.send(this.paperArtPiecesService.getArtPiecePicture(artPieceId));
  }
}
