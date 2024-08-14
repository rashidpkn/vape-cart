import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { OrdersModule } from './orders/orders.module';
import { InvoiceModule } from './invoice/invoice.module';
import { StoreAnalyticsModule } from './store-analytics/store-analytics.module';
import { PayoutModule } from './payout/payout.module';
import { CustomersModule } from './customers/customers.module';
import { AttributesModule } from './attributes/attributes.module';
import { NotificationsModule } from './notifications/notifications.module';
import { FirebaseModule } from './firebase/firebase.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ProductModule,
    DatabaseModule,
    UploadModule,
    OrdersModule,
    InvoiceModule,
    StoreAnalyticsModule,
    PayoutModule,
    CustomersModule,
    AttributesModule,
    NotificationsModule,
    // ClientModule,
    FirebaseModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','..','..','frontend','dist'),
    })
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}

console.log('Serving static files from:', join(__dirname, '..', '..', '..', 'frontend', 'dist'));

