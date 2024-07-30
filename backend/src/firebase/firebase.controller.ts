import { Body, Controller, Delete, Param, Post } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Delete(':uid')
  async deleteUser(@Param('uid') uid: string): Promise<void> {
    await this.firebaseService.deleteUser(uid);
  }

  @Post('resend_verification_email')
  async resendVerificationEmail(@Body('email') email: string){
    return await this.firebaseService.resendVerificationEmail(email)
  }

}
