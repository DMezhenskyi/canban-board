import { Action, createReducer, on } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from "@ngrx/entity";
import * as CanbanListActions from "./canban-list.actions";
import { CanbanList } from "./canban-list.model";

export const canbanListFeatureKey = "canbanList";

export interface State extends EntityState<CanbanList> {}

export const adapter: EntityAdapter<CanbanList> = createEntityAdapter<
  CanbanList
>();

export const initialState: State = adapter.getInitialState();

const canbanListReducer = createReducer(
  initialState,
  on(CanbanListActions.loadCanbanLists, state => state),
  on(CanbanListActions.loadCanbanListsSuccess, (state, action) =>
    adapter.upsertMany(action.canbanList, state)
  ),
  on(CanbanListActions.loadCanbanListsFailure, (state, _) => state),
  on(CanbanListActions.addCanbanList, (state, action) =>
    adapter.addOne(action.canbanList, state)
  ),
  on(CanbanListActions.updateCanbanList, (state, action) =>
    adapter.updateOne(action.canbanList, state)
  ),
  on(CanbanListActions.deleteCanbanList, (state, action) =>
    adapter.removeOne(action.id, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return canbanListReducer(state, action);
}
