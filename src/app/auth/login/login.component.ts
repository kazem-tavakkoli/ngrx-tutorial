import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { loginStart } from '../state/auth.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  constructor(private store:Store<AppState>) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      password: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required,Validators.email])
    })
  }

  onLoginSubmit(){
    const email = this.loginForm.value.email;   
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({email,password}))
  }

}
