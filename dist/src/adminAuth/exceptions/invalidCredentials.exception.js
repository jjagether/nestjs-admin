"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
class InvalidCredentials extends common_1.HttpException {
    constructor(email) {
        super('Invalid credentials', common_1.HttpStatus.UNAUTHORIZED);
        this.email = email;
    }
}
exports.default = InvalidCredentials;
//# sourceMappingURL=invalidCredentials.exception.js.map