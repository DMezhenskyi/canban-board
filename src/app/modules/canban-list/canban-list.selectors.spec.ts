import * as fromCanbanList from './canban-list.reducer';
import { selectCanbanListState } from './canban-list.selectors';

describe('CanbanList Selectors', () => {
  it('should select the feature state', () => {
    const result = selectCanbanListState({
      [fromCanbanList.canbanListFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});
