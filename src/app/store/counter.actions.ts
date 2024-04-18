// import { Action } from '@ngrx/store';
import { createAction, props } from '@ngrx/store';

export const INCREMENT = '[Counter] Increment';
export const DECREMENT = '[Counter] Decrement';

export const init = createAction('[Counter] Init');
export const set = createAction('[Counter] Set', props<{ value: number }>());

//* Primera forma de definir un action
export const increment = createAction(
  '[Counter] Increment',
  props<{ value: number }>()
);
export const decrement = createAction(
  '[Counter] Decrement',
  props<{ value: number }>()
);
//* Segunda forma de definir un action
// export class IncrementAction implements Action {
//   readonly type = INCREMENT;

//   constructor(public value: number) {}
// }
// export class DecrementAction implements Action {
//   readonly type = DECREMENT;

//   constructor(public value: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction
