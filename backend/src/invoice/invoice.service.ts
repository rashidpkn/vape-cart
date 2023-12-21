import { Injectable } from '@nestjs/common';
import { Invoice } from 'src/model/invoice.model';

@Injectable()
export class InvoiceService {
    //get all invoice
async getAllInvoice(){
    try {
        const invoice = await Invoice.findAll()
        return invoice
    } catch (error) {
      throw error
    }
}


//get single invoice
async getSingleInvoice(id:number){
    try {
        const invoice = await Invoice.findOne({where:{id}})
        return invoice
    } catch (error) {
      throw error
    }
}



// update invoice
async updateInvoice(){
    try {
  
    } catch (error) {
      throw error
    }
}


// delete invoice
async deleteInvoice(id:number){
    try {
  const invoice = await Invoice.destroy({where:{id}})
  return{message:"Invoice were deleted"}
    } catch (error) {
      throw error
    }
}
}
