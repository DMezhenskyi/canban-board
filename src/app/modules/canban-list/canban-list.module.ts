import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { StoreModule } from "@ngrx/store";
import * as fromCanbanList from "./canban-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CanbanListEffects } from "./canban-list.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DragDropModule,
    StoreModule.forFeature(
      fromCanbanList.canbanListFeatureKey,
      fromCanbanList.reducer
    ),
    EffectsModule.forFeature([CanbanListEffects])
  ],
  exports: [DragDropModule]
})
export class CanbanListModule {}
