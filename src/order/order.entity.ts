import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('json')
  items: { name: string, price: number }[];

  @Column()
  customerEmail: string;

  @Column()
  status: string;
}
