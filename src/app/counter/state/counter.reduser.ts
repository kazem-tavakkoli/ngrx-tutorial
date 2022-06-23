import { createReducer, on } from '@ngrx/store';
import { Chane_Chanel_Name, customIncrement, decrement, increment, reset } from './counter.actions';
import { initialState } from './counter.state';

const _counterReduser = createReducer(
  initialState,
  on(increment, (state) => {
    return {
      ...state,
      counter: state.counter + 1,
    };
  }),
  on(decrement,(state)=>{
    return{
        ...state,
        counter:state.counter -1
    }
  }),
  on(reset,(state)=> {
    return{
        ...state,
        counter:  0
    }
  }),
  on(customIncrement, (state,action) =>{    
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
export function counterReduser(state:any, action:any) {
  return _counterReduser(state, action);
}
