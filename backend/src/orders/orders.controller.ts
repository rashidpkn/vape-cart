import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Request } from 'express';
import { Orders } from 'src/model/orders.model';
import { Invoice } from 'src/model/invoice.model';
import { NotificationsService } from 'src/notifications/notifications.service';
import { Product } from 'src/model/product.model';

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
      }: {
        items: [
          {
            id: number;
            quantity: number;
            userId: string;
            name: string;
            variation: {};
          },
        ];
        subTotal: number;
        shipping: number;
        discount: number;
        totalAmount: number;
        totalQuantity: number;
        customer: {
          first_name: string;
          last_name: string;
          phone_number: string;
          email: string;
          address_line_1: string;
          address_line_2: string;
          city: string;
          country: string;
        };
      } = req.body;

      if (!items.length || !customer) {
        throw new BadRequestException('iteams , customer are mandatory');
      }

      return this.ordersService.createOrder(
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
      );
    } catch (error) {
      throw error;
    }
  }

  // get all orders
  @Get()
  async getAllOders(@Req() req: Request) {
    try {
      const { query }: any = req;
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
  @Patch(':id')
  async updateOrders(@Param('id') id: number, @Body() body: any) {
    try {
      return this.ordersService.updateOrders(+id, body);
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

      const { create } = NotificationsService.prototype;
      const { items } = await Orders.findOne({ where: { id } });

      if (status === 'completed') {
        items.map(async (item) => {
          create({
            userId: item.userId,
            role: 'user',
            type: 'order',
            title: ` ✅ Order Completed! ✅`,
            message: `Great job! Order ID: #${id
              .toString()
              .padStart(
                3,
                '0',
              )} has been successfully completed. Thank you for your prompt service. 🎉`,
            status: 'unread',
          });
          create({
            userId: item.userId,
            role: 'admin',
            type: 'order',
            title: ` ✅ Order Completed! ✅`,
            message: `Great job! Order ID: #${id
              .toString()
              .padStart(
                3,
                '0',
              )} has been successfully completed. Thank you for your prompt service. 🎉`,
            status: 'unread',
          });
        });
      }

      if (status === 'cancelled') {
        items.map(async (item) => {
          const product = await Product.findOne({ where: { id: item.id } });
          if (!product) {
            console.log('Product not found');
          } else {
            if (product.type === 'Simple') {
              await product.update(
                { quantity: product.quantity + item.quantity },
                { where: { id: item.id } },
              );
              console.log('Product quantity updated');
            } else {
              const found = product.variations.find((variation) =>
                Object.entries(item.variation).every(
                  ([key, value]) => variation.attributes[key] === value,
                ),
              );
              if (found) {
                product.variations = product.variations.filter(
                  (e) => e !== found,
                );
              }
              found.quantity = found.quantity - item.quantity;
              const variations = [...product.variations, found];
              await Product.update({ variations }, { where: { id: item.id } });
            }
          }
        });
      }

      await Orders.update({ status }, { where: { id } });
    } catch (error) {
      throw error;
    }
  }

  @Patch('/change-item-status/:orderId')
  async changeItemStatus(@Body() body, @Param('orderId') orderId) {
    const { itemId, status } = body;

    const order = await Orders.findByPk(orderId);

    if (!order) {
      throw new NotFoundException('Order not found');
    }

    const itemIndex = order.items.findIndex((item) => item.id === itemId);
    if (itemIndex === -1) {
      throw new NotFoundException('Item not found in the order');
    }

    // Create a new items array with the updated status
    const updatedItems = [...order.items];
    updatedItems[itemIndex] = {
      ...updatedItems[itemIndex],
      status: status,
    };

    // Use Order.update to update the order
    await Orders.update(
      { items: updatedItems },
      {
        where: { id: orderId },
        individualHooks: true, // This ensures that any model hooks are run
      },
    );

    return {
      message: 'Item status updated successfully',
      updatedItem: updatedItems[itemIndex],
    };
  }
}
