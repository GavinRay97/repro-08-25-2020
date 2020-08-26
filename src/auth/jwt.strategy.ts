import { ExtractJwt, Strategy } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'my-secret',
    })
  }

  /**
   * Recall again that Passport will build a user object based on the return value of our validate() method, and attach it as a property on the Request object.
   * It's also worth pointing out that this approach leaves us room ('hooks' as it were) to inject other business logic into the process.
   *
   * For example, we could do a database lookup in our validate() method to extract more information about the user, resulting in a more enriched user object being available in our Request.
   * This is also the place we may decide to do further token validation, such as looking up the userId in a list of revoked tokens, enabling us to perform token revocation.
   */
  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username }
  }
}
