import { Model } from "sequelize-typescript";
export declare class Orders extends Model {
    items: {
        id: number;
        SKU: string;
        quantity: number;
        name: string;
        images: string[];
        price: number;
    }[];
    subTotal: number;
    shipping: number;
    discount: number;
    totalAmount: number;
    totalQuantity: number;
    customer: {
        name: string;
        email: string;
    };
    delivery: {
        shipBy: string;
        speedy: string;
        trackingNumber: string;
    };
    shippingAddress: {
        fullAddress: string;
        phoneNumber: string;
    };
    paymentType: string;
    status: string;
}
