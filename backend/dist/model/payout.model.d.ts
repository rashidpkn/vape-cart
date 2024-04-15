import { Model } from 'sequelize-typescript';
export declare class Payout extends Model {
    fName: string;
    email: string;
    phone: string;
    method: string;
    currency: string;
    network: string;
    amount: number;
    account: {
        name: string;
        number: string;
        bankName: string;
        address: string;
        beneficiaryAddress: string;
        swift: string;
        routingNumber: string;
    };
    walletAddress: string;
    transactionId: string;
    status: string;
}
