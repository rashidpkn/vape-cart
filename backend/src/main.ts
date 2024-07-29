import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  json,
  Request,
  Response,
  static as static_,
  urlencoded,
} from 'express';
import { join } from 'path';
import * as compression from 'compression';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({origin:"*"});
  app.use(json({ limit: '50mb' }));
  app.use(urlencoded({ extended: true, limit: '50mb' }));

  app.use(compression());

  app.use(
    '/assets',
    (req: Request, res: Response, next: Function) => {
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
      next();
    },
    static_(join(__dirname, '..', '..', 'frontend', 'dist', 'assets')),
  );

  app.use(static_(join(__dirname, '..', '..', 'frontend', 'dist')));

  // console.log(join(__dirname, '..','..','frontend','dist'));

  await app.listen(3000);
}
bootstrap();
