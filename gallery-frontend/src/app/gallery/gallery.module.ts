import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { GalleryComponent } from "./gallery.component";
import { GalleryRoutingModule } from "./gallery-routing.module";
import { PaperArtPieceListComponent } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.component";

@NgModule({
  imports: [
    CommonModule,
    GalleryRoutingModule
  ],
  declarations: [
    GalleryComponent,
    PaperArtPieceListComponent
  ]
})
export class GalleryModule {}
