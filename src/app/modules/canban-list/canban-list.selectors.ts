import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCanbanList from "./canban-list.reducer";

export const selectCanbanListState = createFeatureSelector<
  fromCanbanList.State
>(fromCanbanList.canbanListFeatureKey);

const { selectAll } = fromCanbanList.adapter.getSelectors();

export const selectAllLists = createSelector(selectCanbanListState, selectAll);
