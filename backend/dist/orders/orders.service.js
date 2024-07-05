"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const invoice_model_1 = require("../model/invoice.model");
const orders_model_1 = require("../model/orders.model");
let OrdersService = class OrdersService {
    async createOrder(items, subTotal, shipping, discount, totalAmount, totalQuantity, customer, shippingAddress) {
        try {
            const dueDate = new Date(new Date().setDate(new Date().getDate() + 5));
            await orders_model_1.Orders.create({
                items,
                subTotal,
                shipping,
                discount,
                totalAmount,
                totalQuantity,
                customer,
                shippingAddress,
            });
            await invoice_model_1.Invoice.create({
                items,
                subTotal,
                shipping,
                discount,
                totalAmount,
                totalQuantity,
                invoiceTo: {
                    email: customer.email,
                    fullAddress: shippingAddress.fullAddress,
                    name: customer.name,
                    phoneNumber: shippingAddress.phoneNumber,
                },
                dueDate,
            });
            return { message: 'Order is successfully placed' };
        }
        catch (error) {
            throw error;
        }
    }
    async getAllOders(query) {
        try {
            const orders = await orders_model_1.Orders.findAll();
            if (!!query.email) {
                return orders.filter((order) => order.customer.email === query.email);
            }
            return orders;
        }
        catch (error) {
            throw error;
        }
    }
    async getSingleOrder(id) {
        try {
            const orders = await orders_model_1.Orders.findOne({ where: { id } });
            if (!orders) {
                throw new common_1.NotFoundException('Order is not found');
            }
            return orders;
        }
        catch (error) {
            throw error;
        }
    }
    async deleteOrder(id) {
        try {
            await orders_model_1.Orders.destroy({ where: { id } });
            return { message: 'Order Deleted' };
        }
        catch (error) {
            throw error;
        }
    }
    async updateOrders() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
};
OrdersService = __decorate([
    (0, common_1.Injectable)()
], OrdersService);
exports.OrdersService = OrdersService;
//# sourceMappingURL=orders.service.js.map