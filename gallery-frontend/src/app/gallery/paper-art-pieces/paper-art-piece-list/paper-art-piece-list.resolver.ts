import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { PaperArtPiecesService } from "../paper-art-pieces.service";
import { PaperArtPiece } from "src/app/domain/paper-art-piece";

@Injectable()
export class PaperArtPieceListResolver implements Resolve<PaperArtPiece> {
  constructor(private paperArtPiecesService: PaperArtPiecesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaperArtPiece> {
    return this.paperArtPiecesService.getAllPaperArtPieces();
  }
}
