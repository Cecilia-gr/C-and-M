import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavComponent } from './components/nav/nav.component';
import { List2Component } from './components/list2/list2.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    List2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
