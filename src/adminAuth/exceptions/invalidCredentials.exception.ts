import { HttpException, HttpStatus } from '@nestjs/common';

class InvalidCredentials extends HttpException {
  constructor(public readonly email: string) {
    super('Invalid credentials', HttpStatus.UNAUTHORIZED);
  }
}

export default InvalidCredentials;
