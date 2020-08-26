import { AppModule } from './app.module'
import { NestFactory } from '@nestjs/core'
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify'
import { AuthModule } from './auth/auth.module'
import { SpelunkerModule } from 'nestjs-spelunker'

async function bootstrap() {
  console.log('spelunker:', SpelunkerModule)
  // Uncomment to break
  // const authDeps = await SpelunkerModule.debug(AuthModule)

  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ logger: true }),
  )
  await app.listen(3001, '0.0.0.0')
}

bootstrap()
