import { literal } from 'sequelize';
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Invoice extends Model {
  @Column({type:DataType.JSON})
  invoiceTo: {
    email: string;
    fullAddress: string;
    name: string;
    phoneNumber: string;
  };

  @Column({type:DataType.JSON,defaultValue:{
    company: 'Vape Amazon',
    email: 'info@vapeamazon.com',
    fullAddress: 'vape amazon ,delhi',
    name: 'vape Monkey',
    phoneNumber: '123456', 
  }})
  invoiceFrom: {
    company: string;
    email: string;
    fullAddress: string;
    name: string;
    phoneNumber: string;
  };

  @Column({ type: DataType.ARRAY(DataType.JSON) })
  items: {
    id: number;
    quantity: number;
    name: string;
    images: string[];
    price: number;
  }[];

  @Column
  subTotal: number;

  @Column
  shipping: number;

  @Column
  discount: number;

  @Column
  totalAmount: number;

  @Column({ type: DataType.STRING(20), defaultValue: 'draft' })
  status: string;

  @Column({
    type:DataType.DATE
})
  dueDate:Date

}
