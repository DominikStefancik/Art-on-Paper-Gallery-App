import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PaperArtPieceListComponent } from "./paper-art-piece-list/paper-art-piece-list.component";
import { PaperArtPieceDetailComponent } from './paper-art-piece-detail/paper-art-piece-detail.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    PaperArtPieceListComponent,
    PaperArtPieceDetailComponent
  ],
  providers: [

  ]
})
export class PaperArtPiecesModule { }
