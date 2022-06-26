import { createFeatureSelector, createSelector } from "@ngrx/store"
import { SharedState } from "./shared.state"

export const SHARED_STATE_NAME='shared'
const getShardState = createFeatureSelector<SharedState>(SHARED_STATE_NAME)

export const getLoading = createSelector(getShardState,(state)=>{
    return state.showLoading;
})

export const getErrorMessage = createSelector(getShardState,(state)=>{
    return state.errorMessage
})