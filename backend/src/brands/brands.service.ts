import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBrandDto } from './dto/create-brand.dto';
import { UpdateBrandDto } from './dto/update-brand.dto';
import { Brands } from 'src/model/brands.model';
import { Product } from 'src/model/product.model';

@Injectable()
export class BrandsService {
  async create(createBrandDto: CreateBrandDto) {
    try {
      const found = await Brands.findOne({where:{name:createBrandDto.name}})
      if(found){
        throw new BadRequestException('Brand already exists');
      }
      const data = await Brands.create({name: createBrandDto.name})
      await Product.update({status:'Published'},{where:{brand: data.name}})
      return {
        message:'Brand has been created successfully',
        data
      }
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      const data = await Brands.findAll()
      return {
        message:'Brands fetched successfully',
        data
      }
    } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      const data = await Brands.findOne({where:{id}})
      if(data ){
        return {
          message:'Brand fetched successfully',
          data
        }
      }else{
        throw new BadRequestException('Brand not found');
      }
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateBrandDto: UpdateBrandDto) {
    try {
      const updateBrand = await Brands.update(updateBrandDto,{where: {id}})
      if(updateBrand){
        return {
          message:'Brand has been updated successfully',
          data:null
        }
      }else{
        throw new BadRequestException('Brand not found');
      }
      
    } catch (error) {
      throw error
    }
  }

  async remove(id: number) {
    try {
      const deleteBrand = await Brands.destroy({where:{id}})
      if(deleteBrand){
        return {
          message:'Brand has been deleted successfully',
          data:null
        }
      }else{
        throw new BadRequestException('Brand not found');
      }
    } catch (error) {
      throw error
    }
  }
}
