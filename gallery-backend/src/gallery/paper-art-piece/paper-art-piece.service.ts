import { Injectable } from "@nestjs/common";
import * as fs from "fs";
import * as path from "path";

@Injectable()
export class PaperArtPieceService {

  private cache: JSON;

  public getArtPiecesMetadata(): JSON {
    if (this.cache == null) {
      this.getArtPiecesFromFile();
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

  private getArtPiecesFromFile(): void  {
    const filePath = path.join(__dirname, "../../../resources/paper_art_items.json");
    this.cache = JSON.parse(fs.readFileSync(filePath, "utf-8"));
  }
}
