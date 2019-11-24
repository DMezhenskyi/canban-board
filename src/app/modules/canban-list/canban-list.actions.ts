import { Update } from "@ngrx/entity";
import { createAction, props } from "@ngrx/store";
import { CanbanList } from "./canban-list.model";

export const loadCanbanLists = createAction(
  "[CanbanList/API] Load CanbanLists"
);

export const loadCanbanListsSuccess = createAction(
  "[CanbanList/API] Load CanbanLists Success",
  props<{ canbanList: CanbanList[] }>()
);

export const loadCanbanListsFailure = createAction(
  "[CanbanList/API] Load CanbanLists Failure",
  props<{ error: Error }>()
);

export const addCanbanList = createAction(
  "[CanbanList/API] Add CanbanList",
  props<{ canbanList: CanbanList }>()
);

export const updateCanbanList = createAction(
  "[CanbanList/API] Update CanbanList",
  props<{ canbanList: Update<CanbanList> }>()
);

export const deleteCanbanList = createAction(
  "[CanbanList/API] Delete CanbanList",
  props<{ id: string }>()
);
