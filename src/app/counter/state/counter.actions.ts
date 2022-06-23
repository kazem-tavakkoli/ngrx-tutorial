import { createAction, props } from "@ngrx/store";

export const increment = createAction('increment');
export const decrement = createAction('decriment');
export const reset = createAction('reset');

export const customIncrement   = createAction('[Custom] Add',props<{count:number}>());
export const Chane_Chanel_Name   = createAction('ChaneChanelName');
export const customDecrement   = createAction('[Custom] Remove');
export const customReset   = createAction('[Custom] Reset');
