import { MicroserviceOptions, Transport } from '@nestjs/microservices';

export const MQ_SERVICES = {
  ORDERS: 'ORDERS_SERVICE',
  INVOICES: 'INVOICES_SERVICE',
} as const;

export const MQ_TOPICS = {
  CREATE_ORDER: 'order.create',
  GET_ORDER: 'order.get',
  LIST_ORDERS: 'order.list',
  UPDATE_ORDER: 'order.update',

  CREATE_INVOICE: 'invoice.update',
  SEND_INVOICE: 'invoice.send',
} as const;

export const MQ_CONFIGURATION_REGISTER: Record<
  keyof typeof MQ_SERVICES,
  MicroserviceOptions
> = {
  ORDERS: {
    transport: Transport.TCP,
    options: { port: 3001 },
  } as const,
  INVOICES: {
    transport: Transport.TCP,
    options: { port: 3002 },
  } as const,
} as const;
