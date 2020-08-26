import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common'
import { AppService } from './app.service'

import type { FastifyRequest } from 'fastify'

import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { CustomAuthGuard, MyAuthGuardClass } from './auth/custom-auth.guard'

import { AuthService } from './auth/auth.service';

@Controller('/app')
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(MyAuthGuardClass)
  @Post('auth/login')
  async login(@Request() req: FastifyRequest & { user: any} ): Promise<any> {
    console.log('req.user in AppController.login() is:', req.user)
    return this.authService.login(req.user);
  }

  @Get('/')
  getHello(@Request() req: FastifyRequest): string {
    console.log('Fastify request:', req)
    return 'hello'
  }
}
