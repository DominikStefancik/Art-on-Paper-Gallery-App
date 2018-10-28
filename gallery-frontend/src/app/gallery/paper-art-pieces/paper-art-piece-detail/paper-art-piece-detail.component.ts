import { Component, OnInit } from "@angular/core";
import { PaperArtPiece } from "src/app/domain/paper-art-piece";
import { PaperArtPiecesService } from "../paper-art-pieces.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-paper-art-piece-detail",
  templateUrl: "./paper-art-piece-detail.component.html",
  styleUrls: ["./paper-art-piece-detail.component.less"]
})
export class PaperArtPieceDetailComponent implements OnInit {
  paperArtPiece: PaperArtPiece;

  constructor(private readonly activatedRoute: ActivatedRoute,
              private readonly paperArtPiecesService: PaperArtPiecesService) { }

  ngOnInit() {
    this.activatedRoute.data
      .subscribe((data: { paperArtPieceDetail: PaperArtPiece}) => {
        this.paperArtPiece = data.paperArtPieceDetail;
        console.log(this.paperArtPiece);
      });
  }

  public getPicture(pictureId) {
    return this.paperArtPiecesService.getPaperArtPictureUrl(pictureId);
  }

}
