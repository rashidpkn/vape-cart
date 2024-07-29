import { Controller, Get, Res } from '@nestjs/common';
import { join } from 'path';

@Controller()
export class ClientController {
  @Get('*')
  catchAll(@Res() res: any) {
    res.sendFile(join(__dirname, '../../../frontend/dist/index.html'));
  }
}