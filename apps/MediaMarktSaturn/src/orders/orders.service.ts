import { Injectable } from '@nestjs/common';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';
import { Client, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class OrdersService {
  @Client({ options: { port: 3001 }, transport: Transport.TCP })
  client: ClientProxy;
  readonly orders: Order[] = [];

  create(createOrderDto: CreateOrderDto) {
    this.orders.push(createOrderDto as Order);
  }

  findAll() {
    return this.orders;
  }

  findOne(id: number) {
    this.orders.find((order) => order.id === id);
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    this.orders.find((order) => order.id === id);
    // TODO: Finish this, you lazy fuck
    return 'Not supported yet';
  }
}
