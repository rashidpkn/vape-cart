import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {Request, Response, static as static_} from 'express'
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{cors:{origin:'*'}});
  
  app.use('/assets', (req: Request, res: Response, next: Function) => {
    res.setHeader('Cache-Control', 'public, max-age=31536000'); // Cache for 1 year
    next();
  }, static_(join(__dirname, '..', '..', 'frontend', 'dist','assets')));

  

  app.use(static_(join(__dirname, '..','..','frontend','dist')));

  // console.log(join(__dirname, '..','..','frontend','dist'));

  await app.listen(3000);
}
bootstrap();
