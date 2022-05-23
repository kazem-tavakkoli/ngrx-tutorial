import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Add_Customer, Chane_Chanel_Name } from 'src/app/actions/tutorial.actions';
import { CounterState } from 'src/app/models/tutorial.model';
import { getchanelName } from 'src/app/selectors/counter.selectors';
import { AppState } from 'src/app/state/app.state';

@Component({
  selector: 'app-customer-counter-input',
  templateUrl: './customer-counter-input.component.html',
  styleUrls: ['./customer-counter-input.component.sass']
})
export class CustomerCounterInputComponent implements OnInit {
  value!: number;
  chanelName! : string;
  constructor(private store:Store<AppState>) 
  { }

  ngOnInit(): void {
    this.store.select(getchanelName).subscribe(chanelName=>{
      this.chanelName = chanelName
    })
  }

  onAdd() {
    this.store.dispatch(Add_Customer({count:this.value}));
  }

  onChangeChanelName(){
    this.store.dispatch(Chane_Chanel_Name());
  }
}
