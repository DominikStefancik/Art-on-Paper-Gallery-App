import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

import { PaperArtPiece } from "src/app/domain/paper-art-piece";
import { PaperArtPiecesService } from "../paper-art-pieces.service";
@Component({
  selector: "app-paper-art-piece-list",
  templateUrl: "./paper-art-piece-list.component.html",
  styleUrls: ["./paper-art-piece-list.component.less"]
})
export class PaperArtPieceListComponent implements OnInit {
  paperArtPieces: PaperArtPiece[];

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly paperArtPiecesService: PaperArtPiecesService) {}

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: { paperArtPieceList: PaperArtPiece[]}) => {
        this.paperArtPieces = data.paperArtPieceList;
      });
  }

  public getPicture(pictureId) {
    return this.paperArtPiecesService.getPaperArtPictureUrl(pictureId);
  }
}
