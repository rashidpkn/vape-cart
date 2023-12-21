import { BadRequestException, Controller, Delete, Get, Patch, Req } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { Request } from 'express';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  //get all invoice
@Get()
async getAllInvoice(@Req() req:Request){
try {
  return this.invoiceService.getAllInvoice()
  
} catch (error) {
  throw error
}
}


//get single invoice
@Get(':id')
async getSingleInvoice(@Req() req:Request){
  try {
    const {id}:{id?:number} = req.params
    if(isNaN(id)) throw new BadRequestException('id must be number')
    return this.invoiceService.getSingleInvoice(id)
  
  } catch (error) {
    throw error
  }
}



// update invoice
@Patch()
async updateInvoice(@Req() req:Request){
  try {
    return this.invoiceService.updateInvoice()
    
  
  } catch (error) {
    throw error
  }
}


// delete invoice
@Delete()
async deleteInvoice(@Req() req:Request){
  try {
    const {id} = req.body
    return this.invoiceService.deleteInvoice(id)
  
  } catch (error) {
    throw error
  }
}

}
