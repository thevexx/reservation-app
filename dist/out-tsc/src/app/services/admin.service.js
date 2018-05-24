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
var http_1 = require("@angular/http");
var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getAllUser = function () {
        var url = 'http://192.168.0.20:3000/api/listuser/list';
        this.http.get(url);
    };
    AdminService.prototype.AddnewUser = function (user) {
        var url = 'http://192.168.0.20:3000/api/listuser/insert';
        this.http.post(url, user);
    };
    AdminService.prototype.AddUser = function (user) {
        var url = 'http://192.168.0.20:3000/api/listuser/update';
        this.http.put(url, user);
    };
    AdminService.prototype.delUser = function (user) {
        var url = 'http://192.168.0.20:3000/api/listuser/delete';
        this.http.delete(url, user);
    };
    AdminService.prototype.getAllEcrans = function () {
        var url = 'http://192.168.0.20:3000/api/ecrans';
        this.http.get(url);
    };
    AdminService.prototype.AddnewEcran = function (ecran) {
        var url = 'http://192.168.0.20:3000/api/ecrans';
        this.http.post(url, ecran);
    };
    AdminService.prototype.getEcranById = function (_idEcran) {
        var url = 'http://192.168.0.20:3000/api/ecrans';
        this.http.get(url, _idEcran);
    };
    AdminService.prototype.getEcranByUser = function (_idUser) {
        var url = 'http://192.168.0.20:3000/api/ecrans/idUser';
        this.http.get(url, _idUser);
    };
    /* GET reservation by userId */
    AdminService.prototype.getReservationByUser = function (_idUser) {
        var url = 'http://192.168.0.20:3000/api/ecrans/idUser';
        this.http.get(url, _idUser);
    };
    AdminService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], AdminService);
    return AdminService;
}());
exports.AdminService = AdminService;
//# sourceMappingURL=admin.service.js.map