import { CanbanListService } from "./canban-list.service";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, concatMap } from "rxjs/operators";
import { of } from "rxjs";

import * as CanbanListActions from "./canban-list.actions";

@Injectable()
export class CanbanListEffects {
  loadCanbanLists$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(CanbanListActions.loadCanbanLists),
      concatMap(() =>
        this.canbanList.fetchCanbanLists().pipe(
          map(canbanList =>
            CanbanListActions.loadCanbanListsSuccess({ canbanList })
          ),
          catchError(error =>
            of(CanbanListActions.loadCanbanListsFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private actions$: Actions,
    private canbanList: CanbanListService
  ) {}
}
