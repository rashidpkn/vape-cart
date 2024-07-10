import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {
  @Column({ defaultValue: 'Vape Monkey' })
  username: string;

  @Column({ defaultValue: 'Vape Monkey' })
  storeName: string;

  @Column({ defaultValue: 'tpquNGEnfDOqPlug2Nh7VdzgcJ33' })
  userId: string;

  @Column
  name: string;

  @Column({ type: DataType.STRING(15000) })
  subDescription: string;

  @Column({ type: DataType.STRING(15000) })
  content: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: ['https://vape-amazon.com/img/no-image.jpg'],
  })
  images: string[];

  @Column({
    defaultValue: 'Simple',
  })
  type: string;

  @Column({ defaultValue: 'None' })
  category: string;

  @Column({
    type: DataType.ARRAY(DataType.STRING),
    defaultValue: [],
  })
  tags: string[];

  @Column
  parentSku: string;

  @Column
  brand: string;

  @Column({ defaultValue: [], type: DataType.ARRAY(DataType.STRING) })
  attributes: [string];

  @Column({ defaultValue: {}, type: DataType.JSON })
  variables: {};

  @Column
  SKU: string;

  @Column
  track: boolean;

  @Column({ defaultValue: 20 })
  quantity: number;

  @Column({ type: DataType.FLOAT })
  regularPrice: number;

  @Column({ type: DataType.FLOAT })
  salePrice: number;

  @Column
  productGroup:string

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
}
