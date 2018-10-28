import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

import { PaperArtPiecesService } from "../paper-art-pieces.service";
import { PaperArtPiece } from "src/app/domain/paper-art-piece";

@Injectable()
export class PaperArtPieceDetailResolver implements Resolve<PaperArtPiece> {
  constructor(private paperArtPiecesService: PaperArtPiecesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<PaperArtPiece> {
    const id = route.params.paperArtPieceId;
    return this.paperArtPiecesService.getPaperArtPiece(id);
  }
}
