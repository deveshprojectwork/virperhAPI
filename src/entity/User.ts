import { Entity, PrimaryGeneratedColumn,Column,BaseEntity  } from "typeorm";
import {Field, Int,ObjectType} from "type-graphql"

@ObjectType()
@Entity()   
export class User extends BaseEntity{
    @Field(()=>Int)
    @PrimaryGeneratedColumn()
    id:number

    @Field()
    @Column()
    firstname: string;

    @Field()
    @Column()
    lastname: string;

    @Field()
    @Column()
    password: string;

    @Field()
    @Column()
    email: string;

    @Field()
    @Column()
    phone: string;

    @Field()
    @Column()
    city: string;

    @Field()
    @Column()
    state: string;

    @Field()
    @Column()
    postcode: string;

    @Field()
    @Column()
    country: string;

    @Field(()=>Int)
    @Column("int", {default:60})
    roleid:number

    @Field(()=>Int)
    @Column("int", {default:60})
    groupid:number
}