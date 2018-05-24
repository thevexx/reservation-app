(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/ecrans/ecrans.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/ecrans/ecrans.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-full-width {\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/ecrans/ecrans.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/ecrans/ecrans.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin>\r\n\r\n\r\n\r\n\r\n  <table class=\"table table-bordered table-dark\">\r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">actions</th>\r\n        <th scope=\"col\">name</th>\r\n        <th scope=\"col\">nbr Spot Par Iteration</th>\r\n        <th scope=\"col\">Prix</th>\r\n        <th scope=\"col\">Emplacement</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let ecran of ecrans\">\r\n        <th scope=\"row\" style=\"width: 110px;\">\r\n\r\n          <button mat-icon-button (click)=\"ecranEditBtn(ecran._id)\" data-toggle=\"modal\" data-target=\"#exampleModalEdit\">\r\n            <mat-icon>create</mat-icon>\r\n          </button>\r\n          <button mat-icon-button color=\"warn\">\r\n            <mat-icon>delete</mat-icon>\r\n          </button>\r\n        </th>\r\n        <td>{{ecran.name}}</td>\r\n        <td>{{ecran.nSpotParIteration}}</td>\r\n        <td>{{ecran.prix}}</td>\r\n        <td>{{ecran.emplacementPhysique}}</td>\r\n      </tr>\r\n\r\n\r\n    </tbody>\r\n  </table>\r\n  <button mat-fab  color=\"primary\" data-toggle=\"modal\" data-target=\"#exampleModal\">\r\n      <mat-icon>add</mat-icon>\r\n    </button>\r\n\r\n\r\n  <div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Ajout ecran</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <form [formGroup]=\"ecranForm\"  (ngSubmit)=\"AjoutEcran(ecranForm.value)\">\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"name\" formControlName=\"name\" >\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Emplacement physique\" formControlName=\"emplacementPhysique\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Emplacement GPS</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"longtitude\" formControlName=\"gpslong\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"latitude\" formControlName=\"gpslat\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Dimension</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Longueur\" formControlName=\"dimlong\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Largeur\" formControlName=\"dimlar\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Resolution</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Longueur\" formControlName=\"reslong\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Largeur\" formControlName=\"reslar\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Nombre spot par iteration\" formControlName=\"nSpotParIteration\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Prix\" formControlName=\"prix\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"picture url\" formControlName=\"pictureUrl\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"youtube video url\" formControlName=\"youtubeUrl\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\"></div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">enregistrer</button>\r\n            <button type=\"reset\" class=\"btn btn-secondary\" data-dismiss=\"modal\">annuler</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"modal fade\" id=\"exampleModalEdit\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabelEdit\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit ecran</h5>\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n            <span aria-hidden=\"true\">&times;</span>\r\n          </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n\r\n          <form [formGroup]=\"ecranForm\">\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"name\" [value]=\"ecranToEdit?.name\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-12\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Emplacement physique\" [value]=\"ecranToEdit?.emplacementPhysique\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Emplacement GPS</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"longtitude\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"latitude\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Dimension</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Longueur\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Largeur\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <label>Resolution</label>\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Longueur\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Largeur\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Nombre spot par iteration\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"Prix\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"form-row\">\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"picture url\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"form-group col-md-6\">\r\n                <mat-form-field class=\"input-full-width\">\r\n                  <input matInput placeholder=\"youtube video url\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"modal-footer\"></div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">enregistrer</button>\r\n            <button type=\"reset\" class=\"btn btn-secondary\" data-dismiss=\"modal\">annuler</button>\r\n          </form>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</app-menu-admin>\r\n"

/***/ }),

/***/ "./src/app/admin/ecrans/ecrans.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/ecrans/ecrans.component.ts ***!
  \**************************************************/
/*! exports provided: EcransComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EcransComponent", function() { return EcransComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EcransComponent = /** @class */ (function () {
    function EcransComponent(adminService) {
        this.adminService = adminService;
        this.ecranForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dimlong: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            dimlar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reslong: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            reslar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            emplacementPhysique: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            nSpotParIteration: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            gpslong: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            gpslat: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            prix: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            pictureUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
            youtubeUrl: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', []),
        });
    }
    EcransComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllEcrans().subscribe(function (res) {
            _this.ecrans = res.json();
        });
    };
    EcransComponent.prototype.ecranEditBtn = function (id) {
        var _this = this;
        this.adminService.getEcranById(id).subscribe(function (res) {
            console.log(res.json());
            _this.ecranToEdit = res.json();
        });
    };
    EcransComponent.prototype.AjoutEcran = function (ecran) {
        var _this = this;
        ecran['emplacementGps'] = { latitude: ecran.gpslat, longitude: ecran.gpslong };
        ecran['dimensions'] = { longueur: ecran.dimlong, largeur: ecran.dimlar };
        ecran['resolution'] = { longueur: ecran.reslong, largeur: ecran.reslar };
        console.log(ecran);
        this.adminService.AddnewEcran(ecran).subscribe(function (res) {
            _this.ngOnInit();
            console.log(res.json());
        });
    };
    EcransComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ecrans',
            template: __webpack_require__(/*! ./ecrans.component.html */ "./src/app/admin/ecrans/ecrans.component.html"),
            styles: [__webpack_require__(/*! ./ecrans.component.css */ "./src/app/admin/ecrans/ecrans.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_2__["AdminService"]])
    ], EcransComponent);
    return EcransComponent;
}());



