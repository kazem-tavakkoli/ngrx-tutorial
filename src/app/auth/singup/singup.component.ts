import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { setLoadingSpinner } from 'src/app/store/shared/shared.action';
import { signupStart, signupSuccess } from '../state/auth.actions';

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  signupForm !: FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }

  onSignupSubmit(){
    const email = this.signupForm.value.email;   
    const password = this.signupForm.value.password;
    this.store.dispatch(setLoadingSpinner({status:true}))
    this.store.dispatch(signupStart({email,password}))
  }

}
