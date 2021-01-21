import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, Inject } from '@nestjs/common';
import InvalidCredentials from './exceptions/invalidCredentials.exception';
import { injectionTokens } from '../tokens';
import { CredentialValidator } from './adminAuth.module';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'admin-local') {
  constructor(
    @Inject(injectionTokens.ADMIN_AUTH_CREDENTIAL_VALIDATOR)
    private readonly credentialValidator: CredentialValidator,
  ) {
    super({ usernameField: 'email' });
  }

  async validate(email: string, password: string) {
    const adminUser = await this.credentialValidator(email, password);
    if (!adminUser) {
      throw new InvalidCredentials(email);
    }
    return adminUser;
  }
}