/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.css":
/*!***********************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*!\r\n * Start Bootstrap - Simple Sidebar (https://startbootstrap.com/template-overviews/simple-sidebar)\r\n * Copyright 2013-2017 Start Bootstrap\r\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-simple-sidebar/blob/master/LICENSE)\r\n */\r\n\r\nbody {\r\n  overflow-x: hidden;\r\n}\r\n\r\n#wrapper {\r\n  padding-left: 0;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled {\r\n  padding-left: 200px;\r\n}\r\n\r\n#sidebar-wrapper {\r\n  z-index: 1000;\r\n  position: fixed;\r\n  left: 200px;\r\n  width: 0;\r\n  height: 100%;\r\n  margin-left: -200px;\r\n  overflow-y: auto;\r\n  background: #000;\r\n  transition: all 0.5s ease;\r\n}\r\n\r\n#wrapper.toggled #sidebar-wrapper {\r\n  width: 150px;\r\n}\r\n\r\n#page-content-wrapper {\r\n  width: 100%;\r\n  position: absolute;\r\n  padding: 15px;\r\n}\r\n\r\n#wrapper.toggled #page-content-wrapper {\r\n  margin-right: -200px;\r\n}\r\n\r\n/* Sidebar Styles */\r\n\r\n.sidebar-nav {\r\n  position: absolute;\r\n  top: 0;\r\n  width: 200px;\r\n  margin: 0;\r\n  padding: 0;\r\n  list-style: none;\r\n}\r\n\r\n.sidebar-nav li {\r\n  text-indent: 20px;\r\n  line-height: 40px;\r\n}\r\n\r\n.sidebar-nav li a {\r\n  display: block;\r\n  text-decoration: none;\r\n  color: #999999;\r\n}\r\n\r\n.sidebar-nav li a:hover {\r\n  text-decoration: none;\r\n  color: #fff;\r\n  background: rgba(255, 255, 255, 0.2);\r\n}\r\n\r\n.sidebar-nav li a:active, .sidebar-nav li a:focus {\r\n  text-decoration: none;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand {\r\n  height: 65px;\r\n  font-size: 18px;\r\n  line-height: 60px;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand a {\r\n  color: #999999;\r\n}\r\n\r\n.sidebar-nav>.sidebar-brand a:hover {\r\n  color: #fff;\r\n  background: none;\r\n}\r\n\r\n@media(min-width:768px) {\r\n  #wrapper {\r\n    padding-left: 0;\r\n  }\r\n  #wrapper.toggled {\r\n    padding-left: 200px;\r\n  }\r\n  #sidebar-wrapper {\r\n    width: 0;\r\n  }\r\n  #wrapper.toggled #sidebar-wrapper {\r\n    width: 200px;\r\n  }\r\n  #page-content-wrapper {\r\n    position: relative;\r\n    margin-right: 0;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.html":
/*!************************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\" class=\"toggled\">\n\n  <!-- Sidebar -->\n  <div id=\"sidebar-wrapper\">\n    <ul class=\"sidebar-nav\">\n      <li class=\"sidebar-brand\">\n        <a>\n          Admin Menu\n        </a>\n      </li>\n      <li>\n        <a routerLink='/reservations'>Réservations</a>\n      </li>\n      <li>\n        <a routerLink='/ecrans'>Ecrans</a>\n      </li>\n      <li>\n        <a routerLink=\"/users\">Utilisateurs</a>\n      </li>\n      <li>\n        <a (click)='logout()'>Logout</a>\n      </li>\n    </ul>\n  </div>\n  <div id=\"page-content-wrapper\">\n    <div class=\"container-fluid\">\n      <ng-content></ng-content>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/admin/menu-admin/menu-admin.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/admin/menu-admin/menu-admin.component.ts ***!
  \**********************************************************/
/*! exports provided: MenuAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuAdminComponent", function() { return MenuAdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuAdminComponent = /** @class */ (function () {
    function MenuAdminComponent(router) {
        this.router = router;
        this.events = ['reservation', 'Ecrans', 'Utilisateurs'];
        this.shouldRun = [/(^|\.)plnkr\.co$/, /(^|\.)stackblitz\.io$/].some(function (h) { return h.test(window.location.host); });
    }
    MenuAdminComponent.prototype.ngOnInit = function () {
    };
    MenuAdminComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('login');
    };
    MenuAdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-admin',
            template: __webpack_require__(/*! ./menu-admin.component.html */ "./src/app/admin/menu-admin/menu-admin.component.html"),
            styles: [__webpack_require__(/*! ./menu-admin.component.css */ "./src/app/admin/menu-admin/menu-admin.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuAdminComponent);
    return MenuAdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/offres/offres.component.css":
/*!***************************************************!*\
  !*** ./src/app/admin/offres/offres.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/offres/offres.component.html":
/*!****************************************************!*\
  !*** ./src/app/admin/offres/offres.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  offres works!\n</p>\n"

/***/ }),

/***/ "./src/app/admin/offres/offres.component.ts":
/*!**************************************************!*\
  !*** ./src/app/admin/offres/offres.component.ts ***!
  \**************************************************/
/*! exports provided: OffresComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OffresComponent", function() { return OffresComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OffresComponent = /** @class */ (function () {
    function OffresComponent() {
    }
    OffresComponent.prototype.ngOnInit = function () {
    };
    OffresComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-offres',
            template: __webpack_require__(/*! ./offres.component.html */ "./src/app/admin/offres/offres.component.html"),
            styles: [__webpack_require__(/*! ./offres.component.css */ "./src/app/admin/offres/offres.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], OffresComponent);
    return OffresComponent;
}());



/***/ }),

/***/ "./src/app/admin/reservations/reservations.component.css":
/*!***************************************************************!*\
  !*** ./src/app/admin/reservations/reservations.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/reservations/reservations.component.html":
/*!****************************************************************!*\
  !*** ./src/app/admin/reservations/reservations.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin>\n<table class=\"table table-bordered table-dark\">\n    <thead>\n      <tr>\n        <th scope=\"col\">actions</th>\n        <th scope=\"col\">etat</th>\n        <th scope=\"col\">Date de reservation</th>\n        <th scope=\"col\">Date de debut</th>\n        <th scope=\"col\">Date de Fin</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let reservation of reservations\">\n        <th scope=\"row\" style=\"width: 110px;\">\n\n          <button mat-icon-button (click)=\"reservationAcceptBtn(reservation._id)\" data-toggle=\"modal\" data-target=\"#exampleModalEdit\">\n            <mat-icon>create</mat-icon>\n\n          </button>\n          <button mat-icon-button color=\"warn\" (click)=\"reservationRefusedBtn(reservation._id)\">\n            <mat-icon>delete</mat-icon>\n          </button>\n        </th>\n        <td>{{reservation.etat}}</td>\n        <td>{{reservation.dateRes  | date:'fullDate'}}</td>\n        <td>{{reservation.dateDebut  | date:'fullDate'}}</td>\n        <td>{{reservation.dateFin | date:'fullDate'}}</td>\n      </tr>\n\n\n    </tbody>\n  </table>\n</app-menu-admin>\n"

/***/ }),

