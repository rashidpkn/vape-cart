import { Column, Model, Table, DataType } from 'sequelize-typescript';

@Table
export class Product extends Model {

  //Partner Details
  @Column({ defaultValue: 'Vape Monkey' })
  username: string;
  @Column({ defaultValue: 'Vape Monkey' })
  storeName: string;
  @Column({ defaultValue: 'tpquNGEnfDOqPlug2Nh7VdzgcJ33' })
  userId: string;

  
  //Product Details
  @Column
  name: string;
  @Column({ type: DataType.STRING(15000) })
  subDescription: string;
  @Column({ type: DataType.STRING(15000) })
  content: string;
  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: ['https://vape-amazon.com/img/no-image.jpg'],})
  images: string[];

  
  @Column({defaultValue: 'Simple',})
  type: string;
  @Column({ defaultValue: 'None' })
  category: string;
  @Column({ type: DataType.ARRAY(DataType.STRING), defaultValue: [],})
  tags: string[];
  @Column
  SKU: string;
  @Column
  brand: string;
  @Column({ defaultValue: 'Published' })
  status: string;

  @Column({type: DataType.JSON,defaultValue: null,})
  attributes: {bottleSize?: string[];puffs?: string[];flavour?: string[];nicotineStrength?: string[];color?: string[];batteries?: string[];};


  @Column({ defaultValue: true })
  track: boolean;
  @Column({ defaultValue: 100 })
  quantity: number;
  @Column({ type: DataType.FLOAT })
  regularPrice: number;
  @Column({ type: DataType.FLOAT })
  salePrice: number;


  @Column({ type: DataType.ARRAY(DataType.JSON),defaultValue: [],})
  variations: {
    attributes: { bottleSize?: string; puffs?: string; flavour?: string; nicotineStrength?: string; color?: string; batteries?: string;};
    track: boolean;
    quantity: number;
    regularPrice: number;
    salePrice: number;
    image: string;
  }[];


  @Column({type: DataType.ARRAY(DataType.JSON),defaultValue: [],})
  reviews: { rating: number; review: string; name: string; email: string;}[];

}
