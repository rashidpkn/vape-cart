import { BadRequestException, Controller, Delete, Get, Patch, Post, Req } from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) { }

  //create product
  @Post()
  async createProduct(@Req() req: Request) {
    try {
      const { name, username,userId, subDescription, content, images, code, SKU, quantity = 1, category, colors, sizes, tags, regularPrice, salePrice, tax, publish } = req.body
      if (!name || !username || !subDescription || !content || !images || !code || !SKU || !category || !colors || !sizes || !tags || !regularPrice || !salePrice || !tax) {
        throw new BadRequestException('All fields are mandatory')
      }
      return this.productService.createProduct(name, username,userId, subDescription, content, images, code, SKU, quantity, category, colors, sizes, tags, regularPrice, salePrice, tax, publish)

    } catch (error) {
      console.log(error.message);
      throw error
    }

  }

  // get all product
  @Get('')
  async getAllProduct(@Req() req: Request) {
    try {
      const query = req.query

      return this.productService.getAllProduct(query)
    } catch (error) {
      console.log(error);
      throw error
    }
  }

  @Get(':id')
  async getById(@Req() req: Request) {
    try {
      const { id }: { id?: number } = req.params

      if (isNaN(id)) throw new BadRequestException('Id is not valid')
      return this.productService.getById(id)

    } catch (error) {
      throw error
    }
  }

  @Patch()
  async updateProduct(@Req() req: Request) {
    try {
      const body = req.body
      return this.productService.updateProduct(body)

    } catch (error) {
      throw error
    }
  }

  @Delete()
  async deleteProducts(@Req() req:Request){
    try {
      const {ids}:{ids:number[]} = req.body
      if(!ids.length){
        throw new BadRequestException("Ids array has zero elements")
      }
      return this.productService.deleteProducts(ids)
      
    } catch (error) {
      throw error
    }

  }

  @Delete(':id')
  async deleteProduct(@Req() req:Request){
    try {
      const {id}:{id?:number} = req.params
      if (isNaN(id)) throw new BadRequestException('Id is not valid')
      
      return this.productService.deleteProduct(id)
      
    } catch (error) {
      throw error
    }

  }

  @Post('/review')
  async productReview(@Req() req:Request){
    try {
      const {rating, review, name, email,id} = req.body
      if(!rating ||  !review ||  !name ||  !email || !id) throw new BadRequestException('rating, review, name, email,id are mandiatary')
      return this.productService.productReview(id,rating,review,name,email)
    } catch (error) {
      throw error
    }
  }
}
