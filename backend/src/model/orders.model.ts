import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Orders extends Model {
  @Column({ type: DataType.ARRAY(DataType.JSON) })
  items: {
    userId: string;
    id: number;
    SKU: string;
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

  @Column
  totalQuantity: number;

  @Column({ type: DataType.JSON })
  customer: {
    name: string;
    email: string;
  };

  @Column({ type: DataType.JSON })
  delivery: {
    shipBy: string;
    speedy: string;
    trackingNumber: string;
  };
  @Column({ type: DataType.JSON })
  shippingAddress: {
    fullAddress: string;
    phoneNumber: string;
  };

  @Column({ type: DataType.STRING(20), defaultValue: 'Cash' })
  paymentType: string;

  @Column({ type: DataType.STRING(20), defaultValue: 'Order received' })
  status: string;
}
