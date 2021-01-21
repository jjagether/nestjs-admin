import { HttpException } from '@nestjs/common';
declare class InvalidCredentials extends HttpException {
    readonly email: string;
    constructor(email: string);
}
export default InvalidCredentials;
