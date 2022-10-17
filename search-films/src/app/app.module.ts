import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { UtilsComponent } from './components/utils/utils.component';
import { FilmComponent } from './components/film/film.component';
import { FilmSearchComponent } from './components/film-search/film-search.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    UtilsComponent,
    FilmComponent,
    FilmSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
