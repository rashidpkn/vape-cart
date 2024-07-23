import { Controller, Delete, Param } from '@nestjs/common';
import { FirebaseService } from './firebase.service';

@Controller('firebase')
export class FirebaseController {
  constructor(private readonly firebaseService: FirebaseService) {}

  @Delete(':uid')
  async deleteUser(@Param('uid') uid: string): Promise<void> {
    await this.firebaseService.deleteUser(uid);
  }
}
