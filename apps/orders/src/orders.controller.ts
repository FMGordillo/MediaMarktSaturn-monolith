import { Controller } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { MQ_TOPICS } from 'config/constants';
import { OrdersService } from './orders.service';
import { CreateOrderDto } from 'commons/dto/create-order.dto';
import { UpdateOrderDto } from 'commons/dto/update-order.dto';

@Controller()
export class OrdersController {
  constructor(private readonly orderService: OrdersService) {}

  @EventPattern(MQ_TOPICS.CREATE_ORDER)
  create(data: CreateOrderDto) {
    return this.orderService.create(data);
  }

  @EventPattern(MQ_TOPICS.GET_ORDER)
  find({ id }: { id: string }) {
    return this.orderService.find(id);
  }

  @EventPattern(MQ_TOPICS.LIST_ORDERS)
  findAll() {
    return this.orderService.findAll();
  }

  @EventPattern(MQ_TOPICS.UPDATE_ORDER)
  async update({
    id,
    updateOrderDto,
  }: {
    id: string;
    updateOrderDto: UpdateOrderDto;
  }) {
    return this.orderService.update(id, updateOrderDto);
  }
}
