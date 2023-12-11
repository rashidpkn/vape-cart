import { BadRequestException, Injectable } from '@nestjs/common';
import { Op } from 'sequelize';
import { Product } from 'src/model/product.model';

@Injectable()
export class ProductService {

  async createProduct(name: string, username: string, userId: string, subDescription: string, content: string, images: [string], code: string, SKU: string, quantity: number, category: string, colors: [string], sizes: [string], tags: [string], regularPrice: number, salePrice: number, tax: number, publish: boolean) {
    try {

      const found = await Product.findOne({ where: { name } })
      if (found)
        throw new BadRequestException('Product already exist')
      const product = await Product.create({
        name, username, userId,
        subDescription, content,
        images, code, SKU, quantity,
        category, colors, sizes, tags,
        regularPrice, salePrice, tax, publish
      })
      return { product, message: "Product is created" }
    } catch (error) {
      throw error

    }
  }

  async getAllProduct(query: any) {
    try {
      const { username, userId, name, code, category, inStock, publish, draft, perPage = 20, pageNo = 1 } = query
      let where: any = {}

      if (username) where.username = username
      if (userId) where.userId = userId
      if (name) where.name = name
      if (code) where.code = code
      if (category) where.category = category
      if (inStock) where.quantity = { [Op.gt]: 0, };
      if (publish) where.publish = true
      if (draft) where.publish = false

      const count = await Product.count({ where })

      const products = await Product.findAll({
        where,
        limit: perPage,
        offset: perPage * (pageNo - 1),
      })

      return { products, count }
    } catch (error) {
      return error
    }
  }


  async getById(id: number) {
    try {
      const product = await Product.findOne({ where: { id } })
      if (!product) {
        throw new BadRequestException("Product not found")
      }
      return product

    } catch (error) {
      throw error
    }
  }


  async updateProduct(update: { id: number }) {
    try {
      const found = await Product.findOne({ where: { id: update.id } })
      if (!found) {
        throw new BadRequestException('Product not found')
      }
      const product = await Product.update(update, { where: { id: update.id } })
    } catch (error) {
      throw error
    }
  }


  async deleteProducts(ids: number[]) {
    try {
      const product = await Product.destroy({ where: { id: ids } })
      return { message: "Products are deleted" }


    } catch (error) {
      throw error
    }

  }

  async deleteProduct(id: number) {
    try {
      const product = await Product.destroy({ where: { id } })
      return { message: "Product is deleted" }


    } catch (error) {
      throw error
    }

  }

  async productReview(id: number, rating: number, review: string, name: string, email: string) {
    try {
      let product = await Product.findOne({ where: { id } })
      if (!product) throw new BadRequestException("Product not found")
      let reviews = [...product.reviews,{ rating, review, name, email }]
      let updatedProduct = await Product.update({reviews},{where:{id}})
      return { message: "Review updated" }
    } catch (error) {
      throw error
    }
  }


}
