import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice } from 'src/model/invoice.model';
import { Orders } from 'src/model/orders.model';

@Injectable()
export class OrdersService {
  //create - order
  async createOrder(
    items: [{}],
    subTotal: number,
    shipping: number,
    discount: number,
    totalAmount: number,
    totalQuantity: number,
    customer: { name: string; email: string },
    shippingAddress: { fullAddress: string; phoneNumber: string },
  ) {
    try {
      const dueDate = new Date(new Date().setDate(new Date().getDate() + 5));
      await Orders.create({
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
        shippingAddress,
      });
      await Invoice.create({
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        invoiceTo: {
          email: customer.email,
          fullAddress: shippingAddress.fullAddress,
          name: customer.name,
          phoneNumber: shippingAddress.phoneNumber,
        },
        dueDate,
      });

      return { message: 'Order is successfully placed' };
    } catch (error) {
      throw error;
    }
  }

  // get all orders

  async getAllOders(query:{email?:string}) {
    try {
      const orders = await Orders.findAll();
      if(!!query.email){
          return orders.filter(order => order.customer.email === query.email);
      }
      return orders;
    } catch (error) {
      throw error;
    }
  }

  //get Single Order
  async getSingleOrder(id: number) {
    try {
      const orders = await Orders.findOne({ where: { id } });
      if (!orders) {
        throw new NotFoundException('Order is not found');
      }
      return orders;
    } catch (error) {
      throw error;
    }
  }

  // delete orders
  async deleteOrder(id: number) {
    try {
      await Orders.destroy({ where: { id } });
      return { message: 'Order Deleted' };
    } catch (error) {
      throw error;
    }
  }

  // updateOrder
  async updateOrders() {
    try {
    } catch (error) {
      throw error;
    }
  }
}
