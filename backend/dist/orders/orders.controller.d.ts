import { OrdersService } from './orders.service';
import { Request } from 'express';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    createOrder(req: Request): Promise<{
        message: string;
    }>;
    getAllOders(req: Request): Promise<import("../model/orders.model").Orders[]>;
    getSingleOrder(req: Request): Promise<import("../model/orders.model").Orders>;
    deleteOrder(req: Request): Promise<{
        message: string;
    }>;
    updateOrders(req: Request): Promise<void>;
}
