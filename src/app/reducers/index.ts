import { ActionReducerMap, MetaReducer } from "@ngrx/store";
import { environment } from "../../environments/environment";
import * as fromCanbanList from "../modules/canban-list";

export interface State {
  [fromCanbanList.canbanListFeatureKey]: fromCanbanList.State;
}

export const reducers: ActionReducerMap<State> = {
  [fromCanbanList.canbanListFeatureKey]: fromCanbanList.reducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production
  ? []
  : [];
