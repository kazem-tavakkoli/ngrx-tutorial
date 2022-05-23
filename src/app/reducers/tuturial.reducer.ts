import { createReducer, on } from '@ngrx/store';
import {initialState} from '../models/tutorial.model'
import { Add_Customer, Add_Tutorial, Chane_Chanel_Name, Remove_Tutorial, Reset_Tutorial } from '../actions/tutorial.actions';



export const _counterReducer = createReducer(
  initialState,
  on(Add_Tutorial, (state) => {
    return {
      ...state,
      counter:state.counter + 1
    }
  }),
  on(Remove_Tutorial, (state) =>{
    return {
      ...state,
      counter:state.counter - 1
    }
  }),
  on(Reset_Tutorial, (state) =>{
    return {
      ...state,
      counter: 0
    }
  }),
  on(Add_Customer, (state,action) =>{    
    return {
      ...state,
      counter: action.count
    }
  }),
  on(Chane_Chanel_Name, (state) =>{
    return {
      ...state,
      chanelName: 'Modifi Chanel Name'
    }
  })
  
);

export function counterReducer(state:any,action:any) {
  return _counterReducer(state,action)
}