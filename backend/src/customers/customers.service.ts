import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customers } from 'src/model/customers.model';

@Injectable()
export class CustomersService {
  async create(createCustomerDto: CreateCustomerDto) {
    try {
      
      const found = await Customers.findOne({where:{email:createCustomerDto.email}})
      if(found){
        if(found.password === createCustomerDto.password){
          return {message:'Login successfull'}    
        }
        throw new BadRequestException("Check your email and password")
      }
      await Customers.create({...createCustomerDto})
      return {message:'Account created'}
    } catch (error) {
      throw error
    }
  }

  async findAll() {
    try {
      return await Customers.findAll()
  } catch (error) {
      throw error
    }
  }

  async findOne(id: number) {
    try {
      return await Customers.findOne({where:{id}})
    } catch (error) {
      throw error
    }
  }

  async update(id: number, updateCustomerDto: UpdateCustomerDto) {
    try {
      await Customers.update(updateCustomerDto,{where:{id}})
      return { message:'Updated'}
  } catch (error) {
      
    }
  }

  async remove(id: number) {
    try {
      await Customers.destroy({where:{id}})
  } catch (error) {
      
    }
  }
}
