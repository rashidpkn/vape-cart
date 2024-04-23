"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = void 0;
const common_1 = require("@nestjs/common");
const invoice_model_1 = require("../model/invoice.model");
let InvoiceService = class InvoiceService {
    async getAllInvoice() {
        try {
            const invoice = await invoice_model_1.Invoice.findAll();
            return invoice;
        }
        catch (error) {
            throw error;
        }
    }
    async getSingleInvoice(id) {
        try {
            const invoice = await invoice_model_1.Invoice.findOne({ where: { id } });
            return invoice;
        }
        catch (error) {
            throw error;
        }
    }
    async updateInvoice() {
        try {
        }
        catch (error) {
            throw error;
        }
    }
    async deleteInvoice(id) {
        try {
            await invoice_model_1.Invoice.destroy({ where: { id } });
            return { message: 'Invoice were deleted' };
        }
        catch (error) {
            throw error;
        }
    }
};
InvoiceService = __decorate([
    (0, common_1.Injectable)()
], InvoiceService);
exports.InvoiceService = InvoiceService;
//# sourceMappingURL=invoice.service.js.map