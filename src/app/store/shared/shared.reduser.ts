import { createReducer, on } from '@ngrx/store';
import { setErrorMessasge, setLoadingSpinner } from './shared.action';
import { initialState } from './shared.state';

const _sharedReduser = createReducer(
  initialState,
  on(setLoadingSpinner, (state, action) => {
    return {
      ...state,
      showLoading:action.status
    };
  }),on(setErrorMessasge,(state,action)=>{
    return {
      ...state,
      errorMessage:action.message
    }
  })
);

export function SharedReduser(state: any, action: any) {
  return _sharedReduser(state, action);
}
