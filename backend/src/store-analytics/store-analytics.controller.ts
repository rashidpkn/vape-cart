import { Controller, Get, Req } from '@nestjs/common';
import { StoreAnalyticsService } from './store-analytics.service';
import { Request } from 'express';
import { StoreAnalytics } from 'src/model/storeAnalytics.model';

@Controller('store-analytics')
export class StoreAnalyticsController {
  constructor(private readonly storeAnalyticsService: StoreAnalyticsService) {}

  @Get()
  async getstoreAnalatics(@Req() req: Request) {
    try {
      const { name, storeName } = req.query;
      const where: any = {};

      if (name) where.name = name;
      if (storeName) where.storeName = storeName;
      const analytics = await StoreAnalytics.findAll({ where });

      return analytics;
    } catch (error) {
      throw error;
    }
  }
}
