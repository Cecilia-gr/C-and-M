import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { FormulairConnexionComponent } from './components/formulair-connexion/formulair-connexion.component';
import { HomeComponent } from './components/home/home.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  // {path: 'home', component: HomeComponent },
  {path: '', component: HomeComponent, pathMatch: 'full'},


  {
    path: '',
    canActivate: [AuthGuard],
    children: [

    ]
  },
  {path: 'inscription', component: RegisterComponent, pathMatch: "full" },
  {path: 'user-list', component: UserListComponent, pathMatch: "full" },
  {path: 'add-item', component: ItemFormComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'connexion', component: FormulairConnexionComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
