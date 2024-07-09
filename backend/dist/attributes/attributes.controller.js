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
exports.AttributesController = void 0;
const common_1 = require("@nestjs/common");
const attributes_service_1 = require("./attributes.service");
const attributes_model_1 = require("../model/attributes.model");
let AttributesController = class AttributesController {
    constructor(attributesService) {
        this.attributesService = attributesService;
    }
    async add({ username, attribute, value }) {
        try {
            if (!username || !attribute || !value) {
                throw new common_1.BadRequestException("username, attribute and value are mandiatary");
            }
            const found = await attributes_model_1.Attributes.findOne({ where: { attribute, value } });
            if (found) {
                throw new common_1.BadRequestException("Attribute already added");
            }
            await attributes_model_1.Attributes.create({ username, attribute, value });
            return ({
                message: "new attribute saved"
            });
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }
    async get() {
        try {
            return await attributes_model_1.Attributes.findAll();
        }
        catch (error) {
            console.log(error.message);
            throw error;
        }
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AttributesController.prototype, "add", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], AttributesController.prototype, "get", null);
AttributesController = __decorate([
    (0, common_1.Controller)('attributes'),
    __metadata("design:paramtypes", [attributes_service_1.AttributesService])
], AttributesController);
exports.AttributesController = AttributesController;
//# sourceMappingURL=attributes.controller.js.map