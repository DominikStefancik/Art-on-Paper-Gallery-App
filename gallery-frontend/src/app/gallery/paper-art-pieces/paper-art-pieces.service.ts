import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

import { PaperArtPiece } from "src/app/domain/paper-art-piece";

const PAPER_ART_PIECE_ENDPOINT = "http://localhost:3000/paper-art-piece";

@Injectable({
  providedIn: "root"
})
export class PaperArtPiecesService {

  constructor(private readonly httpClient: HttpClient) {}

  public getAllPaperArtPieces(): Observable<PaperArtPiece> {
    return this.httpClient.get<PaperArtPiece>(PAPER_ART_PIECE_ENDPOINT);
  }
}
