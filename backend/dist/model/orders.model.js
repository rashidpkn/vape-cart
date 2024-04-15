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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Orders = class Orders extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON) }),
    __metadata("design:type", Array)
], Orders.prototype, "items", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Orders.prototype, "subTotal", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Orders.prototype, "shipping", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Orders.prototype, "discount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Orders.prototype, "totalAmount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Orders.prototype, "totalQuantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Orders.prototype, "customer", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Orders.prototype, "delivery", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Orders.prototype, "shippingAddress", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), defaultValue: 'Cash' }),
    __metadata("design:type", String)
], Orders.prototype, "paymentType", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), defaultValue: 'Order received' }),
    __metadata("design:type", String)
], Orders.prototype, "status", void 0);
Orders = __decorate([
    sequelize_typescript_1.Table
], Orders);
exports.Orders = Orders;
//# sourceMappingURL=orders.model.js.map