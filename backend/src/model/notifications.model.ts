import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Notifications extends Model {
    @Column({allowNull:false})
    userId:string

    @Column({defaultValue:"user"})
    role:string

    @Column({allowNull:false})
    type:string

    @Column({allowNull:false})
    title:string
    
    @Column({allowNull:false})
    message:string
    
    @Column({defaultValue:"unread"})
    status:string
}