import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './user/home/home.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { EcransComponent } from './admin/ecrans/ecrans.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import { UsersComponent } from './admin/users/users.component';

const routes: Routes = [{
  path: 'register',
  component: RegisterComponent
},
{
  path: 'login',
  component: LoginComponent
},
{
  path: 'home',
  component: HomeComponent,
  canActivate: [AuthGuard]
},
{
  path: 'reservations',
  component: ReservationsComponent,
  canActivate: [AuthGuard, RoleGuard],
  data: { roles: 'admin' }

},
{
  path: 'ecrans',
  component: EcransComponent
},

{
  path: 'users',
  component: UsersComponent
},
{
  path: '**',
  redirectTo: 'login'
}

];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
