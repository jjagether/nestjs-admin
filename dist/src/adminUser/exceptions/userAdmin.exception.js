"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DuplicateEmailException = void 0;
class DuplicateEmailException extends Error {
    constructor(email) {
        super(`There is already an AdminUser with this email: ${email}`);
    }
}
exports.DuplicateEmailException = DuplicateEmailException;
//# sourceMappingURL=userAdmin.exception.js.map