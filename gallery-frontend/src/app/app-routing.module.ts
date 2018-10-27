import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GalleryComponent } from "./gallery/gallery.component";

const appRoutes: Routes = [
  { path: "", redirectTo: "/gallery", pathMatch: "full" },
  { path: "gallery", component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
