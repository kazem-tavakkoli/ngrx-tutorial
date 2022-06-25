import { createAction, props } from "@ngrx/store";

export const SHRED_LOADING_ACTION = '[shared state] set loading spinner';

export const setLoadingSpinner = createAction(SHRED_LOADING_ACTION,props<{status:boolean}>())