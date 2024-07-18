import { Injectable, NotFoundException } from '@nestjs/common';
import { Invoice } from 'src/model/invoice.model';
import { Orders } from 'src/model/orders.model';
import { Product } from 'src/model/product.model';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class OrdersService {
  //create - order
  async createOrder(
    items: [{
      quantity: number;id:number,userId:string,name:string
}],
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
      const {id} = await Orders.create({
        items,
        subTotal,
        shipping,
        discount,
        totalAmount,
        totalQuantity,
        customer,
        shippingAddress,
      });

      const {create} = NotificationsService.prototype
 items.map(async(item)=>{
  const  {quantity} =  await  Product.findOne({where:{id:item.id}})
  await Product.update({quantity:quantity-item.quantity},{where:{id:item.id}})
  create({userId:item.userId,role:"user",type:"order",title:`📦 New Order Received! 📦`,message:`Exciting news! A new order has been placed. Order ID: #${id.toString().padStart(3, '0')}. Please process it promptly.`,status:"unread"})
})

create({userId:'admin',role:"admin",type:"order",title:`📦 New Order Received! 📦`,message:`Exciting news! A new order has been placed. Order ID: #${id.toString().padStart(3, '0')}. Please process it promptly.`,status:"unread"})

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

  async getAllOders(query: { email?: string,status:string }) {
    try {
      const {email,status} = query

      let  where:any= {}

      

        if(!!email) {
          where.customer = {}
          where.customer.email =  email
        }
        if(!!status) {where.status = status}

      const orders = await Orders.findAll({where});
      
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
      
      const order = await Orders.findOne({where:{id}})
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
