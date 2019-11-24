import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  CanbanList,
  State,
  selectAllLists,
  actions
} from "../../modules/canban-list";
import { Observable } from "rxjs";

@Component({
  selector: "tcn-board-page",
  templateUrl: "./board-page.component.html",
  styleUrls: ["./board-page.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoardPageComponent implements OnInit {
  public canbanLists$: Observable<CanbanList[]>;
  constructor(private store: Store<State>) {}

  ngOnInit() {
    this.store.dispatch(actions.loadCanbanLists());
    this.canbanLists$ = this.store.select(selectAllLists);
  }
}
