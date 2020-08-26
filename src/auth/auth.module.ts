import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { JwtStrategy } from './jwt.strategy'
import { PassportModule } from '@nestjs/passport'
import { JwtModule } from '@nestjs/jwt'
import { LocalStrategy } from './local.strategy'
import { MyAuthGuardClass } from './custom-auth.guard'

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'my-secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthService, MyAuthGuardClass, LocalStrategy, JwtStrategy],
  exports: [
    AuthService,
    JwtModule.register({
      secret: 'my-secret',
      signOptions: { expiresIn: '60s' },
    }),
  ],
})
export class AuthModule {}
