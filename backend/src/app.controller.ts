import { Controller, Get, Param, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { join } from 'path';

@Controller('')
export class AppController {
  constructor(private readonly appService: AppService) {}


  @Get('/uploads/:file')
  servePublicFile(@Param('file') file: string, @Res() res: any) {
    try {
      const filePath = join(__dirname, '..', 'uploads', file);
      return res.sendFile(filePath);
    } catch (error) {
      throw error
    }
  }

  
}
