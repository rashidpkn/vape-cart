import { Injectable, NotFoundException } from '@nestjs/common';
import { Op, Sequelize } from 'sequelize';
import { Invoice } from 'src/model/invoice.model';
import { Orders } from 'src/model/orders.model';
import { Product } from 'src/model/product.model';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrdersService {
  //create - order
  async createOrder(
    items: [
      {
        quantity: number;
        id: number;
        userId: string;
        name: string;
        variation:{}
      },
    ],
    subTotal: number,
    shipping: number,
    discount: number,
    totalAmount: number,
    totalQuantity: number,
    customer: {
      first_name: string;
      last_name: string;
      phone_number: string;
      email: string;
      address_line_1: string;
      address_line_2: string;
      city: string;
      country: string;
    },
  ) {
    try {
      const dueDate = new Date(new Date().setDate(new Date().getDate() + 5));
      const { id } = await Orders.create({
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
      });

      const { create } = NotificationsService.prototype;
      items.map(async (item) => {
        const product = await Product.findOne({
          where: { id: item.id },
        });
        if (product.track) {
          if(product.type === 'Simple'){
            await Product.update(
              { quantity: product.quantity - item.quantity },
              { where: { id: item.id } },
            );
          }else{
            const found = product.variations.find(variation =>
              Object.entries(item.variation).every(([key, value]) =>
                variation.attributes[key] === value
              )
            );
            
            if (found) {
              product.variations = product.variations.filter(e => e !== found);
            }
            found.quantity = found.quantity - item.quantity
            const variations = [...product.variations,found]
            await Product.update({ variations }, { where: { id: item.id } });
          }

          }
        create({
          userId: item.userId,
          role: 'user',
          type: 'order',
          title: `📦 New Order Received! 📦`,
          message: `Exciting news! A new order has been placed. Order ID: #${id
            .toString()
            .padStart(3, '0')}. Please process it promptly.`,
          status: 'unread',
        });
      });

      create({
        userId: 'admin',
        role: 'admin',
        type: 'order',
        title: `📦 New Order Received! 📦`,
        message: `Exciting news! A new order has been placed. Order ID: #${id
          .toString()
          .padStart(3, '0')}. Please process it promptly.`,
        status: 'unread',
      });

      return { message: 'Order is successfully placed' };
    } catch (error) {
      throw error;
    }
  }

  // get all orders

  async getAllOders(query: { email?: string; status: string }) {
    try {
      const { email, status } = query;

      let where: any = {};

      if (!!email) {
        where.customer = {};
        where.customer.email = email;
      }
      if (!!status) {
        where.status = status;
      }

      const orders = await Orders.findAll({ where,order: [['id', 'DESC']] });

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
      const order = await Orders.findOne({ where: { id } });
      await Orders.destroy({ where: { id } });
      return { message: 'Order Deleted' };
    } catch (error) {
      throw error;
    }
  }

  // updateOrder
  async updateOrders(id: number, body: { items: any[] }) {
    try {

      const currentOrder = await Orders.findOne({ where: { id } });

      await Promise.all(
        currentOrder.items.map(async (item) => {
          const product = await Product.findOne({ where: { id: item.id } });
          if(product.type === 'Simple'){
            await Product.update({ quantity: product.quantity + item.quantity },{ where: { id: item.id } });
          }else{
            const found = product.variations.find(variation =>
              Object.entries(item.variation).every(([key, value]) =>
                variation.attributes[key] === value
              )
            );
            

            if (found) {
              product.variations = product.variations.filter(e => e !== found);
            }

            found.quantity = Number(found.quantity) + Number(item.quantity)

            const variations = [...product.variations,found]

            await Product.update({ variations }, { where: { id: item.id } });

          }
        })
      );
      
      await Promise.all(
        body.items.map(async (item: { id: any; quantity: number;variation?:{} }) => {
          const product = await Product.findOne({ where: { id: item.id } });
          if(product.type === 'Simple'){
            await Product.update({ quantity: product.quantity - item.quantity }, { where: { id: item.id } });
          }else{


            const found = product.variations.find(variation =>
              Object.entries(item.variation).every(([key, value]) =>
                variation.attributes[key] === value
              )
            );
            

            if (found) {
              product.variations = product.variations.filter(e => e !== found);
            }

            found.quantity = found.quantity - item.quantity

            const variations = [...product.variations,found]

            await Product.update({ variations }, { where: { id: item.id } });

          }
        })
      );
      
      await Orders.update(body, { where: { id } });

      body?.items.map((item) => {
        NotificationsService.prototype.create({
          userId: item.userId,
          role: 'user',
          type: 'order',
          title: `📦 Order Update! 📦`,
          message: `Order Update! Order ID: #${id
            .toString()
            .padStart(3, '0')} has been updated. Product: ${
            item.name
          }, Quantity: ${item.quantity}, Total Price: ${
            item.subTotal
          }. Please review the changes promptly.`,
          status: 'unread',
        });
      });

      return {
        message: 'Order Updated',
      };
    } catch (error) {
      throw error;
    }
  }
}
