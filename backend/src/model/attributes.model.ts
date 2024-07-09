import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Attributes extends Model {

  @Column
  username: string;

  @Column
  attribute:string

  @Column
  value:string
    
}
