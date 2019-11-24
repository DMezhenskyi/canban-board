import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CanbanListEffects } from './canban-list.effects';

describe('CanbanListEffects', () => {
  let actions$: Observable<any>;
  let effects: CanbanListEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CanbanListEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CanbanListEffects>(CanbanListEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
