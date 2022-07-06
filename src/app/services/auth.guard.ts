import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { exhaustMap, map, Observable } from 'rxjs';
import { isAutenticated } from '../auth/state/auth.selector';
import { AppState } from '../store/app.state';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private store:Store<AppState>,private router:Router) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.store.select(isAutenticated).pipe(map((isAutenticated)=>{
        if(!isAutenticated) {
            return this.router.createUrlTree(['auth']);
        }
        return true;
    }))
  }
}
