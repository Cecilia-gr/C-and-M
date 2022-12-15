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
import { MotpasseObComponent } from './motpasse-ob/motpasse-ob.component';
import { ContactComponent } from './components/contact/contact.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FormulairConnexionComponent } from './components/formulair-connexion/formulair-connexion.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserListComponent,
    NavComponent,
    ItemComponent,
    FormulairConnexionComponent,
    MotpasseObComponent,
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
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
