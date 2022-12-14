import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './components/list/list.component';
import { NavComponent } from './components/nav/nav.component';
import { List2Component } from './components/list2/list2.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ItemComponent } from './item/item.component';
import { FormulairConnexionComponent } from './formulair-connexion/formulair-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    NavComponent,
    List2Component,
    RegisterformComponent,
    ItemComponent,
    FormulairConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
