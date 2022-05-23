import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import {Add_Tutorial,Remove_Tutorial,Reset_Tutorial} from '../actions/tutorial.actions'

@Component({
  selector: 'my-test-root',
  templateUrl: './my-test.component.html',
  styleUrls: ['./my-test.component.sass']
})
export class MyTestComponent {
  title = 'ngrx-tut';
  count$?: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    this.count$ = store.select('counter');
  }
 
  increment() {
    this.store.dispatch(Add_Tutorial());
  }
 
  decrement() {
    this.store.dispatch(Remove_Tutorial());
  }
 
  reset() {
    this.store.dispatch(Reset_Tutorial());
  }
}
