import { Column, Model, Table, DataType } from "sequelize-typescript";

@Table
export class Product extends Model {

    
    @Column
    name: string

    @Column({defaultValue:'Vape Monkey'})
    username:string

    @Column({defaultValue:'Vape Monkey'})
    storeName:string

    @Column({})
    userId:string

    @Column({type:DataType.STRING(15000)})
    subDescription:string

    @Column({type:DataType.STRING(15000)})
    content:string

    @Column({
        type: DataType.ARRAY(DataType.STRING),
        defaultValue:['https://delhi-vape.com/img/no-image.jpg']
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

    @Column({type:DataType.FLOAT})
    regularPrice:number

    @Column({type:DataType.FLOAT})
    salePrice:Number

    @Column({type:DataType.FLOAT})
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