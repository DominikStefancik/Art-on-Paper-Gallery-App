import { Controller, Get } from "@nestjs/common";
import { PaperArtPieceService } from "./paper-art-piece.service";

@Controller("paper-art-piece")
export class PaperArtPieceController {

  constructor(private readonly paperArtPiecesService: PaperArtPieceService) {}

  @Get()
  public getArtPiecesMetadata(): string {
    return this.paperArtPiecesService.getArtPiecesMetadata();
  }
}
