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
var forms_1 = require("@angular/forms");
var EcransComponent = /** @class */ (function () {
    function EcransComponent() {
    }
    EcransComponent.prototype.ngOnInit = function () {
        this.ecarnForm = new forms_1.FormGroup({
            nom: new forms_1.FormControl('', [forms_1.Validators.required]),
            Dimension: new forms_1.FormControl('', [forms_1.Validators.required]),
            Resolution: new forms_1.FormControl('', [forms_1.Validators.required, forms_1.Validators.email]),
            adresse: new forms_1.FormControl('', [forms_1.Validators.required]),
            iteration: new forms_1.FormControl('', [forms_1.Validators.required]),
        });
    };
    EcransComponent = __decorate([
        core_1.Component({
            selector: 'app-ecrans',
            templateUrl: './ecrans.component.html',
            styleUrls: ['./ecrans.component.css']
        }),
        __metadata("design:paramtypes", [])
    ], EcransComponent);
    return EcransComponent;
}());
exports.EcransComponent = EcransComponent;
//# sourceMappingURL=ecrans.component.js.map