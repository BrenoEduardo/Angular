import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavHeroComponent } from './nav-hero/nav-hero.component';
import { TopHeroComponent } from './top-hero/top-hero.component';

@NgModule({
  declarations: [
    AppComponent,
    NavHeroComponent,
    TopHeroComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
