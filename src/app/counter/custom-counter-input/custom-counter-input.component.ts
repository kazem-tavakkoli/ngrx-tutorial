import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.state';
import { Chane_Chanel_Name, customIncrement } from '../state/counter.actions';
import { getchanelName } from '../state/counter.selectors';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.css']
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  chanelName$! : Observable<string>;
  constructor(private store:Store<AppState>) 
  { }

  ngOnInit(): void {
   this.chanelName$ =  this.store.select(getchanelName);
  }

  onAdd() {
    this.store.dispatch(customIncrement({count:this.value}));
  }

  onChangeChanelName(){
    this.store.dispatch(Chane_Chanel_Name());
  }
}