/***/ "./src/app/admin/reservations/reservations.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/admin/reservations/reservations.component.ts ***!
  \**************************************************************/
/*! exports provided: ReservationsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationsComponent", function() { return ReservationsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ReservationsComponent = /** @class */ (function () {
    function ReservationsComponent(adminService, snackBar) {
        this.adminService = adminService;
        this.snackBar = snackBar;
    }
    ReservationsComponent.prototype.openSnackBar = function (message, action) {
        this.snackBar.open(message, action, {
            duration: 2000,
        });
    };
    ReservationsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('das macht');
        this.adminService.getlistReservation().subscribe(function (res) {
            console.log(res.json());
            _this.reservations = res.json();
        });
    };
    ReservationsComponent.prototype.reservationAcceptBtn = function (idreservation) {
        var _this = this;
        this.adminService.UpdateReservationEtat(idreservation, { etat: 'accepte' }).subscribe(function (res) {
            _this.openSnackBar('Modification', 'reservation accepté ');
        });
        this.ngOnInit();
    };
    ReservationsComponent.prototype.reservationRefusedBtn = function (idreservation) {
        var _this = this;
        this.adminService.UpdateReservationEtat(idreservation, { etat: 'refused' }).subscribe(function (res) {
            _this.openSnackBar('Modification', 'reservation refusée ');
            console.log('Etat reservation modifié ');
        });
        this.ngOnInit();
    };
    ReservationsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservations',
            template: __webpack_require__(/*! ./reservations.component.html */ "./src/app/admin/reservations/reservations.component.html"),
            styles: [__webpack_require__(/*! ./reservations.component.css */ "./src/app/admin/reservations/reservations.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_service__WEBPACK_IMPORTED_MODULE_1__["AdminService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]])
    ], ReservationsComponent);
    return ReservationsComponent;
}());



/***/ }),

/***/ "./src/app/admin/users/users.component.html":
/*!**************************************************!*\
  !*** ./src/app/admin/users/users.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-admin>\n\n\n  \n  <input #search class=\"search\" type=\"text\" placeholder=\"Search...\" (keydown.enter)=\"onSearch(search.value)\">\n  <ng2-smart-table [settings]=\"settings\" [source]=\"source\"></ng2-smart-table>\n\n</app-menu-admin>\n"

/***/ }),

/***/ "./src/app/admin/users/users.component.ts":
/*!************************************************!*\
  !*** ./src/app/admin/users/users.component.ts ***!
  \************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.settings = {
            columns: {
                id: {
                    title: 'ID',
                    filter: false
                },
                nom: {
                    title: ' nom',
                    filter: false
                },
                prenom: {
                    title: 'prenom',
                    filter: false
                },
                pass: {
                    title: 'pass',
                    filter: false
                },
                email: {
                    title: 'Email',
                    filter: false
                },
            }
        };
        this.data = [
            { 'id': 1,
                'nom': 'chehir',
                'prenom': 'dhwedi',
                'pass': 'fivepts',
                'email': 'fivepoints.com',
            }
        ];
        this.source = new ng2_smart_table__WEBPACK_IMPORTED_MODULE_1__["LocalDataSource"](this.data);
    }
    UsersComponent.prototype.onSearch = function (query) {
        if (query === void 0) { query = ''; }
        this.source.setFilter([
            // fields we want to include in the search
            {
                field: 'id',
                search: query
            },
            {
                field: 'Nom',
                search: query
            },
            {
                field: 'prenom',
                search: query
            },
            {
                field: 'pass',
                search: query
            },
            {
                field: 'email',
                search: query
            }
        ], false);
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: __webpack_require__(/*! ./users.component.html */ "./src/app/admin/users/users.component.html"),
            styles: ["\n    nb-card {\n      transform: translate3d(0, 0, 0);\n    }\n  "],
        }),
        __metadata("design:paramtypes", [])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _user_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user/home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _admin_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/reservations/reservations.component */ "./src/app/admin/reservations/reservations.component.ts");
