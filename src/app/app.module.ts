import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/component/header/header.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { LoadingSpinerComponent } from './shared/component/loading-spiner/loading-spiner.component';
import { appReducer } from './store/app.state';
import { AuthEffects } from './auth/state/auth.effects';
import { AutTokenInterceptor } from './services/AutToken.interceptor';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { CustomSerializer } from './store/router/coustom-serializer';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    LoadingSpinerComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    EffectsModule.forRoot([AuthEffects]),
    StoreModule.forRoot(appReducer),
    StoreRouterConnectingModule.forRoot({serializer: CustomSerializer}),
    StoreDevtoolsModule.instrument({
    logOnly: environment.production, // Restrict extension to log-only mode
    }),

  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: AutTokenInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
