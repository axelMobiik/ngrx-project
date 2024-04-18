import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

// import { Action } from "@ngrx/store";
// import { CounterActions, DECREMENT, DecrementAction, INCREMENT, IncrementAction } from "./counter.actions";

const initialState = 0;

//* Primera forma para definir un reducer
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.value),
  on(decrement, (state, action) => state - action.value),
  on(set, (state, action) => action.value)
);
//* Segunda forma para definir un reducer
// export function counterReducer(state = initialState, action: CounterActions | Action) {
//   if (action.type === INCREMENT) {
//     return state + (action as IncrementAction).value;
//   }
//   if (action.type === DECREMENT) {
//     return state - (action as DecrementAction).value;
//   }
//   return state;
// }
