import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { isAutenticated } from 'src/app/auth/state/auth.selector';
import { AppState } from 'src/app/store/app.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  isAuthenticated$!: Observable<boolean>;

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.select(isAutenticated);
  }
}
