import { Module } from "@nestjs/common";
import { PaperArtPieceController } from "./paper-art-piece.controller";
import { PaperArtPieceService } from "./paper-art-piece.service";

@Module({
  controllers: [PaperArtPieceController],
  providers: [PaperArtPieceService],
})
export class PaperArtPieceModule {}
