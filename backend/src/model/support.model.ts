import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Support extends Model {
  @Column
  username:string

  @Column
  email:string

  @Column
  subject:string

  @Column
  message:string

  @Column
  type:string

  @Column({ defaultValue: 'pending' })
  status: string;
}
