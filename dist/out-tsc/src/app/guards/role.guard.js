"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var jwt = require("angular2-jwt-simple");
var RoleGuard = /** @class */ (function () {
    function RoleGuard(router) {
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var roles = next.data['roles'];
        var token = localStorage.getItem('token');
        var roleToken = jwt.decode(token, 'my_pass').role;
        console.log("role token : " + roleToken);
        console.log("role guard : " + roles);
        if (roleToken === roles) {
            return true;
        }
        this.router.navigateByUrl('home');
        return false;
    };
    RoleGuard = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [router_1.Router])
    ], RoleGuard);
    return RoleGuard;
}());
exports.RoleGuard = RoleGuard;
//# sourceMappingURL=role.guard.js.map