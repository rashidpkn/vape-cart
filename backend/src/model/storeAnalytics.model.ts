
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class StoreAnalytics extends Model {
    
    @Column
    name: string

    @Column
    storeName:string

}
