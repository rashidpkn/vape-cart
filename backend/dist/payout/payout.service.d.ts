import { CreatePayoutDto } from './dto/create-payout.dto';
import { UpdatePayoutDto } from './dto/update-payout.dto';
import { Payout } from 'src/model/payout.model';
export declare class PayoutService {
    create(createPayoutDto: CreatePayoutDto): Promise<{
        message: string;
    }>;
    findAll(query: {
        fName: string;
    }): Promise<Payout[]>;
    findOne(id: number): Promise<Payout>;
    update(id: number, updatePayoutDto: UpdatePayoutDto): Promise<{
        message: string;
    }>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
