import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
// import { DecrementAction, IncrementAction } from '../store/counter.actions';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    //* Con la primera forma de actions
    this.store.dispatch(increment({ value: 2 }));
    //* Con la segunda forma de actions
    // this.store.dispatch(new IncrementAction(2));
  }

  decrement() {
    //* Con la primera forma de actions
    this.store.dispatch(decrement({ value: 1 }));
    //* Con la segunda forma de actions
    // this.store.dispatch(new DecrementAction(1));
  }
}
