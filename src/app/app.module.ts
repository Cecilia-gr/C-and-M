import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
import { ItemComponent } from './components/item/item.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { List2Component } from './components/list2/list2.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ItemComponent } from './item/item.component';
import { FormulairConnexionComponent } from './formulair-connexion/formulair-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    NavComponent,
    UserFormComponent,
    NotfoundComponent,
    RegisterComponent,
    NavComponent,
    ItemComponent,
    ContactComponent,
    CategoriesComponent
    List2Component,
    RegisterformComponent,
    ItemComponent,
    FormulairConnexionComponent
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
