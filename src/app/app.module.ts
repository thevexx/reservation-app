import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuUserComponent } from './user/menu-user/menu-user.component';
import { ListComponent } from './user/list/list.component';
import { HomeComponent } from './user/home/home.component';
import { ReservationEcranComponent } from './user/reservation-ecran/reservation-ecran.component';
import { ReservationsComponent } from './admin/reservations/reservations.component';
import { EcransComponent } from './admin/ecrans/ecrans.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { OffresComponent } from './admin/offres/offres.component';
import { UsersComponent } from './admin/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    MenuUserComponent,
    ListComponent,
    HomeComponent,
    MenuAdminComponent,
    UsersComponent,
    ReservationsComponent,
    EcransComponent,
    OffresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthService, AuthGuard, RoleGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
