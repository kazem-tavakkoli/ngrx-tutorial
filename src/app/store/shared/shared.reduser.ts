import { createReducer, on } from '@ngrx/store';
import { setLoadingSpinner } from './shared.action';
import { initialState } from './shared.state';

const _sharedReduser = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      state,
      showLoading:action.status
    };
  })
);

export function SharedReduser(state: any, action: any) {
  return _sharedReduser(state, action);
}
