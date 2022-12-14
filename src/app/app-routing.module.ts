import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { RegisterComponent } from './components/register/register.component';
import { UserFormComponent } from './components/user-form/user-form.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserComponent } from './components/user/user.component';
import { AuthGuard } from './guards/auth.guard';
import { RegisterformComponent } from './components/registerform/registerform.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    children: [

    ]
  },
  {path: 'inscription', component: RegisterComponent, pathMatch: "full" },
  {path: 'user-list', component: UserListComponent, pathMatch: "full" },
  {path: 'contact', component: RegisterformComponent},
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
