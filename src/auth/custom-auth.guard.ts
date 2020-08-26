import { ExecutionContext, Injectable, CanActivate } from '@nestjs/common'
import { AuthGuard, PassportStrategy } from '@nestjs/passport'
import { AuthService } from './auth.service'
import { JwtService } from '@nestjs/jwt'

/**
 * Note: AuthGuard('<name>') uses the name of the strategy registered in strategy modules (see example)
 * Creating these guard modules is an alternative way of doing: @UseGuards(AuthGuard('local'))
 * Instead of strings, these guards are exported and used by name directly, IE: @UseGuards(LocalAuthGuard)
 *
 * @example
 * // local.strategy.ts
 * export class LocalStrategy extends PassportStrategy(Strategy, 'local')
 */
@Injectable()
export class CustomAuthGuard extends AuthGuard('custom') {
  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest()
    const res = ctx.switchToHttp().getResponse()

    console.log('req:', req)
    req.user = { username: req.body.email, password: req.body.password }

    return true
  }
}

@Injectable()
export class MyAuthGuardClass implements CanActivate {
  constructor(private jwtService: JwtService) {}

  canActivate(ctx: ExecutionContext) {
    const req = ctx.switchToHttp().getRequest()
    console.log('req:', req)
    console.log('JWTService:', this.jwtService)
    return true
  }
}
