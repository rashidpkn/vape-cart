import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { AttributesService } from './attributes.service';
import { Attributes } from 'src/model/attributes.model';

@Controller('attributes')
export class AttributesController {
  constructor(private readonly attributesService: AttributesService) {}


  @Post()
  async add(@Body()  {username,attribute,value}){
      try {
        if(!username || !attribute || !value){
          throw new BadRequestException("username, attribute and value are mandiatary")
        }
        const found = await Attributes.findOne({where:{attribute,value}})
        if(found){
          throw new BadRequestException("Attribute already added")
        }
        await Attributes.create({username,attribute,value})
        
        return({
          message:"new attribute saved"
        })

      } catch (error) {
        console.log(error.message)
        throw error
      }
  }

  @Get()
  async get(){
    try {
      return await Attributes.findAll()
    } catch (error) {
      console.log(error.message)
      throw error
    }
  }
}
