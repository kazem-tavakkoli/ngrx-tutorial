import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { EffectsModule } from "@ngrx/effects";
import { StoreModule } from "@ngrx/store";
import { LoginComponent } from "./login/login.component";
import { SingupComponent } from "./singup/singup.component";
import { AuthEffects } from "./state/auth.effects";
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
        },
        {
            path:'singup',
            component: SingupComponent
        }
    ]
  }
]

@NgModule({
declarations:[
    LoginComponent,
    SingupComponent
],
imports:[
    CommonModule,
    ReactiveFormsModule,
    EffectsModule.forFeature(),
    RouterModule.forChild(routers),
    StoreModule.forFeature(AUTH_STATE_NAME,authReduser)
]
})

export class AutModule {

}