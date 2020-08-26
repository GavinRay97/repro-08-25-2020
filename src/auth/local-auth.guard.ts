import { Injectable } from '@nestjs/common'
import { AuthGuard } from '@nestjs/passport'

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
export class LocalAuthGuard extends AuthGuard('local') {}
