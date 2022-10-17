import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';

const routes: Routes = [
  {path: 'login',component: LoginFormComponent},
  {path:'search',component:FilmSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