/* harmony import */ var _admin_ecrans_ecrans_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/ecrans/ecrans.component */ "./src/app/admin/ecrans/ecrans.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user/list/list.component */ "./src/app/user/list/list.component.ts");
/* harmony import */ var _user_reservation_ecran_reservation_ecran_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/reservation-ecran/reservation-ecran.component */ "./src/app/user/reservation-ecran/reservation-ecran.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var routes = [{
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_2__["RegisterComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: 'home',
        component: _user_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]]
    },
    {
        path: 'reservations',
        component: _admin_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_5__["ReservationsComponent"],
        canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"], _guards_role_guard__WEBPACK_IMPORTED_MODULE_8__["RoleGuard"]],
        data: { roles: 'admin' }
    },
    {
        path: 'ecrans',
        component: _admin_ecrans_ecrans_component__WEBPACK_IMPORTED_MODULE_6__["EcransComponent"]
    },
    {
        path: 'users',
        component: _admin_users_users_component__WEBPACK_IMPORTED_MODULE_9__["UsersComponent"]
    },
    {
        path: 'historique',
        component: _user_list_list_component__WEBPACK_IMPORTED_MODULE_10__["ListComponent"]
    },
    {
        path: 'reservation/:id',
        component: _user_reservation_ecran_reservation_ecran_component__WEBPACK_IMPORTED_MODULE_11__["ReservationEcranComponent"]
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _guards_role_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guards/role.guard */ "./src/app/guards/role.guard.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ "./src/app/register/register.component.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./user/menu-user/menu-user.component */ "./src/app/user/menu-user/menu-user.component.ts");
/* harmony import */ var _user_list_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user/list/list.component */ "./src/app/user/list/list.component.ts");
/* harmony import */ var _user_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user/home/home.component */ "./src/app/user/home/home.component.ts");
/* harmony import */ var _user_reservation_ecran_reservation_ecran_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user/reservation-ecran/reservation-ecran.component */ "./src/app/user/reservation-ecran/reservation-ecran.component.ts");
/* harmony import */ var _admin_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/reservations/reservations.component */ "./src/app/admin/reservations/reservations.component.ts");
/* harmony import */ var _admin_ecrans_ecrans_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/ecrans/ecrans.component */ "./src/app/admin/ecrans/ecrans.component.ts");
/* harmony import */ var _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin/menu-admin/menu-admin.component */ "./src/app/admin/menu-admin/menu-admin.component.ts");
/* harmony import */ var _admin_offres_offres_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/offres/offres.component */ "./src/app/admin/offres/offres.component.ts");
/* harmony import */ var _admin_users_users_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/users/users.component */ "./src/app/admin/users/users.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var _services_admin_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/admin.service */ "./src/app/services/admin.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ng2-smart-table */ "./node_modules/ng2-smart-table/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _register_register_component__WEBPACK_IMPORTED_MODULE_8__["RegisterComponent"],
                _user_menu_user_menu_user_component__WEBPACK_IMPORTED_MODULE_11__["MenuUserComponent"],
                _user_list_list_component__WEBPACK_IMPORTED_MODULE_12__["ListComponent"],
                _user_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _admin_menu_admin_menu_admin_component__WEBPACK_IMPORTED_MODULE_17__["MenuAdminComponent"],
                _admin_users_users_component__WEBPACK_IMPORTED_MODULE_19__["UsersComponent"],
                _admin_reservations_reservations_component__WEBPACK_IMPORTED_MODULE_15__["ReservationsComponent"],
                _admin_ecrans_ecrans_component__WEBPACK_IMPORTED_MODULE_16__["EcransComponent"],
                _admin_offres_offres_component__WEBPACK_IMPORTED_MODULE_18__["OffresComponent"],
                _user_reservation_ecran_reservation_ecran_component__WEBPACK_IMPORTED_MODULE_14__["ReservationEcranComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_0__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_20__["BrowserAnimationsModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_21__["MaterialModule"],
                ng2_smart_table__WEBPACK_IMPORTED_MODULE_24__["Ng2SmartTableModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_9__["AuthService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_3__["AuthGuard"], _guards_role_guard__WEBPACK_IMPORTED_MODULE_4__["RoleGuard"], _services_admin_service__WEBPACK_IMPORTED_MODULE_22__["AdminService"], _services_user_service__WEBPACK_IMPORTED_MODULE_23__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = /** @class */ (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        if (localStorage.getItem('token')) {
            return true;
        }
        this.router.navigateByUrl('login');
        return false;
    };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/guards/role.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/role.guard.ts ***!
  \**************************************/
/*! exports provided: RoleGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleGuard", function() { return RoleGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt-simple */ "./node_modules/angular2-jwt-simple/index.js");
/* harmony import */ var angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RoleGuard = /** @class */ (function () {
    function RoleGuard(router) {
        this.router = router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var roles = next.data['roles'];
        var token = localStorage.getItem('token');
        var roleToken = angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_2__["decode"](token, 'my_pass').role;
        console.log("role token : " + roleToken);
        console.log("role guard : " + roles);
        if (roleToken === roles) {
            return true;
        }
        this.router.navigateByUrl('home');
        return false;
    };
    RoleGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], RoleGuard);
    return RoleGuard;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin: auto;\r\n  padding: 50px;\r\n  max-width: 500px;\r\n}\r\n\r\n.inputform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* padding: 5em; */\r\n}\r\n\r\n.button-row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.basic-container {\r\n  display: table;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: lightgray;\r\n}\r\n\r\n.form-container {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.title {\r\n  align-items: center;\r\n  display: flex;\r\n  margin: auto;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  font-size: 56px;\r\n  font-weight: 300;\r\n  line-height: 56px;\r\n}\r\n\r\nbutton {\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  line-height: 15px;\r\n  padding: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\">\n  <div class=\"form-container\">\n    <form [formGroup]=\"loginForm\" (ngSubmit)=\"btnLogin(loginForm)\">\n      <mat-card>\n        <mat-card-header>\n          <h1 class=\"title\">\n            <img src=\"https://ahmeddevhd.000webhostapp.com/wp-content/uploads/2017/07/logo-mediain-fi.png\">\n          </h1>\n        </mat-card-header>\n        <div class=\"inputform\">\n          <mat-form-field floatPlaceholder=\"auto\">\n            <input matInput formControlName=\"email\" type=\"text\" required placeholder=\"email\">\n          </mat-form-field>\n\n          <mat-form-field floatPlaceholder=\"auto\">\n            <input matInput formControlName=\"password\" type=\"password\" required placeholder=\"password\">\n          </mat-form-field>\n\n          <mat-error *ngIf=\"errMessage\">{{errMessage}}</mat-error>\n          <div class=\"button-row\">\n            <button mat-raised-button type=\"reset\" routerLink=\"/register\">Register</button>\n            <button mat-raised-button color=\"primary\" type=\"submit\">Login</button>\n          </div>\n        </div>\n      </mat-card>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular2-jwt-simple */ "./node_modules/angular2-jwt-simple/index.js");
/* harmony import */ var angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(5)])
        });
    };
    LoginComponent.prototype.btnLogin = function (f) {
        var _this = this;
        console.log(f.value);
        this.errMessage = '';
        console.log('Login work');
        this.authService.loginUser(f.value).subscribe(function (res) {
            console.log(res.json().message);
            if (res.json().message === 'ok') {
                localStorage.setItem('token', res.json().token);
                var role = angular2_jwt_simple__WEBPACK_IMPORTED_MODULE_3__["decode"](localStorage.getItem('token'), 'my_pass').role;
                console.log(role);
                if (role === 'admin') {
                    _this.router.navigateByUrl('reservations');
                }
                else if (role === 'user') {
                    _this.router.navigateByUrl('home');
                }
            }
            else {
                _this.errMessage = res.json().message;
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]],
            exports: [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatStepperModule"]],
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/register/register.component.css":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  margin: auto;\r\n  padding: 50px;\r\n  max-width: 500px;\r\n}\r\n\r\n.basic-container {\r\n  display: table;\r\n  position: absolute;\r\n  height: 100%;\r\n  width: 100%;\r\n  background-color: lightgray;\r\n}\r\n\r\n.form-container {\r\n  display: table-cell;\r\n  vertical-align: middle;\r\n}\r\n\r\n.inputform {\r\n  width: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  /* padding: 5em; */\r\n}\r\n\r\n.button-row {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n}\r\n\r\n.title {\r\n  align-items: center;\r\n  display: flex;\r\n  margin: auto;\r\n  padding-top: 40px;\r\n  padding-bottom: 40px;\r\n  font-size: 56px;\r\n  font-weight: 300;\r\n  line-height: 56px;\r\n}\r\n\r\nbutton {\r\n  font-size: 15px;\r\n  font-weight: 200;\r\n  line-height: 15px;\r\n  padding: 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/register/register.component.html":
/*!**************************************************!*\
  !*** ./src/app/register/register.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"basic-container\">\n  <div class=\"form-container\">\n    <form [formGroup]=\"registerForm\" (ngSubmit)=\"(registerForm)\">\n      <mat-card>\n        <mat-card-header>\n          <h1 class=\"title\">\n            Register\n          </h1>\n\n        </mat-card-header>\n\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"name\" type=\"text\" required placeholder=\"name\">\n        </mat-form-field>\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"lastname\" type=\"text\" required placeholder=\"lastname\">\n        </mat-form-field>\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"email\" type=\"email\" required placeholder=\"email\">\n        </mat-form-field>\n\n\n\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"adresse\" type=\"text\" required placeholder=\"Adresse\">\n        </mat-form-field>\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"tel\" type=\"number\" required placeholder=\"tel\">\n        </mat-form-field>\n\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"CIN\" type=\"number\" required placeholder=\"CIN\">\n        </mat-form-field>\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"poste\" type=\"text\" required placeholder=\"poste\">\n        </mat-form-field>\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"entreprise\" type=\"text\" required placeholder=\"entreprise\">\n        </mat-form-field>\n\n        <mat-form-field floatPlaceholder=\"auto\">\n          <input matInput formControlName=\"password\" type=\"password\" required placeholder=\"password\">\n        </mat-form-field>\n\n        <mat-error *ngIf=\" errMessage\">{{errMessage}}</mat-error>\n        <div class=\"button-row\">\n          <button mat-raised-button type=\"reset\" routerLink=\"/login\">You already have an account?</button>\n          <button mat-raised-button [disabled]=\"registerForm.invalid\" color=\"primary\" type=\"submit\">Register</button>\n        </div>\n      </mat-card>\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/register/register.component.ts":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            lastname: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            adresse: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            tel: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            CIN: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].max(99999999)]),
            poste: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            entreprise: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(20)])
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());

// ng s -o -p 4201 --host 0.0.0.0
// go to chrome and open 192.168.0.20:4201
// chehir@fivep.tn // 12345


/***/ }),

/***/ "./src/app/services/admin.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/admin.service.ts ***!
  \*******************************************/
/*! exports provided: AdminService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminService", function() { return AdminService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AdminService = /** @class */ (function () {
    function AdminService(http) {
        this.http = http;
    }
    AdminService.prototype.getAllUser = function () {
        var url = 'http://137.117.132.180:3000/api/listuser/list';
        return this.http.get(url);
    };
    AdminService.prototype.AddnewUser = function (user) {
        var url = 'http://137.117.132.180:3000/api/listuser/insert';
        return this.http.post(url, user);
    };
    AdminService.prototype.AddUser = function (user) {
        var url = 'http://137.117.132.180:3000/api/listuser/update';
        return this.http.put(url, user);
    };
    AdminService.prototype.delUser = function (user) {
        var url = 'http://137.117.132.180:3000/api/listuser/delete';
        return this.http.delete(url, user);
    };
    AdminService.prototype.getUserByUser = function (_idUser) {
        var url = 'http://137.117.132.180:3000/api/listuser/idUser';
        return this.http.get(url, _idUser);
    };
    AdminService.prototype.getAllEcrans = function () {
        var url = 'http://137.117.132.180:3000/api/ecrans';
        return this.http.get(url);
    };
    AdminService.prototype.AddnewEcran = function (ecran) {
        var url = 'http://137.117.132.180:3000/api/ecrans';
        return this.http.post(url, ecran);
    };
    AdminService.prototype.getEcranById = function (_idEcran) {
        var url = 'http://137.117.132.180:3000/api/ecrans/' + _idEcran;
        return this.http.get(url);
    };
    AdminService.prototype.getEcranByUser = function (_idUser) {
        var url = 'http://137.117.132.180:3000/api/ecrans/idUser';
        return this.http.get(url, _idUser);
    };
    /* GET reservation by userId */
    AdminService.prototype.getReservationByUser = function (_idUser) {
        var url = 'http://137.117.132.180:3000/api/reservations/byUser/idUser';
        return this.http.get(url, _idUser);
    };
    AdminService.prototype.getlistReservation = function () {
        var url = 'http://137.117.132.180:3000/api/reservations/';
        return this.http.get(url);
    };
    AdminService.prototype.UpdateReservationEtat = function (id, reser) {
        var url = 'http://137.117.132.180:3000/api/reservations/' + id;
        return this.http.put(url, reser);
    };
    AdminService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AdminService);
    return AdminService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.loginUser = function (loginUser) {
        var url = 'http://137.117.132.180:3000/auth/login';
        return this.http.post(url, loginUser);
    };
    AuthService.prototype.getregister = function (user) {
        return this.http.post('http://137.117.132.180:3000/auth/register', user);
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.addReservation = function (reservation) {
        var url = 'http://137.117.132.180:3000/api/reservations';
        return this.http.post(url, reservation);
    };
    UserService.prototype.listReservation = function () {
        var url = 'http://137.117.132.180:3000/api/reservations';
        return this.http.get(url);
    };
    UserService.prototype.getlistReservationByUser = function () {
        var url = 'http://137.117.132.180:3000/api/reservations/user_id';
        return this.http.get(url);
    };
    UserService.prototype.getEcrans = function () {
        return this.http.get('http://137.117.132.180:3000/api/ecrans');
    };
    UserService.prototype.getEcranById = function (idEcran) {
        return this.http.get('http://137.117.132.180:3000/api/ecrans/' + idEcran);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/home/home.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/home/home.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader.masthead {\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding-top: calc(7rem + 72px);\r\n  padding-bottom: 7rem;\r\n  background: linear-gradient(0deg, #ff6a00 0, #ee0979 100%);\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-attachment: scroll;\r\n  background-size: cover\r\n}\r\n\r\nheader.masthead .masthead-content {\r\n  z-index: 1;\r\n  position: relative\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-heading {\r\n  font-size: 4rem\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-subheading {\r\n  font-size: 2rem\r\n}\r\n\r\nheader.masthead .bg-circle {\r\n  z-index: 0;\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background: linear-gradient(0deg, #ee0979 0, #ff6a00 100%)\r\n}\r\n\r\nheader.masthead .bg-circle-1 {\r\n  height: 90rem;\r\n  width: 90rem;\r\n  bottom: -55rem;\r\n  left: -55rem\r\n}\r\n\r\nheader.masthead .bg-circle-2 {\r\n  height: 50rem;\r\n  width: 50rem;\r\n  top: -25rem;\r\n  right: -25rem\r\n}\r\n\r\nheader.masthead .bg-circle-3 {\r\n  height: 20rem;\r\n  width: 20rem;\r\n  bottom: -10rem;\r\n  right: 5%\r\n}\r\n\r\nheader.masthead .bg-circle-4 {\r\n  height: 30rem;\r\n  width: 30rem;\r\n  top: -5rem;\r\n  right: 35%\r\n}\r\n\r\n.container-cards{\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  flex-wrap: wrap;\r\n  width: 100%;\r\n  margin: auto;\r\n}\r\n\r\n.card-item{\r\n  margin: 5px;\r\n  flex: 0 0 32%;\r\n  padding: 10px\r\n}\r\n\r\n.card-img-top{\r\n  max-width: 320px;\r\n  max-height: 160px;\r\n  -o-object-fit: cover;\r\n     object-fit: cover;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/home/home.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/home/home.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-user></app-menu-user>\n\n\n<header class=\"masthead text-center text-white\">\n  <div class=\"masthead-content\">\n    <div class=\"container\">\n      <h1 class=\"masthead-heading mb-0\">One Page Wonder</h1>\n      <h2 class=\"masthead-subheading mb-0\">Will Rock Your Socks Off</h2>\n      <a href=\"#\" class=\"btn btn-primary btn-xl rounded-pill mt-5\">Learn More</a>\n    </div>\n  </div>\n  <div class=\"bg-circle-1 bg-circle\"></div>\n  <div class=\"bg-circle-2 bg-circle\"></div>\n  <div class=\"bg-circle-3 bg-circle\"></div>\n  <div class=\"bg-circle-4 bg-circle\"></div>\n</header>\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"p-5\">\n        <div>\n          <div class=\"container-cards\">\n\n            <div class=\"card-item\" *ngFor=\"let ecran of ecrans\">\n              <div class=\"card\" routerLink=\"/reservation/{{ecran._id}}\">\n                <img class=\"card-img-top\" src=\"{{ecran.pictureUrl || 'http://placehold.it/700x400'}} \" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                    <p class=\"card-text\">{{ecran.name}}</p>\n                    <p class=\"card-text\">{{ecran.emplacementPhysique}}</p>\n                    {{ecran.nSpotParIteration}} %\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/user/home/home.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/home/home.component.ts ***!
  \*********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(userService) {
        this.userService = userService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getEcrans().subscribe(function (res) {
            _this.ecrans = res.json();
            _this.ecrans.forEach(function (ecran) {
                if (ecran.nSpotParIteration < 6) {
                    ecran.nSpotParIteration = Number(((ecran.nSpotParIteration * 100) / 6).toFixed(2));
                }
                else {
                    ecran.nSpotParIteration = Number(((ecran.nSpotParIteration * 100) / 8).toFixed(2));
                }
            });
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/user/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/user/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/user/list/list.component.css":
/*!**********************************************!*\
  !*** ./src/app/user/list/list.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\nheader.masthead {\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding-top: calc(7rem + 72px);\r\n  padding-bottom: 7rem;\r\n  background: linear-gradient(0deg, #ff6a00 0, #ee0979 100%);\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-attachment: scroll;\r\n  background-size: cover\r\n}\r\n\r\nheader.masthead .masthead-content {\r\n  z-index: 1;\r\n  position: relative\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-heading {\r\n  font-size: 4rem\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-subheading {\r\n  font-size: 2rem\r\n}\r\n\r\nheader.masthead .bg-circle {\r\n  z-index: 0;\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background: linear-gradient(0deg, #ee0979 0, #ff6a00 100%)\r\n}\r\n\r\nheader.masthead .bg-circle-1 {\r\n  height: 90rem;\r\n  width: 90rem;\r\n  bottom: -55rem;\r\n  left: -55rem\r\n}\r\n\r\nheader.masthead .bg-circle-2 {\r\n  height: 50rem;\r\n  width: 50rem;\r\n  top: -25rem;\r\n  right: -25rem\r\n}\r\n\r\nheader.masthead .bg-circle-3 {\r\n  height: 20rem;\r\n  width: 20rem;\r\n  bottom: -10rem;\r\n  right: 5%\r\n}\r\n\r\nheader.masthead .bg-circle-4 {\r\n  height: 30rem;\r\n  width: 30rem;\r\n  top: -5rem;\r\n  right: 35%\r\n}\r\n\r\n.container-cards{\r\n    display: flex;\r\n    flex-flow: row wrap;\r\n    flex-wrap: wrap;\r\n    width: 100%;\r\n    margin: auto;\r\n  }\r\n\r\n.card-item{\r\n    margin: 5px;\r\n    flex: 0 0 32%;\r\n    padding: 10px\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/user/list/list.component.html":
/*!***********************************************!*\
  !*** ./src/app/user/list/list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-user></app-menu-user>\n\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"p-5\">\n        <div>\n          <div class=\"container-cards\">\n\n            <div class=\"card-item\" *ngFor=\"let ecran of ecrans\">\n              <div class=\"card\" routerLink=\"/reservation/1\">\n                <img class=\"card-img-top\" src=\"http://placehold.it/700x400\" alt=\"Card image cap\">\n                <div class=\"card-body\">\n                  <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                </div>\n              </div>\n\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<mat-paginator [length]=\"100\"\n              [pageSize]=\"10\"\n              [pageSizeOptions]=\"[5, 10, 25, 100]\">\n</mat-paginator>\n"

/***/ }),

/***/ "./src/app/user/list/list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/user/list/list.component.ts ***!
  \*********************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ListComponent = /** @class */ (function () {
    function ListComponent() {
        this.ecrans = [1, 1, 1, 1, 1];
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/user/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/user/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/user/menu-user/menu-user.component.css":
/*!********************************************************!*\
  !*** ./src/app/user/menu-user/menu-user.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n  font-family: Lato\r\n}\r\n\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n  font-family: Catamaran;\r\n  font-weight: 800 !important\r\n}\r\n\r\n.btn-xl {\r\n  text-transform: uppercase;\r\n  padding: 1.5rem 3rem;\r\n  font-size: .9rem;\r\n  font-weight: 700;\r\n  letter-spacing: .1rem\r\n}\r\n\r\n.bg-black {\r\n  background-color: #000 !important\r\n}\r\n\r\n.rounded-pill {\r\n  border-radius: 5rem\r\n}\r\n\r\n.navbar-custom {\r\n  padding-top: 1rem;\r\n  padding-bottom: 1rem;\r\n  background-color: rgba(0, 0, 0, .7)\r\n}\r\n\r\n.navbar-custom .navbar-brand {\r\n  text-transform: uppercase;\r\n  font-size: 1rem;\r\n  letter-spacing: .1rem;\r\n  font-weight: 700\r\n}\r\n\r\n.navbar-custom .navbar-nav .nav-item .nav-link {\r\n  text-transform: uppercase;\r\n  font-size: .8rem;\r\n  font-weight: 700;\r\n  letter-spacing: .1rem\r\n}\r\n\r\nheader.masthead {\r\n  position: relative;\r\n  overflow: hidden;\r\n  padding-top: calc(7rem + 72px);\r\n  padding-bottom: 7rem;\r\n  background: linear-gradient(0deg, #ff6a00 0, #ee0979 100%);\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-attachment: scroll;\r\n  background-size: cover\r\n}\r\n\r\nheader.masthead .masthead-content {\r\n  z-index: 1;\r\n  position: relative\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-heading {\r\n  font-size: 4rem\r\n}\r\n\r\nheader.masthead .masthead-content .masthead-subheading {\r\n  font-size: 2rem\r\n}\r\n\r\nheader.masthead .bg-circle {\r\n  z-index: 0;\r\n  position: absolute;\r\n  border-radius: 100%;\r\n  background: linear-gradient(0deg, #ee0979 0, #ff6a00 100%)\r\n}\r\n\r\nheader.masthead .bg-circle-1 {\r\n  height: 90rem;\r\n  width: 90rem;\r\n  bottom: -55rem;\r\n  left: -55rem\r\n}\r\n\r\nheader.masthead .bg-circle-2 {\r\n  height: 50rem;\r\n  width: 50rem;\r\n  top: -25rem;\r\n  right: -25rem\r\n}\r\n\r\nheader.masthead .bg-circle-3 {\r\n  height: 20rem;\r\n  width: 20rem;\r\n  bottom: -10rem;\r\n  right: 5%\r\n}\r\n\r\nheader.masthead .bg-circle-4 {\r\n  height: 30rem;\r\n  width: 30rem;\r\n  top: -5rem;\r\n  right: 35%\r\n}\r\n\r\n@media (min-width:992px) {\r\n  header.masthead {\r\n    padding-top: calc(10rem + 55px);\r\n    padding-bottom: 10rem\r\n  }\r\n  header.masthead .masthead-content .masthead-heading {\r\n    font-size: 6rem\r\n  }\r\n  header.masthead .masthead-content .masthead-subheading {\r\n    font-size: 4rem\r\n  }\r\n}\r\n\r\n.bg-primary {\r\n  background-color: #ee0979 !important\r\n}\r\n\r\n.btn-primary {\r\n  background-color: #ee0979;\r\n  border-color: #ee0979\r\n}\r\n\r\n.btn-primary:active,\r\n.btn-primary:focus,\r\n.btn-primary:hover {\r\n  background-color: #bd0760 !important;\r\n  border-color: #bd0760 !important\r\n}\r\n\r\n.btn-primary:focus {\r\n  box-shadow: 0 0 0 .2rem rgba(238, 9, 121, .5)\r\n}\r\n\r\n.btn-secondary {\r\n  background-color: #ff6a00;\r\n  border-color: #ff6a00\r\n}\r\n\r\n.btn-secondary:active,\r\n.btn-secondary:focus,\r\n.btn-secondary:hover {\r\n  background-color: #c50 !important;\r\n  border-color: #c50 !important\r\n}\r\n\r\n.btn-secondary:focus {\r\n  box-shadow: 0 0 0 .2rem rgba(255, 106, 0, .5)\r\n}\r\n"

/***/ }),

/***/ "./src/app/user/menu-user/menu-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/menu-user/menu-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark navbar-custom fixed-top\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" routerLink=\"/home\" >reservation App</a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarResponsive\" aria-controls=\"navbarResponsive\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarResponsive\">\r\n      <ul class=\"navbar-nav ml-auto\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"/historique\" >Historique</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"javascript:void(0)\" (click)=\"logout()\" >Log out</a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n"

/***/ }),

/***/ "./src/app/user/menu-user/menu-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/menu-user/menu-user.component.ts ***!
  \*******************************************************/
/*! exports provided: MenuUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuUserComponent", function() { return MenuUserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MenuUserComponent = /** @class */ (function () {
    function MenuUserComponent(router) {
        this.router = router;
    }
    MenuUserComponent.prototype.ngOnInit = function () {
    };
    MenuUserComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('login');
    };
    MenuUserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu-user',
            template: __webpack_require__(/*! ./menu-user.component.html */ "./src/app/user/menu-user/menu-user.component.html"),
            styles: [__webpack_require__(/*! ./menu-user.component.css */ "./src/app/user/menu-user/menu-user.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], MenuUserComponent);
    return MenuUserComponent;
}());



/***/ }),

/***/ "./src/app/user/reservation-ecran/reservation-ecran.component.css":
/*!************************************************************************!*\
  !*** ./src/app/user/reservation-ecran/reservation-ecran.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/user/reservation-ecran/reservation-ecran.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/user/reservation-ecran/reservation-ecran.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-menu-user></app-menu-user>\n\n\n<section>\n  <div class=\"container\">\n    <div class=\"row align-items-center\">\n      <div class=\"p-5\">\n        <div class=\"p-5\">\n          <div class=\"container\">\n\n            <!-- Page Heading -->\n            <h1 class=\"my-4\">{{ecran?.name}}\n              <small>Secondary Text</small>\n            </h1>\n\n            <!-- Project One -->\n            <div class=\"row\">\n              <div class=\"col-md-7\">\n                <div class=\"embed-responsive embed-responsive-16by9\">\n                  <iframe class=\"embed-responsive-item\" [src]=\"geturl(ecran.youtubeUrl)\" allowfullscreen></iframe>\n                </div>\n                <div>\n                  <h3>Project One</h3>\n                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium veniam exercitationem expedita laborum\n                    at voluptate. Labore, voluptates totam at aut nemo deserunt rem magni pariatur quos perspiciatis atque\n                    eveniet unde.</p>\n                </div>\n              </div>\n              <div class=\"col-md-5\">\n                <h3>Project One</h3>\n                <form>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputEmail4\">Email</label>\n                      <input type=\"email\" class=\"form-control\" id=\"inputEmail4\" placeholder=\"Email\">\n                    </div>\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputPassword4\">Password</label>\n                      <input type=\"password\" class=\"form-control\" id=\"inputPassword4\" placeholder=\"Password\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputAddress\">Address</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress\" placeholder=\"1234 Main St\">\n                  </div>\n                  <div class=\"form-group\">\n                    <label for=\"inputAddress2\">Address 2</label>\n                    <input type=\"text\" class=\"form-control\" id=\"inputAddress2\" placeholder=\"Apartment, studio, or floor\">\n                  </div>\n                  <div class=\"form-row\">\n                    <div class=\"form-group col-md-6\">\n                      <label for=\"inputCity\">City</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputCity\">\n                    </div>\n                    <div class=\"form-group col-md-4\">\n                      <label for=\"inputState\">State</label>\n                      <select id=\"inputState\" class=\"form-control\">\n                        <option selected>Choose...</option>\n                        <option>...</option>\n                      </select>\n                    </div>\n                    <div class=\"form-group col-md-2\">\n                      <label for=\"inputZip\">Zip</label>\n                      <input type=\"text\" class=\"form-control\" id=\"inputZip\">\n                    </div>\n                  </div>\n                  <div class=\"form-group\">\n                    <div class=\"form-check\">\n                      <input class=\"form-check-input\" type=\"checkbox\" id=\"gridCheck\">\n                      <label class=\"form-check-label\" for=\"gridCheck\">\n                        Check me out\n                      </label>\n                    </div>\n                  </div>\n                  <button type=\"submit\" class=\"btn btn-primary\">Sign in</button>\n                </form>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/user/reservation-ecran/reservation-ecran.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/user/reservation-ecran/reservation-ecran.component.ts ***!
  \***********************************************************************/
/*! exports provided: ReservationEcranComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReservationEcranComponent", function() { return ReservationEcranComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ReservationEcranComponent = /** @class */ (function () {
    function ReservationEcranComponent(route, userService, sanitizer) {
        var _this = this;
        this.route = route;
        this.userService = userService;
        this.sanitizer = sanitizer;
        route.params.subscribe(function (params) {
            _this.idEcran = params.id;
        });
    }
    ReservationEcranComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.idEcran);
        this.userService.getEcranById(this.idEcran).subscribe(function (res) {
            _this.ecran = res.json();
            _this.ecran.youtubeUrl = 'https://www.youtube.com/embed/' + _this.ecran.youtubeUrl;
        });
    };
    ReservationEcranComponent.prototype.geturl = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    ReservationEcranComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reservation-ecran',
            template: __webpack_require__(/*! ./reservation-ecran.component.html */ "./src/app/user/reservation-ecran/reservation-ecran.component.html"),
            styles: [__webpack_require__(/*! ./reservation-ecran.component.css */ "./src/app/user/reservation-ecran/reservation-ecran.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], ReservationEcranComponent);
    return ReservationEcranComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Administrator\Desktop\reservation-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map