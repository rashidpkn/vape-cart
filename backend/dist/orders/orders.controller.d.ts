import { OrdersService } from './orders.service';
import { Request } from 'express';
import { Orders } from 'src/model/orders.model';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(req: Request): Promise<{
        message: string;
    }>;
    getAllOders(): Promise<Orders[]>;
    getSingleOrder(req: Request): Promise<Orders>;
    deleteOrder(req: Request): Promise<{
        message: string;
    }>;
    updateOrders(req: Request): Promise<void>;
    updateStatus(req: Request): Promise<void>;
}
