"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var role_guard_1 = require("./role.guard");
describe('RoleGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [role_guard_1.RoleGuard]
        });
    });
    it('should ...', testing_1.inject([role_guard_1.RoleGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=role.guard.spec.js.map