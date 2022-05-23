import {createAction, props } from "@ngrx/store"

export const Add_Tutorial      = createAction('[TUTORIAL] Add');
export const Remove_Tutorial   = createAction('[TUTORIAL] Remove');
export const Reset_Tutorial   = createAction('[TUTORIAL] Reset');


export const Add_Customer   = createAction('[Customer] Add',props<{count:number}>());
export const Chane_Chanel_Name   = createAction('ChaneChanelName');
export const Remove_Customer   = createAction('[Customer] Remove');
export const Reset_Customer   = createAction('[Customer] Reset');

