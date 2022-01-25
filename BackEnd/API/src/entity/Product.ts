import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import {ObjectType, Field, Int, Float} from 'type-graphql';

@ObjectType()
@Entity('products')
export class Product extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => Int)
	@Column('int')
	companyId: number;

	@Field(() => String)
	@Column('text')
	name: string;

	@Field(() => String)
	@Column('text')
	description: string;

	@Field(() => String)
	@Column('text')
	color: string;

	@Field(() => String)
	@Column('text')
	size: string;

	@Field(() => Float)
	@Column('float')
	price: number;
}