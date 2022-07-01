import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { AppState } from 'src/app/store/app.state';
import {
  setErrorMessasge,
  setLoadingSpinner,
} from 'src/app/store/shared/shared.action';
import { loginStart, loginSuccess, signupStart, signupSuccess } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private store: Store<AppState>,
    private router: Router
  ) {}

  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action) => {
        return this.authService.login(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessasge({ message: '' }));
            const user = this.authService.formatUser(data);
            return loginSuccess({ user });
          }),
          catchError((errResp) => {
            console.log(errResp.error.error.message);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessasge({ message: errorMessage }));
          })
        );
      })
    );
  });

  loginRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginSuccess),
      tap((action) => {
        this.store.dispatch(setErrorMessasge({ message: '' }));
        this.router.navigate(['/']);
      })
    );
  },
  {dispatch:false}
  );



  signup$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupStart),
      exhaustMap((action) => {
        return this.authService.signup(action.email, action.password).pipe(
          map((data) => {
            this.store.dispatch(setLoadingSpinner({ status: false }));
            this.store.dispatch(setErrorMessasge({ message: '' }));
            const user = this.authService.formatUser(data);
            return signupSuccess({ user });
          }),
          catchError((errResp) => {
            console.log(errResp.error.error.message);
            this.store.dispatch(setLoadingSpinner({ status: false }));
            const errorMessage = this.authService.getErrorMessage(
              errResp.error.error.message
            );
            return of(setErrorMessasge({ message: errorMessage }));
          }
          )
        );
      }
      )
    );
  });

  singupRedirect$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(signupSuccess),
      tap((action) => {
        this.store.dispatch(setErrorMessasge({ message: '' }));
        this.router.navigate(['/']);
      }
      )
    );
  })
 
}
