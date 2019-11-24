import { CanbanList } from "./canban-list.model";
import { Observable, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class CanbanListService {
  constructor() {}

  public fetchCanbanLists(): Observable<CanbanList[]> {
    return of([
      ({ id: 1, name: "To do" } as unknown) as CanbanList,
      ({ id: 2, name: "In progress" } as unknown) as CanbanList,
      ({ id: 3, name: "Done" } as unknown) as CanbanList
    ]);
  }
}
