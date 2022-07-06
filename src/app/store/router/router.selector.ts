import { RouterReducerState } from '@ngrx/router-store';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const getRouterState =
  createFeatureSelector<RouterReducerState>('router');
export const getCurrentRoute = createSelector( getRouterState,(router: RouterReducerState) => {
    return router.state;
  }
);
