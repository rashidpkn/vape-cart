import { Body, Controller, Post } from '@nestjs/common';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  
  @Post('send')
  sendMail(@Body() body:{to:{email:string,username:string},subject:string,message:string}){
return this.mailService.sendMail(body)
  }


}
