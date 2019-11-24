import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatButtonModule, MatToolbarModule } from "@angular/material";
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [],
  imports: [CommonModule, MatButtonModule, MatToolbarModule, FlexLayoutModule],
  exports: [CommonModule, MatButtonModule, MatToolbarModule, FlexLayoutModule]
})
export class SharedModule {}
