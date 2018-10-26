import { Module } from "@nestjs/common";
import { PaperArtPieceModule } from "./paper-art-piece/paper-art-piece.module";

@Module({
  imports: [PaperArtPieceModule],
})
export class GalleryModule {}
