import { createFeatureSelector, createSelector, State } from "@ngrx/store";

import { CounterState } from "../models/tutorial.model";

const getCounterState = createFeatureSelector<CounterState>('counter');

export const getCounter = createSelector(getCounterState,(state)=> {
    return state.counter;
})

export const getchanelName = createSelector(getCounterState,(state)=> {
    return state.chanelName;
})