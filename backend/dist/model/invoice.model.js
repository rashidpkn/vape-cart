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
exports.Invoice = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Invoice = class Invoice extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Invoice.prototype, "invoiceTo", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.JSON, defaultValue: {
            company: 'Vape Amazon',
            email: 'info@vapeamazon.com',
            fullAddress: 'vape amazon ,delhi',
            name: 'vape Monkey',
            phoneNumber: '123456',
        } }),
    __metadata("design:type", Object)
], Invoice.prototype, "invoiceFrom", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON) }),
    __metadata("design:type", Array)
], Invoice.prototype, "items", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Invoice.prototype, "subTotal", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Invoice.prototype, "shipping", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Invoice.prototype, "discount", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], Invoice.prototype, "totalAmount", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(20), defaultValue: 'draft' }),
    __metadata("design:type", String)
], Invoice.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.DATE
    }),
    __metadata("design:type", Date)
], Invoice.prototype, "dueDate", void 0);
Invoice = __decorate([
    sequelize_typescript_1.Table
], Invoice);
exports.Invoice = Invoice;
//# sourceMappingURL=invoice.model.js.map