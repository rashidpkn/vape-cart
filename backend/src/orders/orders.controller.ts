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
import { Orders } from 'src/model/orders.model';
import { Invoice } from 'src/model/invoice.model';
import { NotificationsService } from 'src/notifications/notifications.service';

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
        items: [{id:number, quantity: number,userId:string,name:string}];
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
  async getAllOders(@Req() req: Request) {
    try {
      const { query } = req;
      return this.ordersService.getAllOders(query);
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

  // updateOrder
  @Patch('status/:id')
  async updateStatus(@Req() req: Request) {
    try {
      const { status } = req.body;
      const { id } = req.params;

      const {create} = NotificationsService.prototype
      const {items} = await Orders.findOne({where:{id}})

      if(status === 'completed'){
        items.map(async(item)=>{
          create({userId:item.userId,role:"user",type:"order",title:` ✅ Order Completed! ✅`,message:`Great job! Order ID: #${id.toString().padStart(3, '0')} has been successfully completed. Thank you for your prompt service. 🎉`,status:"unread"})
          create({userId:item.userId,role:"admin",type:"order",title:` ✅ Order Completed! ✅`,message:`Great job! Order ID: #${id.toString().padStart(3, '0')} has been successfully completed. Thank you for your prompt service. 🎉`,status:"unread"})
        })  
      }
      await Orders.update({ status }, { where: { id } });
      await Invoice.update({ status }, { where: { id } });
    } catch (error) {
      throw error;
    }
  }
}
