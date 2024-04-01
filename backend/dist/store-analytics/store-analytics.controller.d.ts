import { StoreAnalyticsService } from './store-analytics.service';
import { Request } from 'express';
import { StoreAnalytics } from 'src/model/storeAnalytics.model';
export declare class StoreAnalyticsController {
    private readonly storeAnalyticsService;
    constructor(storeAnalyticsService: StoreAnalyticsService);
    getstoreAnalatics(req: Request): Promise<StoreAnalytics[]>;
}
