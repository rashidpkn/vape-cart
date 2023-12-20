"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("sequelize");
const product_model_1 = require("../model/product.model");
let ProductService = class ProductService {
    async createProduct(name, username, storeName, userId, subDescription, content, images, SKU, quantity, category, colors, tags, regularPrice, salePrice, tax, publish) {
        try {
            const found = await product_model_1.Product.findOne({ where: { name } });
            if (found)
                throw new common_1.BadRequestException('Product already exist');
            const product = await product_model_1.Product.create({
                name, username, storeName, userId,
                subDescription, content,
                images, SKU, quantity,
                category, colors, tags,
                regularPrice, salePrice, tax, publish
            });
            return { product, message: "Product is created" };
        }
        catch (error) {
            throw error;
        }
    }
    async getAllProduct(query) {
        try {
            const { username, userId, name, category, inStock, publish, draft, perPage = 20, pageNo = 1, sortBy } = query;
            let where = {};
            let order = [];
            if (username)
                where.username = username;
            if (userId)
                where.userId = userId;
            if (name)
                where.name = { [sequelize_1.Op.iLike]: `%${name}%` };
            if (category)
                where.category = category;
            if (inStock)
                where.quantity = { [sequelize_1.Op.gt]: 0, };
            if (publish)
                where.publish = true;
            if (draft)
                where.publish = false;
            if (sortBy === 'priceDesc') {
                order = ['salePrice', 'DESC'];
            }
            if (sortBy === 'priceAsc') {
                order = ['salePrice', 'ASC'];
            }
            const count = await product_model_1.Product.count({ where });
            const products = await product_model_1.Product.findAll(Object.assign({ where, limit: perPage, offset: perPage * (pageNo - 1) }, (order.length && { order: [order] })));
            return { products, count };
        }
        catch (error) {
            return error;
        }
    }
    async getById(id) {
        try {
            const product = await product_model_1.Product.findOne({ where: { id } });
            if (!product) {
                throw new common_1.BadRequestException("Product not found");
            }
            return product;
        }
        catch (error) {
            throw error;
        }
    }
    async updateProduct(update) {
        try {
            const found = await product_model_1.Product.findOne({ where: { id: update.id } });
            if (!found) {
                throw new common_1.BadRequestException('Product not found');
            }
            const product = await product_model_1.Product.update(update, { where: { id: update.id } });
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProducts(ids) {
        try {
            const product = await product_model_1.Product.destroy({ where: { id: ids } });
            return { message: "Products are deleted" };
        }
        catch (error) {
            throw error;
        }
    }
    async deleteProduct(id) {
        try {
            const product = await product_model_1.Product.destroy({ where: { id } });
            return { message: "Product is deleted" };
        }
        catch (error) {
            throw error;
        }
    }
    async productReview(id, rating, review, name, email) {
        try {
            let product = await product_model_1.Product.findOne({ where: { id } });
            if (!product)
                throw new common_1.BadRequestException("Product not found");
            let reviews = [...product.reviews, { rating, review, name, email }];
            let updatedProduct = await product_model_1.Product.update({ reviews }, { where: { id } });
            return { message: "Review updated" };
        }
        catch (error) {
            throw error;
        }
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)()
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map