import { BadRequestException, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Product } from 'src/model/product.model';
import { StoreAnalytics } from 'src/model/storeAnalytics.model';
import { NotificationsService } from 'src/notifications/notifications.service';

@Injectable()
export class ProductService {
  async createProduct(
    username: string,
    storeName: string,
    userId: string,

    name: string,
    subDescription: string,
    content: string,
    images: [string],

    type: string,
    category: string,
    tags: [string],
    parentSku: string,
    brand: string,

    attributes: [string],
    variables: [],

    SKU: string,
    track: boolean,
    quantity: number,
    regularPrice: number,
    salePrice: number,

    productGroup:string
  ) {
    try {
      const product = await Product.create({
        username,
        storeName,
        userId,

        name,
        subDescription,
        content,
        images,

        type,
        category,
        tags,
        parentSku,
        brand,

        attributes,
        variables,

        SKU,
        track,
        quantity,
        regularPrice,
        salePrice,

        productGroup
      });

      const {create} = NotificationsService.prototype

      create({userId,role:"user",type:"product",title:"🎉 New Product Created! 🎉",message:`Exciting news! A new product has been created. Product Name: ${name}. 🛒`,status:"unread"})
      create({userId,role:"admin",type:"product",title:"🎉 New Product Created! 🎉",message:`Exciting news! A new product has been created. Product Name: ${name}. Created by ${username} 🛒`,status:"unread"})

      return { product, message: 'Product is created' };
    } catch (error) {
      console.log(error.message);
      // throw error;
    }
  }

  async getAllProduct(query: any) {
    try {
      const {
        username,
        userId,
        name,
        category,
        inStock,
        productGroup,
        perPage = 20,
        pageNo = 1,
        sortBy,
      } = query;
      const where: any = {};
      let order: any = [];

      if (username) where.username = username;
      if (userId) where.userId = userId;
      if(productGroup) where.productGroup =productGroup
      if (name) where.name = { [Op.iLike]: `%${name}%` };

      if (category) where.category = category;
      if (inStock) where.quantity = { [Op.gt]: 0 };

      if (sortBy === 'priceDesc') {
        order = ['salePrice', 'DESC'];
      }
      if (sortBy === 'priceAsc') {
        order = ['salePrice', 'ASC'];
      }

      const count = await Product.count({ where });

      const products = await Product.findAll({
        where,
        limit: perPage,
        offset: perPage * (pageNo - 1),
        ...(order.length && { order: [order] }),
      });

      return { products, count };
    } catch (error) {
      return error;
    }
  }

  async getById(id: number, count: number) {
    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) {
        throw new BadRequestException('Product not found');
      }

      if (count) {
        await StoreAnalytics.create({
          storeName: product.storeName,
          name: product.name,
        });
      }

      return product;
    } catch (error) {
      throw error;
    }
  }

  async updateProduct(update: { id: number }) {
    try {
      const found = await Product.findOne({ where: { id: update.id } });
      if (!found) {
        throw new BadRequestException('Product not found');
      }
      await Product.update(update, {
        where: { id: update.id },
      });

      const {create} = NotificationsService.prototype

      create({userId:found.userId,role:"user",type:"product",title:"🔄 Product Updated 🔄",message:`Important update! A product has been updated. Product Name: ${found.name}. 🔧`,status:"unread"})
      create({userId:found.userId,role:"admin",type:"product",title:"🔄 Product Updated 🔄",message:`Important update! A product has been updated. Product Name: ${found.name}. Updated by: ${found.username}. 🔧`,status:"unread"})

    } catch (error) {
      throw error;
    }
  }

  async deleteProducts(ids: number[]) {
    try {

      

      await Product.destroy({ where: { id: ids } });
      return { message: 'Products are deleted' };
    } catch (error) {
      throw error;
    }
  }

  async deleteProduct(id: number) {

    const found = await Product.findOne({where:{id}})


      const {create} = NotificationsService.prototype

      create({userId:found.userId,role:"user",type:"product",title:"🗑️ Product Deleted 🗑️",message:`Attention! A product has been deleted. Product Name: ${found.name}. ⚠️`,status:"unread"})
      create({userId:found.userId,role:"admin",type:"product",title:"🗑️ Product Deleted 🗑️",message:`Attention! A product has been deleted. Product Name: ${found.name}. Deleted by: ${found.username}. ⚠️`,status:"unread"})

    try {
      await Product.destroy({ where: { id } });
      return { message: 'Product is deleted' };
    } catch (error) {
      throw error;
    }
  }

  async productReview(
    id: number,
    rating: number,
    review: string,
    name: string,
    email: string,
  ) {
    try {
      const product = await Product.findOne({ where: { id } });
      if (!product) throw new BadRequestException('Product not found');
      const reviews = [...product.reviews, { rating, review, name, email }];
      await Product.update({ reviews }, { where: { id } });

      const {create} = NotificationsService.prototype

      create({userId:product.userId,role:"user",type:"product",title:`🌟 New Review Alert! 🌟`,message:`Great news! A new review has been published for ${product.name} by ${name}, awarding it a ${rating}/5 rating. 📝 Take a look!`,status:"unread"})
      create({userId:product.userId,role:"admin",type:"product",title:`🌟 New Review Alert! 🌟`,message:`Great news! A new review has been published for ${product.name} by ${name}, awarding it a ${rating}/5 rating. 📝 Take a look!`,status:"unread"})

      return { message: 'Review updated' };
    } catch (error) {
      throw error;
    }
  }
}
