import { SharedModule } from "./../../shared/shared.module";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { BoardPageRoutingModule } from "./board-page-routing.module";
import { BoardPageComponent } from "./board-page.component";
import { CanbanListModule } from "../../modules/canban-list";

@NgModule({
  declarations: [BoardPageComponent],
  imports: [
    CommonModule,
    BoardPageRoutingModule,
    CanbanListModule,
    SharedModule
  ]
})
export class BoardPageModule {}
