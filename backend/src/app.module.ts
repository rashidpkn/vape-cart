import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';


@Module({
  imports: [ProductModule, DatabaseModule, UploadModule, AppModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
