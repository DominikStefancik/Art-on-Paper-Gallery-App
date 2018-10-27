import { Component, OnInit } from "@angular/core";
import { PaperArtPiece } from "src/app/domain/paper-art-piece";

@Component({
  selector: "app-paper-art-piece-list",
  templateUrl: "./paper-art-piece-list.component.html",
  styleUrls: ["./paper-art-piece-list.component.less"]
})
export class PaperArtPieceListComponent implements OnInit {
  paperArtPieces: PaperArtPiece[];

  constructor() {

  }

  ngOnInit() {

  }

}