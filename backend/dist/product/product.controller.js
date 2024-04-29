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
exports.ProductController = void 0;
const common_1 = require("@nestjs/common");
const product_service_1 = require("./product.service");
const product_model_1 = require("../model/product.model");
let ProductController = class ProductController {
    constructor(productService) {
        this.productService = productService;
    }
    async createProduct(req) {
        try {
            const { name, username, storeName, userId, subDescription, content, images, SKU, quantity = 1, category, colors, tags, regularPrice, salePrice, tax, publish, type, attributes } = req.body;
            if (!name || !username || !storeName || !SKU || !category || !salePrice) {
                throw new common_1.BadRequestException('Name ,Username,SKU,category, and salePrice are mandatory');
            }
            return this.productService.createProduct(name, username, storeName, userId, subDescription, content, images, SKU, quantity, category, colors, tags, regularPrice, salePrice, tax, publish, type, attributes);
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async getAllProduct(req) {
        try {
            const query = req.query;
            return this.productService.getAllProduct(query);
        }
        catch (error) {
            console.log(error);
            throw error;
        }
    }
    async exportProduct(req) {
        try {
            const product = await product_model_1.Product.findAll({
                attributes: {
                    exclude: [
                        'id',
                        'createdAt',
                        'updatedAt',
                        'reviews',
                        'publish',
                        'tax',
                        'tags',
                        'colors',
                        'content',
                    ],
                },
                offset: 0,
                limit: 1,
            });
            return product;
        }
        catch (error) { }
    }
    async importProduct(req) {
        try {
            console.log('Uploading');
            const products = req.body;
            await product_model_1.Product.bulkCreate(products);
            console.log('Uploaded');
            return ' Done';
        }
        catch (error) {
            throw error;
        }
    }
    async getById(req) {
        try {
            const { id } = req.params;
            const { count } = req.query;
            if (isNaN(id))
                throw new common_1.BadRequestException('Id is not valid');
            return this.productService.getById(id, count);
        }
        catch (error) {
            throw error;
        }
    }
    async updateProduct(req) {
        try {
            const body = req.body;
            return this.productService.updateProduct(body);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProducts(req) {
        try {
            const { ids } = req.body;
            if (!ids.length) {
                throw new common_1.BadRequestException('Ids array has zero elements');
            }
            return this.productService.deleteProducts(ids);
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProduct(req) {
        try {
            const { id } = req.params;
            if (isNaN(id))
                throw new common_1.BadRequestException('Id is not valid');
            return this.productService.deleteProduct(id);
        }
        catch (error) {
            throw error;
        }
    }
    async productReview(req) {
        try {
            const { rating, review, name, email, id } = req.body;
            if (!rating || !review || !name || !email || !id)
                throw new common_1.BadRequestException('rating, review, name, email,id are mandiatary');
            return this.productService.productReview(id, rating, review, name, email);
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
], ProductController.prototype, "createProduct", null);
__decorate([
    (0, common_1.Get)(''),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getAllProduct", null);
__decorate([
    (0, common_1.Get)('/export'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "exportProduct", null);
__decorate([
    (0, common_1.Post)('/import'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "importProduct", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "getById", null);
__decorate([
    (0, common_1.Patch)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "updateProduct", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProducts", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "deleteProduct", null);
__decorate([
    (0, common_1.Post)('/review'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ProductController.prototype, "productReview", null);
ProductController = __decorate([
    (0, common_1.Controller)('products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductController);
exports.ProductController = ProductController;
//# sourceMappingURL=product.controller.js.map