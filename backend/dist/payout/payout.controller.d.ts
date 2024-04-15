import { PayoutService } from './payout.service';
import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
export declare class PayoutController {
    private readonly payoutService;
    constructor(payoutService: PayoutService);
    create(createPayoutDto: CreatePayoutDto): Promise<{
        message: string;
    }>;
    findAll(query: {
        fName: string;
    }): Promise<import("../model/payout.model").Payout[]>;
    findOne(id: string): Promise<import("../model/payout.model").Payout>;
    update(id: string, updatePayoutDto: UpdatePayoutDto): Promise<{
        message: string;
    }>;
    remove(id: string): Promise<{
        message: string;
    }>;
}
