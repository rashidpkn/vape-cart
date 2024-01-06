"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreAnalyticsController = void 0;
const common_1 = require("@nestjs/common");
const store_analytics_service_1 = require("./store-analytics.service");
const storeAnalytics_model_1 = require("../model/storeAnalytics.model");
let StoreAnalyticsController = class StoreAnalyticsController {
    constructor(storeAnalyticsService) {
        this.storeAnalyticsService = storeAnalyticsService;
    }
    async getstoreAnalatics(req) {
        try {
            const { name, storeName } = req.query;
            const where = {};
            if (name)
                where.name = name;
            if (storeName)
                where.storeName = storeName;
            const analytics = await storeAnalytics_model_1.StoreAnalytics.findAll({ where });
            return analytics;
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], StoreAnalyticsController.prototype, "getstoreAnalatics", null);
StoreAnalyticsController = __decorate([
    (0, common_1.Controller)('store-analytics'),
    __metadata("design:paramtypes", [store_analytics_service_1.StoreAnalyticsService])
], StoreAnalyticsController);
exports.StoreAnalyticsController = StoreAnalyticsController;
//# sourceMappingURL=store-analytics.controller.js.map