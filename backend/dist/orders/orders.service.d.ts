import { Orders } from 'src/model/orders.model';
export declare class OrdersService {
    createOrder(items: [{}], subTotal: number, shipping: number, discount: number, totalAmount: number, totalQuantity: number, customer: {
        name: string;
        email: string;
    }, shippingAddress: {
        fullAddress: string;
        phoneNumber: string;
    }): Promise<{
        message: string;
    }>;
    getAllOders(query: {
        email?: string;
    }): Promise<Orders[]>;
    getSingleOrder(id: number): Promise<Orders>;
    deleteOrder(id: number): Promise<{
        message: string;
    }>;
    updateOrders(): Promise<void>;
}
