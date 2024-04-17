"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PayoutService = void 0;
const common_1 = require("@nestjs/common");
const payout_model_1 = require("../model/payout.model");
let PayoutService = class PayoutService {
    async create(createPayoutDto) {
        try {
            const { fName, email, phone, method, amount, account, currency, network, walletAddress } = createPayoutDto;
            if (!fName || !email || !phone || !method || !amount) {
                throw new common_1.BadRequestException('fName,email,phone,method and amount are mandatory');
            }
            if (method === 'crypto') {
                if (!currency) {
                    throw new common_1.BadRequestException('Currency is mandatory');
                }
                if (currency === 'usdt' && !network) {
                    throw new common_1.BadRequestException('Payment network is mandatory');
                }
            }
            else if (!account) {
                throw new common_1.BadRequestException('Account details is mandatory');
            }
            if (method === 'crypto' && !walletAddress) {
                throw new common_1.BadRequestException('walletAddress is mandatory');
            }
            await payout_model_1.Payout.create({ fName, email, phone, method, amount, account, currency, network, walletAddress });
            return { message: "Payout Request successfull" };
        }
        catch (error) {
            throw error;
        }
    }
    async findAll(query) {
        try {
            let where = {};
            if (query.fName) {
                where.fName = query.fName;
            }
            return await payout_model_1.Payout.findAll({ where });
        }
        catch (error) {
        }
    }
    async findOne(id) {
        try {
            if (isNaN(id)) {
                throw new common_1.BadRequestException('Enter valid id');
            }
            return await payout_model_1.Payout.findByPk(id);
        }
        catch (error) {
            throw error;
        }
    }
    async update(id, updatePayoutDto) {
        try {
            if (isNaN(id)) {
                throw new common_1.BadRequestException('Enter valid id');
            }
            await payout_model_1.Payout.update(updatePayoutDto, { where: { id } });
            return { message: "updated" };
        }
        catch (error) {
            throw error;
        }
    }
    async remove(id) {
        try {
            if (isNaN(id)) {
                throw new common_1.BadRequestException('Enter valid id');
            }
            await payout_model_1.Payout.destroy({ where: { id } });
            return { message: "Payout is deleted" };
        }
        catch (error) {
            throw error;
        }
    }
};
PayoutService = __decorate([
    (0, common_1.Injectable)()
], PayoutService);
exports.PayoutService = PayoutService;
//# sourceMappingURL=payout.service.js.map