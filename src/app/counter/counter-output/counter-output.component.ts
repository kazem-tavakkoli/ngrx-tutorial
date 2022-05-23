import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from 'src/app/models/tutorial.model';
import { getCounter } from 'src/app/selectors/counter.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.sass']
})
export class CounterOutputComponent implements OnInit {

  counter$!:Observable<number>;
  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
   this.counter$ =this.store.select(getCounter);
  }

}
