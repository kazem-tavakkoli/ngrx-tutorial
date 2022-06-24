import { createReducer } from "@ngrx/store";
import { initialState } from "./auth.state";

const _authReduser = createReducer(initialState);

export function authReduser(state:any,action:any) {
    return _authReduser(state,action)
}