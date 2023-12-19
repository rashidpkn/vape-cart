import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table
export class Product extends Model {

    
    @Column({allowNull:false,unique:true})
    name: string

    @Column({allowNull:false})
    username:string

    @Column({allowNull:false})
    storeName:string

    @Column({allowNull:false})
    userId:string

    @Column({type:DataType.STRING(1200),allowNull:false})
    subDescription:string

    @Column({type:DataType.STRING(5000),allowNull:false})
    content:string

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        defaultValue:[]
    })
    images: string[]

    

    @Column
    SKU:string

    @Column({defaultValue:0})
    quantity:number

    @Column
    category:string

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        defaultValue:[]
    })
    colors:string[]


    @Column({
        type: DataType.ARRAY(DataType.STRING),
        defaultValue:[]
    })
    tags:string[]

    @Column
    regularPrice:number

    @Column
    salePrice:Number

    @Column
    tax:Number

    @Column({defaultValue:true})
    publish:Boolean

    @Column({
        type: DataType.ARRAY(DataType.JSON),
        defaultValue:[]
    })
    reviews:{
        rating:number,
        review:string,
        name:string,
        email:string
    }[]

}