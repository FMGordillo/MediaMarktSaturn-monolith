import { Body, Controller, Post } from '@nestjs/common';
import { Client, ClientProxy } from '@nestjs/microservices';
import { CreateInvoiceDto } from 'commons/dto/create-invoice.dto';
import { MQ_CONFIGURATION_REGISTER, MQ_TOPICS } from 'config/constants';

@Controller('invoices')
export class InvoicesController {
  @Client(MQ_CONFIGURATION_REGISTER.INVOICES as any)
  client: ClientProxy;

  @Post()
  create(@Body() createInvoiceDto: CreateInvoiceDto) {
    return this.client.send(MQ_TOPICS.CREATE_INVOICE, createInvoiceDto);
  }

  @Post('/send')
  send(@Body() obj: { id: string }) {
    return this.client.send(MQ_TOPICS.SEND_INVOICE, obj);
  }
}
