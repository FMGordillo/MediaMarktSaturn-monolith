import { Controller } from '@nestjs/common';
import { InvoicesService } from './invoices.service';
import { MQ_TOPICS } from 'config/constants';
import { CreateInvoiceDto } from 'commons/dto/create-invoice.dto';
import { EventPattern } from '@nestjs/microservices';

@Controller()
export class InvoicesController {
  constructor(private readonly invoiceService: InvoicesService) {}

  @EventPattern(MQ_TOPICS.CREATE_INVOICE)
  create(data: CreateInvoiceDto) {
    return this.invoiceService.create(data);
  }

  @EventPattern(MQ_TOPICS.CREATE_INVOICE)
  @EventPattern(MQ_TOPICS.UPDATE_ORDER)
  send(id: string) {
	console.log("hey");
	const invoice = this.invoiceService.findById(id);
	console.log(invoice);
  }

}
