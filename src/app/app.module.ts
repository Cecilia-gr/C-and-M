import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';


import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { NavComponent } from './components/nav/nav.component';
<<<<<<< HEAD
import { List2Component } from './components/list2/list2.component';
import { RegisterformComponent } from './registerform/registerform.component';
import { ItemComponent } from './item/item.component';
import { FormulairConnexionComponent } from './formulair-connexion/formulair-connexion.component';
import { ModpasseComponent } from './modpasse/modpasse.component';
import { MotpasseObComponent } from './motpasse-ob/motpasse-ob.component';
=======
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormulairConnexionComponent } from './components/formulair-connexion/formulair-connexion.component';
import { HomeComponent } from './components/home/home.component';
import { ItemComponent } from './components/item/item.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { CartComponent } from './components/cart/cart.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    NavComponent,
<<<<<<< HEAD
    List2Component,
    RegisterformComponent,
    ItemComponent,
    FormulairConnexionComponent,
    ModpasseComponent,
    MotpasseObComponent
=======
    UserFormComponent,
    NotfoundComponent,
    RegisterComponent,
    NavComponent,
    ContactComponent,
    CategoriesComponent,
    FormulairConnexionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
