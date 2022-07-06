import { routerReducer, RouterReducerState } from '@ngrx/router-store';
import { authReduser } from '../auth/state/auth.reduser';
import { AUTH_STATE_NAME } from '../auth/state/auth.selector';
import { AuthState } from '../auth/state/auth.state';
import { SharedReduser } from './shared/shared.reduser';
import { SHARED_STATE_NAME } from './shared/shared.selector';
import { SharedState } from './shared/shared.state';

export interface AppState {
  [SHARED_STATE_NAME]:SharedState,
  [AUTH_STATE_NAME] : AuthState,
  router:RouterReducerState
}

export const appReducer = {
  [SHARED_STATE_NAME] : SharedReduser,
  [AUTH_STATE_NAME] : authReduser,
  router:routerReducer
}