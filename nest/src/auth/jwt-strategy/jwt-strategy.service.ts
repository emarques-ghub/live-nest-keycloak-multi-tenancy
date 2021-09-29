import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
  constructor(configService: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get('JWT_SECRET'),
    });
  }
  
// @Injectable()
// export class JwtStrategyService extends PassportStrategy(Strategy, 'jwt') {
//   constructor(configService: ConfigService) {
//     super({
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
//       ignoreExpiration: false,
// //      secretOrKey: "-----BEGIN PUBLIC KEY-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAl6Fu7zDVsCZQfT1bbZ1igjXO9VdHkJE+KOvMcOmrq0yvWhwDzL1intAwBwZPJPRV0mHMul1m9PPJKy+APiKYlrhMwUw/NuYkgWnXtls68sDNceyMNHSEHFmg4hUFiGTPllQ3H8t52XEhYK/wxSqAc0gOJa/jx2+esAxtKzop8vkVNT0fc+hIqgVqwuuWEpKOWX8mGxoJLlTDUCwONgqQSjHeBsBIy2HSnAwYAyzQda/DJ5AmGaod7Kd5HNVwQkVKlrNA4Hy9LIiWmMoKLrnLJl79hdJT+m6ytojXNX6heDg4WRsXHz48BDSOiCnb1s4qWpncNarC2gsB+GHTwLEV2QIDAQAB\n-----END PUBLIC KEY-----",
// //    secretOrKey: 'abcd123456',
//       secretOrKey: configService.get('JWT_SECRET'),
//     });
//   }

  async validate(payload) {
    return payload;
  }
}
