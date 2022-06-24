import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { AuthService } from "../services/auth.service";
import { LoginComponent } from "./login/login.component";
import { authReduser } from "./state/auth.reduser";
import { AUTH_STATE_NAME } from "./state/auth.selector";

const routers:Routes = [
  {
    path:'',
    children:[
        {
            path:'',
            redirectTo: 'login'
        },
        {
            path:'login',
            component: LoginComponent
        }
    ]
  }
]

@NgModule({
declarations:[
    LoginComponent
],
imports:[
    CommonModule,
    ReactiveFormsModule,
    // EffectsModule.forFeature([AuthService]),
    RouterModule.forChild(routers),
    StoreModule.forFeature(AUTH_STATE_NAME,authReduser)
]
})

export class AutModule {

}