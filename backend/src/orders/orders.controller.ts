import {
  BadRequestException,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Request } from 'express';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  //create - order
  @Post()
  async createOrder(@Req() req: Request) {
    try {
      const {
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
        shippingAddress,
      }: {
        items: [{}];
        subTotal: number;
        shipping: number;
        discount: number;
        totalAmount: number;
        totalQuantity: number;
        customer: { name: string; email: string };
        shippingAddress: { fullAddress: string; phoneNumber: string };
      } = req.body;

      if (!items.length || !customer || !shippingAddress) {
        throw new BadRequestException(
          'iteams , customer,shippindAddress are mandatory',
        );
      }

      return this.ordersService.createOrder(
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
        shippingAddress,
      );
    } catch (error) {
      throw error;
    }
  }

  // get all orders
  @Get()
  async getAllOders() {
    try {
      return this.ordersService.getAllOders();
    } catch (error) {
      throw error;
    }
  }

  //get Single Order
  @Get(':id')
  async getSingleOrder(@Req() req: Request) {
    try {
      const { id }: { id?: number } = req.params;
      if (isNaN(id)) {
        throw new BadRequestException('id must be a number');
      }
      return this.ordersService.getSingleOrder(id);
    } catch (error) {
      throw error;
    }
  }

  // delete orders
  @Delete()
  async deleteOrder(@Req() req: Request) {
    try {
      const { id }: { id: number } = req.body;
      return this.ordersService.deleteOrder(id);
    } catch (error) {
      throw error;
    }
  }

  // updateOrder
  @Patch()
  async updateOrders(@Req() req: Request) {
    try {
      return this.ordersService.updateOrders();
    } catch (error) {
      throw error;
    }
  }
}
