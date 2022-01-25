import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';

@ObjectType()
@Entity('companies')
export class Company extends BaseEntity {
	@Field(() => Int)
	@PrimaryGeneratedColumn()
	id: number;

	@Field(() => String)
	@Column('text')
	title: string;

	@Field(() => String)
	@Column('text')
	address: string;

	@Field(() => String)
	@Column('text')
	email: string;

	@Column('text')
	password: string;
}