"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var admin_service_1 = require("./admin.service");
describe('AdminService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [admin_service_1.AdminService]
        });
    });
    it('should be created', testing_1.inject([admin_service_1.AdminService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=admin.service.spec.js.map