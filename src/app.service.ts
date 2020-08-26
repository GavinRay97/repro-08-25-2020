import { Injectable } from '@nestjs/common'

@Injectable()
export class AppService {
  getHello(): string {
    throw new Error('threw error here')
    return 'Hello World! 141542'
  }
}
