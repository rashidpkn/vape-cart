import { Column, Model, Table, Unique } from 'sequelize-typescript';

@Table
export class Brands extends Model {

    @Unique
  @Column
  name: string;

  
    
}
