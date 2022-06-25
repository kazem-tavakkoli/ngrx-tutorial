import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, map } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { loginStart, loginSuccess } from './auth.actions';

@Injectable()

export class AuthEffects {
  constructor(private actions$: Actions, private authService: AuthService) {}
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService
          .login(action.email, action.password)
          .pipe(map((data) => {
            const user = this.authService.formatUser(data);
            return loginSuccess({user})
          }));
      })
    );
  });
}
