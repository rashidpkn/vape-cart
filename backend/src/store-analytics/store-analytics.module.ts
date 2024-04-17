import { Module } from '@nestjs/common';
import { StoreAnalyticsService } from './store-analytics.service';
import { StoreAnalyticsController } from './store-analytics.controller';

@Module({
  controllers: [StoreAnalyticsController],
  providers: [StoreAnalyticsService],
})
export class StoreAnalyticsModule {}
