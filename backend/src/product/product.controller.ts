import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { Request } from 'express';
import { Product } from 'src/model/product.model';
import { Op } from 'sequelize';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get('/update-images')
  async updateImg() {
    await Product.update(
      { images: ['https://vapes-uae.com/img/no-image.jpg'] },
      { where: {} },
    );
  }

  //create product
  @Post()
  async createProduct(@Req() req: Request) {
    try {
      let {
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
        SKU,
        brand,
        status,
        
        attributes,
      
        track,
        availability,
        quantity = 1,
        regularPrice,
        salePrice,

        variations,

      } = req.body;

      if(availability === 'Out Stock'){
        quantity = 0
      }
      if(quantity === 0){
        availability = 'Out Stock'
      }
      

      return this.productService.createProduct(
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
        SKU,
        brand,
        status,

        attributes,
        
        track,
        availability,
        quantity ,
        regularPrice,
        salePrice,

        variations,
        
      );

      
    } catch (error) {
      console.log(error.message);
      throw error;
    }
  }

  // get all product
  @Get('')
  async getAllProduct(@Req() req: Request) {
    try {
      const query = req.query;

      return this.productService.getAllProduct(query);
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  @Get('/similar-product/:word')
  async similarProduct(@Param('word') word: string) {
    try {
      const product = await Product.findAll({
        where: {
          name: {
            [Op.iLike]: `%${word}%`,
          },
        },
        limit: 6,
      });
      return product;
    } catch (error) {
      throw error;
    }
  }

  @Get('/export')
  async exportProduct() {
    try {
      const product = await Product.findAll({
        attributes: {
          exclude: [
            'id',
            'createdAt',
            'updatedAt',
            'reviews',
            'publish',
            'tax',
            'tags',
            'colors',
            'content',
          ],
        },
        offset: 0,
        limit: 1,
      });
      return product;
    } catch (error) {}
  }

  @Post('/import')
  async importProduct(@Req() req: Request) {
    try {
      console.log('Uploading');
      const products: [] = req.body;

      await Product.bulkCreate(products);

      console.log('Uploaded');
      return ' Done';
    } catch (error) {
      throw error;
    }
  }

  @Get(':id')
  async getById(@Req() req: Request) {
    try {
      const { id }: { id?: number } = req.params;
      const { count }: { count?: number } = req.query;

      if (isNaN(id)) throw new BadRequestException('Id is not valid');
      return this.productService.getById(id, count);
    } catch (error) {
      throw error;
    }
  }

  @Patch()
  async updateProduct(@Req() req: Request) {
    try {
      const body = req.body;
      return this.productService.updateProduct(body);
    } catch (error) {
      throw error;
    }
  }

  @Delete()
  async deleteProducts(@Req() req: Request) {
    try {
      const { ids }: { ids: number[] } = req.body;
      if (!ids.length) {
        throw new BadRequestException('Ids array has zero elements');
      }
      return this.productService.deleteProducts(ids);
    } catch (error) {
      throw error;
    }
  }

  @Delete(':id')
  async deleteProduct(@Req() req: Request) {
    try {
      const { id }: { id?: number } = req.params;
      if (isNaN(id)) throw new BadRequestException('Id is not valid');

      return this.productService.deleteProduct(id);
    } catch (error) {
      throw error;
    }
  }

  @Post('/review')
  async productReview(@Req() req: Request) {
    try {
      const { rating, review, name, email, id } = req.body;
      if (!rating || !review || !name || !email || !id)
        throw new BadRequestException(
          'rating, review, name, email,id are mandiatary',
        );
      return this.productService.productReview(id, rating, review, name, email);
    } catch (error) {
      throw error;
    }
  }

  @Post('/quick_edit/:id')
  async _quickEdit(
    @Param('id') id:number,
    @Body() body:any
  ){
    try {
      if(body.availability === 'Out Stock'){
        body.quantity = 0
      }
      if(body.quantity === 0){
        body.availability = 'Out Stock'
      }
      
      const editProduct = await Product.update(body,{where:{id}})
      return {message : "Updated"}
  } catch (error) {
      throw error
    }

  }

}
