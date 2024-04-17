
import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table
export class Payout extends Model {
    
    @Column
    fName:string

    @Column
    email:string

    @Column
    phone:string

    @Column
    method:string

    @Column
    currency:string

    @Column
    network:string

    @Column({type:DataType.FLOAT})
    amount :number

    @Column({type:DataType.JSON})
    account:{
        name:string,
        number:string,
        bankName:string,
        address:string,
        beneficiaryAddress:string,
        swift:string,
        routingNumber:string
    }

    @Column
    walletAddress:string

    @Column
    transactionId:string

    @Column ({defaultValue:'pending'})
    status:string
}