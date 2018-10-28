import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DataViewModule } from "primeng/dataview";
import { PanelModule } from "primeng/panel";
import { DialogModule } from "primeng/dialog";

import { GalleryComponent } from "./gallery.component";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { PaperArtPieceListComponent } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.component";
import { PaperArtPiecesService } from "./paper-art-pieces/paper-art-pieces.service";


@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule,
    DataViewModule,
    PanelModule,
    DialogModule
  ],
  declarations: [
    GalleryComponent,
    PaperArtPieceListComponent
  ],
  providers: [
    PaperArtPiecesService
  ]
})
export class GalleryModule {}
