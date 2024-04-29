import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Customers extends Model {
  @Column
  email: string;

  @Column
  password: string;

  @Column
  fName: string;

  @Column
  lName: string;
}
