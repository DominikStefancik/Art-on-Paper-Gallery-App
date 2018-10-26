import { Module } from "@nestjs/common";
import { PaperArtPieceController } from "./paper-art-piece.controller";
import { PaperArtPieceService } from "./paper-art-piece.service";
import { PaperArtItemMapper } from "util/paper-art-item-mapper";

@Module({
  controllers: [PaperArtPieceController],
  providers: [PaperArtPieceService, PaperArtItemMapper],
})
export class PaperArtPieceModule {}
