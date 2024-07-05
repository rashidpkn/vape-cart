"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomersService = void 0;
const common_1 = require("@nestjs/common");
const customers_model_1 = require("../model/customers.model");
let CustomersService = class CustomersService {
    async create(createCustomerDto) {
        try {
            const found = await customers_model_1.Customers.findOne({
                where: { email: createCustomerDto.email },
            });
            if (found) {
                if (found.password === createCustomerDto.password) {
                    return { message: 'Login successfull', customer: found };
                }
                throw new common_1.BadRequestException('Check your email and password');
            }
            if (!createCustomerDto.fName) {
                throw new common_1.BadRequestException('Account not existed');
            }
            const customer = await customers_model_1.Customers.create(Object.assign({}, createCustomerDto));
            return { message: 'Account created', customer };
        }
        catch (error) {
            throw error;
        }
    }
    async findAll() {
        try {
            return await customers_model_1.Customers.findAll();
        }
        catch (error) {
            throw error;
        }
    }
    async findOne(id) {
        try {
            return await customers_model_1.Customers.findOne({ where: { id } });
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updateCustomerDto) {
        try {
            await customers_model_1.Customers.update(updateCustomerDto, { where: { id } });
            return { message: 'Updated' };
        }
        catch (error) { }
    }
    async remove(id) {
        try {
            await customers_model_1.Customers.destroy({ where: { id } });
        }
        catch (error) { }
    }
};
CustomersService = __decorate([
    (0, common_1.Injectable)()
], CustomersService);
exports.CustomersService = CustomersService;
//# sourceMappingURL=customers.service.js.map