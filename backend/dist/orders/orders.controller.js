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
exports.OrdersController = void 0;
const common_1 = require("@nestjs/common");
const orders_service_1 = require("./orders.service");
let OrdersController = class OrdersController {
    constructor(ordersService) {
        this.ordersService = ordersService;
    }
    async createOrder(req) {
        try {
            const { items, subTotal, shipping, discount, totalAmount, totalQuantity, customer, shippingAddress, } = req.body;
            if (!items.length || !customer || !shippingAddress) {
                throw new common_1.BadRequestException('iteams , customer,shippindAddress are mandatory');
            }
            return this.ordersService.createOrder(items, subTotal, shipping, discount, totalAmount, totalQuantity, customer, shippingAddress);
        }
        catch (error) {
            throw error;
        }
    }
    async getAllOders(req) {
        try {
            return this.ordersService.getAllOders();
        }
        catch (error) {
            throw error;
        }
    }
    async getSingleOrder(req) {
        try {
            const { id } = req.params;
            if (isNaN(id)) {
                throw new common_1.BadRequestException('id must be a number');
            }
            return this.ordersService.getSingleOrder(id);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOrder(req) {
        try {
            const { id } = req.body;
            return this.ordersService.deleteOrder(id);
        }
        catch (error) {
            throw error;
        }
    }
    async updateOrders(req) {
        try {
            return this.ordersService.updateOrders();
        }
        catch (error) {
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "createOrder", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getAllOders", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "getSingleOrder", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "deleteOrder", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], OrdersController.prototype, "updateOrders", null);
OrdersController = __decorate([
    (0, common_1.Controller)('orders'),
    __metadata("design:paramtypes", [orders_service_1.OrdersService])
], OrdersController);
exports.OrdersController = OrdersController;
//# sourceMappingURL=orders.controller.js.map