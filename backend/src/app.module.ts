import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { OrdersModule } from './orders/orders.module';
import { InvoiceModule } from './invoice/invoice.module';


@Module({
  imports: [ProductModule, DatabaseModule, UploadModule,OrdersModule,InvoiceModule, ClientModule,  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
