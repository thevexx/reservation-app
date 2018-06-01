import {HttpModule} from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AuthService } from './services/auth.service';
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


import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { AdminsComponent } from './admin/admins/admins.component';

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
    OffresComponent,
    ReservationEcranComponent,
    AdminsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    Ng2SmartTableModule
  ],
  providers: [AuthService, AuthGuard, RoleGuard, AdminService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
