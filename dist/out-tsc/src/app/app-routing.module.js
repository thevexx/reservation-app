"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var register_component_1 = require("./register/register.component");
var login_component_1 = require("./login/login.component");
var home_component_1 = require("./user/home/home.component");
var reservations_component_1 = require("./admin/reservations/reservations.component");
var ecrans_component_1 = require("./admin/ecrans/ecrans.component");
var auth_guard_1 = require("./guards/auth.guard");
var role_guard_1 = require("./guards/role.guard");
var users_component_1 = require("./admin/users/users.component");
var list_component_1 = require("./user/list/list.component");
var reservation_ecran_component_1 = require("./user/reservation-ecran/reservation-ecran.component");
var routes = [{
        path: 'register',
        component: register_component_1.RegisterComponent
    },
    {
        path: 'login',
        component: login_component_1.LoginComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'reservations',
        component: reservations_component_1.ReservationsComponent,
        canActivate: [auth_guard_1.AuthGuard, role_guard_1.RoleGuard],
        data: { roles: 'admin' }
    },
    {
        path: 'ecrans',
        component: ecrans_component_1.EcransComponent
    },
    {
        path: 'users',
        component: users_component_1.UsersComponent
    },
    {
        path: 'list',
        component: list_component_1.ListComponent
    },
    {
        path: 'reservation/:id',
        component: reservation_ecran_component_1.ReservationEcranComponent
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map