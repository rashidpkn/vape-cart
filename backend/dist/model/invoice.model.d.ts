import { Model } from 'sequelize-typescript';
export declare class Invoice extends Model {
    invoiceTo: {
        email: string;
        fullAddress: string;
        name: string;
        phoneNumber: string;
    };
    invoiceFrom: {
        company: string;
        email: string;
        fullAddress: string;
        name: string;
        phoneNumber: string;
    };
    items: {
        id: number;
        quantity: number;
        name: string;
        images: string[];
        price: number;
    }[];
    subTotal: number;
    shipping: number;
    discount: number;
    totalAmount: number;
    status: string;
    dueDate: Date;
}
