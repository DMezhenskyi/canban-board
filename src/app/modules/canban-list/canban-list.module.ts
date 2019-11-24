import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import * as fromCanbanList from "./canban-list.reducer";
import { EffectsModule } from "@ngrx/effects";
import { CanbanListEffects } from "./canban-list.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      fromCanbanList.canbanListFeatureKey,
      fromCanbanList.reducer
    ),
    EffectsModule.forFeature([CanbanListEffects])
  ]
})
export class CanbanListModule {}
