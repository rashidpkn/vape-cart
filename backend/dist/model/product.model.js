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
exports.Product = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Product = class Product extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'Vape Monkey' }),
    __metadata("design:type", String)
], Product.prototype, "username", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'Vape Monkey' }),
    __metadata("design:type", String)
], Product.prototype, "storeName", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'tpquNGEnfDOqPlug2Nh7VdzgcJ33' }),
    __metadata("design:type", String)
], Product.prototype, "userId", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(15000) }),
    __metadata("design:type", String)
], Product.prototype, "subDescription", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.STRING(15000) }),
    __metadata("design:type", String)
], Product.prototype, "content", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING),
        defaultValue: ['https://delhi-vape.com/img/no-image.jpg'],
    }),
    __metadata("design:type", Array)
], Product.prototype, "images", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        defaultValue: 'Simple'
    }),
    __metadata("design:type", String)
], Product.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 'None' }),
    __metadata("design:type", String)
], Product.prototype, "category", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING),
        defaultValue: [],
    }),
    __metadata("design:type", Array)
], Product.prototype, "tags", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "parentSku", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "brand", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: [], type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.STRING) }),
    __metadata("design:type", Array)
], Product.prototype, "attributes", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: {}, type: sequelize_typescript_1.DataType.JSON }),
    __metadata("design:type", Object)
], Product.prototype, "variables", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], Product.prototype, "SKU", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Boolean)
], Product.prototype, "track", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ defaultValue: 20 }),
    __metadata("design:type", Number)
], Product.prototype, "quantity", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], Product.prototype, "regularPrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({ type: sequelize_typescript_1.DataType.FLOAT }),
    __metadata("design:type", Number)
], Product.prototype, "salePrice", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ARRAY(sequelize_typescript_1.DataType.JSON),
        defaultValue: [],
    }),
    __metadata("design:type", Array)
], Product.prototype, "reviews", void 0);
Product = __decorate([
    sequelize_typescript_1.Table
], Product);
exports.Product = Product;
//# sourceMappingURL=product.model.js.map