import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaperArtPieceListComponent } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.component";
import { PaperArtPieceListResolver } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.resolver";
import { PaperArtPiecesService } from "./paper-art-pieces/paper-art-pieces.service";


const appRoutes: Routes = [
  { path: "", redirectTo: "/paper-art-pieces", pathMatch: "full" },
  { path: "paper-art-pieces",
    component: PaperArtPieceListComponent,
    resolve: {
      paperArtPieceList: PaperArtPieceListResolver
    }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    PaperArtPieceListResolver
  ]
})
export class GalleryRoutingModule {}
