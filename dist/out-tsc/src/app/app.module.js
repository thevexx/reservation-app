"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var auth_guard_1 = require("./guards/auth.guard");
var role_guard_1 = require("./guards/role.guard");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login/login.component");
var register_component_1 = require("./register/register.component");
var auth_service_1 = require("./services/auth.service");
var forms_1 = require("@angular/forms");
var menu_user_component_1 = require("./user/menu-user/menu-user.component");
var list_component_1 = require("./user/list/list.component");
var home_component_1 = require("./user/home/home.component");
var reservation_ecran_component_1 = require("./user/reservation-ecran/reservation-ecran.component");
var reservations_component_1 = require("./admin/reservations/reservations.component");
var ecrans_component_1 = require("./admin/ecrans/ecrans.component");
var menu_admin_component_1 = require("./admin/menu-admin/menu-admin.component");
var offres_component_1 = require("./admin/offres/offres.component");
var users_component_1 = require("./admin/users/users.component");
var animations_1 = require("@angular/platform-browser/animations");
var material_module_1 = require("./material.module");
var admin_service_1 = require("./services/admin.service");
var user_service_1 = require("./services/user.service");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent,
                menu_user_component_1.MenuUserComponent,
                list_component_1.ListComponent,
                home_component_1.HomeComponent,
                menu_admin_component_1.MenuAdminComponent,
                users_component_1.UsersComponent,
                reservations_component_1.ReservationsComponent,
                ecrans_component_1.EcransComponent,
                offres_component_1.OffresComponent,
                reservation_ecran_component_1.ReservationEcranComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                animations_1.BrowserAnimationsModule,
                material_module_1.MaterialModule
            ],
            providers: [auth_service_1.AuthService, auth_guard_1.AuthGuard, role_guard_1.RoleGuard, admin_service_1.AdminService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map