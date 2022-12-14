import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { NavComponent } from './components/nav/nav.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

import { ListComponent } from './components/list/list.component';
import { NavComponent } from './components/nav/nav.component';
import { List2Component } from './components/list2/list2.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    NavComponent,
    UserFormComponent,
    NotfoundComponent
    ListComponent,
    NavComponent,
    List2Component,
    RegisterformComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
