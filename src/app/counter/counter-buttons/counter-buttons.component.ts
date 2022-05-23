import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add_Tutorial, Remove_Tutorial, Reset_Tutorial } from 'src/app/actions/tutorial.actions';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.sass']
})
export class CounterButtonsComponent implements OnInit {

  
  constructor(private store: Store<AppState>) {
  }
  ngOnInit(): void {
    
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