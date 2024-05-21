import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column
  name: string;

  @Column({ defaultValue: 'Vape Monkey' })
  username: string;

  @Column({ defaultValue: 'Vape Monkey' })
  storeName: string;

  @Column({defaultValue:'tpquNGEnfDOqPlug2Nh7VdzgcJ33'})
  userId: string;

  @Column({ type: DataType.STRING(15000) })
  subDescription: string;

  @Column({ type: DataType.STRING(15000) })
  content: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ['https://delhi-vape.com/img/no-image.jpg'],
  })
  images: string[];

  @Column
  SKU: string;

  @Column({ defaultValue: 20 })
  quantity: number;

  @Column({ defaultValue: 'None' })
  category: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  colors: string[];

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  tags: string[];

  @Column({ type: DataType.FLOAT })
  regularPrice: number;

  @Column({ type: DataType.FLOAT })
  salePrice: number;

  @Column({ type: DataType.FLOAT })
  tax: number;

  @Column({ defaultValue: true })
  publish: boolean;

  @Column({
    type: DataType.ARRAY(DataType.JSON),
    defaultValue: [],
  })
  reviews: {
    rating: number;
    review: string;
    name: string;
    email: string;
  }[];


  @Column({
    defaultValue:'Simple'
  })
  type:string

  @Column({defaultValue:[],type:DataType.ARRAY(DataType.STRING)})
  attributes:[string]

  @Column({
    type:DataType.JSON,
    defaultValue:{}
  })
  variable:{
    
  }


}
