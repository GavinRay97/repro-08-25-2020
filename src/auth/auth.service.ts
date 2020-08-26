import { Injectable } from '@nestjs/common'

@Injectable()
export class AuthService {
  async login(user: any) {
    const payload = { username: user.username, sub: 1 }
    return {
      access_token: 1,
    }
  }

  async validateUser(username: string, pass: string): Promise<any> {
    return await { username, pass }
  }
}
