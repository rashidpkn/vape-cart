import { Module } from '@nestjs/common';
import { ProductModule } from './product/product.module';
import { DatabaseModule } from './database/database.module';
import { UploadModule } from './upload/upload.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientModule } from './client/client.module';
import { OrdersModule } from './orders/orders.module';
import { InvoiceModule } from './invoice/invoice.module';
import { StoreAnalyticsModule } from './store-analytics/store-analytics.module';
import { PayoutModule } from './payout/payout.module';
import { CustomersModule } from './customers/customers.module';
import { AttributesModule } from './attributes/attributes.module';

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
    ClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
