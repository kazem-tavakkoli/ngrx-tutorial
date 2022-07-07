import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SingelPostComponent } from './posts/singel-post/singel-post.component';
import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
  },
  {
    path:'counter',
    loadChildren: ()=> import('./counter/counter.module').then(m=>m.CounterModule)
  },
  {
    path:'posts',
    loadChildren:()=> import('./posts/posts.module').then(m=>m.PostsModule),
    canActivate:[AuthGuard]
  },
  {
    path:'posts/detail/:id',
    component:SingelPostComponent
  },
  {
    path:'auth',
    loadChildren:()=> import('./auth/auth.module').then(m=>m.AutModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
