import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { CreateOrderDto } from './create-order.dto';
import * as amqp from 'amqplib';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private ordersRepository: Repository<Order>,
  ) {}

  async create(createOrderDto: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.items = createOrderDto.items;
    order.customerEmail = createOrderDto.customerEmail;
    order.status = 'Pending';
    await this.ordersRepository.save(order);

    const connection = await amqp.connect('amqp://localhost');
    const channel = await connection.createChannel();
    await channel.assertExchange('orderExchange', 'fanout', { durable: false });
    channel.publish('orderExchange', '', Buffer.from(JSON.stringify(order)));

    return order;
  }

  findOne(id: string): Promise<Order> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    return this.ordersRepository.findOne(id);
  }
}
