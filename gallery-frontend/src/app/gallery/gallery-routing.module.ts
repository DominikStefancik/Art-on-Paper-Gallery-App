import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaperArtPieceListComponent } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.component";
import { PaperArtPieceListResolver } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.resolver";
import { PaperArtPieceDetailComponent } from "./paper-art-pieces/paper-art-piece-detail/paper-art-piece-detail.component";
import { PaperArtPieceDetailResolver } from "./paper-art-pieces/paper-art-piece-detail/paper-art-piece-detail.resolver";


const appRoutes: Routes = [
  { path: "paper-art-pieces",
    component: PaperArtPieceListComponent,
    resolve: {
      paperArtPieceList: PaperArtPieceListResolver
    }
  },
  { path: "paper-art-pieces/:paperArtPieceId",
    component: PaperArtPieceDetailComponent,
    resolve: {
      paperArtPieceDetail: PaperArtPieceDetailResolver
    }
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  providers: [
    PaperArtPieceListResolver,
    PaperArtPieceDetailResolver
  ]
})
export class GalleryRoutingModule {}
