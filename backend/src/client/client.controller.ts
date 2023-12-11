import { Controller, Get, Res } from '@nestjs/common';
import { ClientService } from './client.service';
import { join } from 'path';

@Controller()
export class ClientController {
  constructor(private readonly clientService: ClientService) {}
  @Get('*')
  catchAll(@Res() res: any) {
    
    res.sendFile(join(__dirname, '..', '..','..', 'frontend', 'dist', 'index.html'));
  }
}
