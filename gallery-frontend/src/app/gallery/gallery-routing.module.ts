import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PaperArtPieceListComponent } from "./paper-art-pieces/paper-art-piece-list/paper-art-piece-list.component";


const appRoutes: Routes = [
  { path: "", redirectTo: "/paper-art-pieces", pathMatch: "full" },
  { path: "paper-art-pieces", component: PaperArtPieceListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class GalleryRoutingModule {}
